import { useEffect } from 'react';

export const App = ({ a }: { a: number }) => {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(a);
  }, [a]);

  return <h1>Welcome to Cat Playground (React + Vite)!</h1>;
};
