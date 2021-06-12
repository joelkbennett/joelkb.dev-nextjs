import { useRecoilValue } from 'recoil';
import * as Window from '@state/window';

enum Orientation {
  Portrait = 'Portrait',
  Landscape = 'Landscape',
}

export enum ScreenSize {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
  xxl = 'xxl',
  xxxl = 'xxxl',
}

function setScreenSize(width: number): ScreenSize {
  if (width <= 360) {
    return ScreenSize.xs;
  } else if (width <= 640) {
    return ScreenSize.sm;
  } else if (width <= 768) {
    return ScreenSize.md;
  } else if (width <= 1024) {
    return ScreenSize.lg;
  } else if (width <= 1280) {
    return ScreenSize.xl;
  } else if (width <= 1536) {
    return ScreenSize.xxl;
  } else {
    return ScreenSize.xxxl;
  }
}

export default function useViewport() {
  const { width, height } = useRecoilValue(Window.viewportState);
  const orientation =
    width / height < 1 ? Orientation.Portrait : Orientation.Landscape;
  const size = setScreenSize(width);

  return { width, height, orientation, size };
}
