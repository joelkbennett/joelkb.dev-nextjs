import { auth } from 'firebase-admin';
import * as React from 'react';
import useWindowSize from './useViewport';

export enum WaveType {
  Sine = 'Sine',
}

type WaveState = {
  type: WaveType;
  length: number;
  amplitude: number;
  frequency: number;
};

type CanvasState = {
  width: number;
  height: number;
};

const initialWaveState: WaveState = {
  type: WaveType.Sine,
  length: 50,
  amplitude: 3,
  frequency: 0.01,
};

// const initialCanvasState: CanvasState = {
//   width: 800,
//   height: 20,
// }

export default function useWave(waveConfig: WaveState = initialWaveState) {
  // const windowSize = useWindowSize();
  const [waveState, setWaveState] = React.useState(waveConfig);
  const canvas = React.useRef(null);
  const dotIndex = React.useRef(0);
  const frameCount = React.useRef(0);

  const windowSize = {
    width: 1920,
    height: 1080,
  };

  React.useEffect(() => {
    // run when waveState changes
    if (!canvas.current) {
      return;
    }

    const context = canvas.current.getContext('2d');
    const animationId = animateWave(
      context,
      waveState,
      windowSize,
      0,
      dotIndex,
      frameCount,
    );

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [waveState]);

  return (
    <canvas
      ref={canvas}
      id={'waveCanvas'}
      width={windowSize.width}
      height={windowSize.height}
    />
  );
}

// const Wave = React.forwardRef<any, any>(({ width, height }, ref) => {
//   console.warn('!!ref', ref);
//   return <canvas ref={ref} id={'waveCanvas'} width={width} height={height} />;
// });

function animateWave(
  c: CanvasRenderingContext2D,
  waveConfig: WaveState,
  canvasConfig: CanvasState,
  increment: number,
  dotIndexRef,
  frameCountRef,
) {
  let { width, height } = canvasConfig;
  let position = { x: 0, y: height / 2 };
  // frameCountRef.current++;
  // console.warn(frameCountRef.current % 120 === 0)
  // if (frameCountRef.current % 120 === 0) {
  //   console.warn(frameCountRef.current)
  // }

  c.clearRect(0, 0, width, height);
  let alpha = 0.05;

  for (let i = 0; i < width; i++) {
    let blue = 120;
    let shiftAtIndex = 10;

    if (i < 350) {
      alpha += 0.0015;
    } else if (i > width - 350) {
      alpha -= 0.0015;
    }

    c.beginPath();
    c.moveTo(position.x, position.y);

    position.x = i;

    if (i < width / 2) {
      position.y = Math.abs(
        height / 2 +
          Math.sin(waveConfig.length * i + increment * 10) *
            ((waveConfig.amplitude * i) / 300) *
            50,
      );
    } else {
      position.y = Math.abs(
        height / 2 +
          Math.sin(waveConfig.length * i + increment * 10) *
            ((waveConfig.amplitude * (width - i)) / 300) *
            2,
      );
    }

    c.strokeStyle = `rgba(${255},${114},${blue},${alpha})`;

    c.lineTo(position.x, position.y);
    c.stroke();
    c.closePath();
  }

  return requestAnimationFrame(() =>
    animateWave(
      c,
      waveConfig,
      canvasConfig,
      (increment += waveConfig.frequency),
      dotIndexRef,
      frameCountRef,
    ),
  );
}
