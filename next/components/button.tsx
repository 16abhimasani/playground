import { FC, useCallback, useState } from 'react';
import { useDebounceEffect } from '../hooks/useDebounceEffect';

export const DebounceButtonTest: FC = () => {
  const [count, setCount] = useState(0);
  const makeFetch = useCallback((args: any) => {
    console.log('make call to api after debounce'), args;
  }, []);
  useDebounceEffect(() => makeFetch(count), [count], 1000);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>wiggle: {count}</button>
    </>
  );
};
