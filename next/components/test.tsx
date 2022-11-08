import { FC, useCallback, useEffect, useState } from 'react';

// async function fetchLatestBlockNumber(): Promise<number>

const fetchLatestBlockNumber = (signal: any): Promise<number> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(5000);
    }, 50);
  });
};

export const TestComp: FC = () => {
  const [blockNum, setBlockNum] = useState<any>(0);
  const [error, setError] = useState<any>(undefined);
  const fetchBlock = useCallback(async () => {
    const controller = new AbortController();
    const signal = controller.signal;
    let abortTimeout = setTimeout(() => {
      controller.abort();
    }, 200);
    let blockNum;
    try {
      blockNum = await fetchLatestBlockNumber(signal);
      if (blockNum) {
        setBlockNum(blockNum);
        clearTimeout(abortTimeout);
      }
    } catch (error) {
      console.error(error, 'fetchLatestBlockNumber FAILED');
      setError(error);
    }
    setTimeout(() => {
      fetchBlock();
    }, 100);
  }, [setBlockNum, setError]);
  useEffect(() => {
    fetchBlock();
  }, []);
  return (
    <>
      <div style={{ color: 'white' }}>blockNum: {blockNum}</div>
    </>
  );
};
