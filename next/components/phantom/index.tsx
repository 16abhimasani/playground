import { QueryClientProvider } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { FC, Fragment, useMemo } from 'react';
import styled from 'styled-components';
import { PhantomProvider, usePhantomContext } from './context';
import { PhantomTokenRecord } from './hooks/usePhantomAssets';
import { Container, GREEN, RED, Wrapper } from './styles';
import { queryClient } from './utils';

export const Phantom: FC = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <PhantomProvider>
          <PhantomWidget />
        </PhantomProvider>
      </QueryClientProvider>
    </>
  );
};

const PhantomWidget: FC = () => {
  const { records } = usePhantomContext();
  return (
    <>
      <Wrapper>
        <Container>
          <PhantomHeader />
          {records && records?.length > 0 && (
            <TokensContainer>
              {records
                .filter((record: any) => record.amount > 0)
                .map((record: PhantomTokenRecord, index: number) => (
                  <Fragment key={`records-${index}=${record.symbol}`}>
                    <Token token={record} />
                  </Fragment>
                ))}
            </TokensContainer>
          )}
        </Container>
      </Wrapper>
    </>
  );
};

const PhantomHeader: FC = () => {
  const { totalBalance } = usePhantomContext();
  return (
    <HeaderContainer>
      <LargeHeaderText>{totalBalance}</LargeHeaderText>
      <div>price</div>
      <Buttons>
        <button>test</button>
        <button>test</button>
      </Buttons>
    </HeaderContainer>
  );
};

const HeaderContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
`;

const LargeHeaderText = styled(motion.div)`
  font-size: 32px;
`;

const Buttons = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 16px;
  width: 100%;
  margin-top: 8px;
  button {
    outline: none;
    border: none;
    background: #4c45c6;
    border-radius: 999px;
    padding: 12px 24px;
    width: 100%;
  }
`;

const Token: FC<{ token: PhantomTokenRecord }> = ({ token }) => {
  const { prices } = usePhantomContext();
  const priceObj = useMemo(() => {
    if (prices) {
      const keys = Object.keys(prices);
      if (keys.includes(token?.symbol?.toLowerCase())) {
        return prices[token?.symbol?.toLowerCase()];
      }
    }
    return undefined;
  }, [prices, token]);
  const totalValue = useMemo(() => {
    if (priceObj?.usd && token?.amount) {
      const total = priceObj.usd * Number(token.amount);
      return `$${total.toFixed(2)}`;
    }
    return ``;
  }, [priceObj, token]);
  const totalPriceDiff = useMemo(() => {
    if (priceObj?.usd_24h_change && token?.amount) {
      const total = priceObj.usd_24h_change * Number(token.amount);
      return `${total.toFixed(2)}`;
    }
    return ``;
  }, [priceObj, token]);
  return (
    <>
      <TokenContainer>
        <TokenIconsAndBalance>
          <TokenIcon src={`${token.imageUrl}`} />
          <TokenStack>
            <TokenName>{token.name}</TokenName>
            <TokenBalance>{token.amount}</TokenBalance>
          </TokenStack>
        </TokenIconsAndBalance>
        {priceObj && (
          <PriceStack>
            <TokenName>{totalValue}</TokenName>
            <TokenPrice
              style={{
                color: priceObj?.usd_24h_change?.toString()?.includes('-')
                  ? RED
                  : GREEN,
              }}
            >
              {totalPriceDiff}
            </TokenPrice>
          </PriceStack>
        )}
      </TokenContainer>
    </>
  );
};

const TokensContainer = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 32px;
`;

const TokenContainer = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #2c2d30;
  border-radius: 8px;
  padding: 8px;
`;

const TokenIconsAndBalance = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 12px;
  background: transparent;
`;

const TokenIcon = styled(motion.img)`
  width: 40px;
  height: 40px;
  border-radius: 999px;
`;

const TokenStack = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 4px;
  background: transparent;
  text-align: left;
`;
const TokenName = styled(motion.div)`
  font-size: 16px;
`;
const TokenBalance = styled(motion.div)`
  font-size: 12px;
  opacity: 0.5;
`;

const PriceStack = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 4px;
  background: transparent;
  text-align: right;
`;
const TokenPrice = styled(motion.div)`
  font-size: 12px;
`;
