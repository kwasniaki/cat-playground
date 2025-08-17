import { useEcho } from '../api/get-echo';

export const Echo = () => {
  const { data, error } = useEcho({ message: 'Hello, world!' });
  return (
    <>
      {data && <div>{data.message}</div>}
      {error && (
        <div>
          <h2>Error</h2>
          <p>{error.title}</p>
          <p>{error.details}</p>
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </div>
      )}
    </>
  );
};
