import { atom } from 'recoil';

export const scrollPositionState = atom({
  key: 'scrollPositionState',
  default: {
    position: { x: 0, y: 0 },
  },
});

export const viewportState = atom({
  key: 'viewportState',
  default: { width: 0, height: 0 },
});
