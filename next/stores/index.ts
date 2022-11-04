import create from 'zustand';
import { redux } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

interface EnsStoreState {
  addressToEnsMap: { [x: string]: string };
  setEns: (address: string, ens: string) => void;
}
export const useEnsStore = create(
  immer<EnsStoreState>((set) => ({
    addressToEnsMap: {},
    setEns: (address: string, name: string) => {
      set((update) => {
        update.addressToEnsMap[address] = name;
      });
    },
  })),
);

const grumpyActions = { increase: 'INCREASE', decrease: 'DECREASE' };
const grumpyReducer = (
  state: { grumpiness: number } | undefined,
  { type, by = 1 }: { type: string | undefined; by: number | undefined },
) => {
  if (state) {
    switch (type) {
      case grumpyActions.increase:
        return { grumpiness: state.grumpiness + by };
      case grumpyActions.decrease:
        return { grumpiness: state.grumpiness - by };
    }
  }
};
export const useGrumpyStore = create(
  redux(grumpyReducer, {
    grumpiness: 0,
  }),
);
