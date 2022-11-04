export const deployments: Deployments = {
  1: {
    null: '0x0000000000000000000000000000000000000000', // ETH
    deployer: '0x0B7056e2D9064f2ec8647F1ae556BAcc06da6Db4', // deployer.pob.eth
    london: '0x491D6b7D6822d5d4BC88a1264E1b47791Fd8E904', // $LONDON
    printServiceV2: '0xD8932fC665b692AA612F58b31841B10FFD8FE401', // PrintServiceV2
    poster: '0xA99757De24893FEC6B51610C754C62635b42AE13', // $POSTER token
  },
  5: {
    null: '0x0000000000000000000000000000000000000000', // ETH
    deployer: '0x0B7056e2D9064f2ec8647F1ae556BAcc06da6Db4', // deployer.pob.eth
    london: '0x243901455D1B8ef76678b32b4459602CC6B730ae', // $LONDON
    printServiceV2: '0x1773b735484FD48256902D7BbfB953a7e00A9636', // PrintServiceV2
    poster: '0xa394B401C18bFA24513b1b18048f8D900d3c9018', // $POSTER token
  },
};
interface Deployments {
  [chainId: number]: {
    null: string;
    deployer: string;
    london: string;
    printServiceV2: string;
    poster: string;
  }
}