import { createContext, FC, ReactElement, useContext, useMemo } from 'react';
import {
  CoinGeckoPricesResponse,
  PhantomTokenRecord,
  usePhantomAssets,
  usePhantomPrices,
} from './hooks/usePhantomAssets';

interface ProviderProps {
  children?: ReactElement;
}
interface ProviderState {
  records: PhantomTokenRecord[] | undefined;
  prices: CoinGeckoPricesResponse | undefined;
  totalBalance: number | string | undefined;
}
const initialState: ProviderState = {
  records: undefined,
  prices: undefined,
  totalBalance: undefined,
};
export const usePhantomContext = (): ProviderState => {
  return useContext(Context);
};

export const PhantomProvider: FC<ProviderProps> = ({ children }) => {
  const data = usePhantomAssets();
  const records = data?.records;
  const tokensList = records?.map((record: any) => record.symbol);
  const prices = usePhantomPrices(tokensList);
  const totalBalance = useMemo(() => {
    let sum = 0;
    if (records && prices && tokensList) {
      const priceKeys = Object.keys(prices);
      const tokenRecordsWithPrices = records.filter((record: any) =>
        priceKeys.includes(record?.symbol?.toLowerCase()),
      );
      tokenRecordsWithPrices.forEach((token: any) => {
        const symbol = token.symbol;
        const balance = Number(token.amount);
        const usdPrice = prices[symbol?.toLowerCase()!]?.usd;
        sum += Number(usdPrice * balance);
      });
    }
    return `$${sum.toFixed(2)}`;
  }, [prices, tokensList, records]);

  const stateObject = useMemo(() => {
    return { records, prices, totalBalance };
  }, [records, prices, totalBalance]);

  return <Context.Provider value={stateObject}>{children}</Context.Provider>;
};

const Context = createContext<ProviderState>(initialState);
