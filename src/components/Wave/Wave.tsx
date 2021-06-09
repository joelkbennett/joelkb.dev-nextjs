import * as React from 'react';
import useWave from '../../hooks/useWave';

export default function Wave() {
  const wave = useWave();
  return <>{wave}</>;
}
