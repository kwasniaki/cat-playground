import { useEffect, useState } from 'react';
import type { Echo } from '../types';
import { getEcho } from '../api';

export const App = () => {
  const [echo, setEcho] = useState<Echo | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchEcho = async () => {
      const response = getEcho(
        {
          parameters: {
            query: { message: 'Hello, World!' },
          },
        },
        controller.signal,
      );

      response
        .then((res) => {
          if (res.error) {
            setError(res);
          } else {
            setEcho(res.data);
          }
        })
        .catch((err) => {
          setError(err);
        });
    };

    fetchEcho();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <h1>Welcome to Cat Playground (React + Vite)!</h1>
      {echo && <Echo echo={echo} />}
      {error && <div>{error.message}</div>}
    </>
  );
};

type EchoParams = { echo: Echo };
const Echo = ({ echo }: EchoParams) => {
  return <div>{echo.message}</div>;
};
