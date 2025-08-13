import { useEcho } from '../api';
import type { Echo } from '../types';

export const Root = () => {
  const { data: echo, error } = useEcho({
    message: 'Hello, World!',
  });

  return (
    <>
      <h1>Welcome to Cat Playground (React + Vite)!</h1>
      {echo && <Echo echo={echo} />}
      {error && (
        <div>
          <h2>Error</h2>
          {error.message}
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </div>
      )}
    </>
  );
};

type EchoParams = { echo: Echo };
const Echo = ({ echo }: EchoParams) => {
  return <div>{echo.message}</div>;
};
