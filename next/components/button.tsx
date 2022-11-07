import { FC, useState } from "react";
import { useDebounceEffect } from "../hooks/useDebounceEffect";

export const DebounceButtonTest: FC = () => {
  const [count, setCount] = useState(0);
  const [finalCount, setFinalCount] = useState(0); 
  useDebounceEffect(() => setFinalCount(count), [count], 1000);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        wiggle: {finalCount}
      </button>
    </>
  )
}