import type { FC } from 'react';
import { Suspense, lazy } from 'react';
import Logo from './logo.svg?react';

const DynamicChunk = lazy(() => import('./DynamicChunk'));

export const App: FC = () => {
  return (
    <>
      <h1>scaffold-react-esm-rspack-vitest</h1>
      <Logo />
      <Suspense>
        <DynamicChunk />
      </Suspense>
    </>
  );
};
