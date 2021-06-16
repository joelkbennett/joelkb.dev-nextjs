export default function softDeleteFilter(prismaClient, targetModel) {
  prismaClient.$use(async (params, next) => {
    if (params.model === targetModel) {
      if (params.action === 'findUnique') {
        params.action = 'findFirst';
        params.args.where['deletedAt'] = null;
      }

      if (params.action === 'findMany') {
        if (params.args.where !== undefined) {
          if (params.args.where.deletedAt === undefined) {
            // Exclude deleted records unless they've been requested
            params.args.where['deletedAt'] = null;
          }
        } else {
          params.args['where'] = { deleted: null };
        }
      }

      if (params.action === 'update') {
        params.action = 'updateMany';
        params.args.where['deletedAt'] = null;
      }

      if (params.action === 'updateMany') {
        if (params.args.where !== undefined) {
          params.args.where['deletedAt'] = null;
        } else {
          params.args['where'] = { deletedAt: false };
        }
      }

      if (params.action === 'delete') {
        params.action = 'update';
        params.args['data'] = { deletedAt: new Date() };
      }

      if (params.action === 'deleteMany') {
        params.action = 'updateMany';
        if (params.args.data !== undefined) {
          params.args.data['deletedAt'] = new Date();
        } else {
          params.args.data = { deletedAt: new Date() };
        }
      }
    }

    return next(params);
  });
}
