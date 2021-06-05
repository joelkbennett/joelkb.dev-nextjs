import { t } from '@lingui/macro';
import * as React from 'react';

interface Props {}

export default function Custom404({
  children,
}: React.PropsWithChildren<Props>) {
  return <>{t({ id: '404.description', message: 'Not found' })}</>;
}
