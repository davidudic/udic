'use client';

import dynamic from 'next/dynamic';

const BackgroundFX = dynamic(() => import('./BackgroundFX'), { ssr: false });

export function BackgroundFXClient() {
  return <BackgroundFX />;
}

