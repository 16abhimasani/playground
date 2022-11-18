import { NextPage } from 'next';
import React, { FC } from 'react';
import styled from 'styled-components';
import { Phantom } from '../components/phantom';

const IndexPage: NextPage = () => {
  return (
    <Page>
      <Header />
      <CenteredContainer>
        <Phantom />
      </CenteredContainer>
    </Page>
  );
};
export default React.memo(IndexPage);

// BOILERPLATE: IGNORE
const Page = styled.div`
  margin: 0;
  padding: 0;
  position: relative;
  width: 100%;
  height: 100vh;
  background: #f2f4f1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    padding: 16px;
    padding-top: 75px;
  }
`;

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 64px;
  background: linear-gradient(rgb(111, 102, 225), rgb(78, 68, 206));
  margin: 0 auto;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
`;

const Header: FC = () => {
  return (
    <>
      <HeaderContainer>
        Phantom
        <LinksGrid>
          <a
            href={`https://github.com/16abhimasani/playground`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Repo
          </a>
          <a
            href={`https://docs.phantom.app/`}
            target="_blank"
            rel="noopener noreferrer"
          >
            API Docs
          </a>
        </LinksGrid>
      </HeaderContainer>
    </>
  );
};

const HeaderContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  top: 0;
  right: 0;
  left: 0;
  padding: 32px;
`;

const LinksGrid = styled.div`
  display: flex;
  gap: 32px;
  a {
    color: black;
    text-decoration: none;
  }
`;

const InputRow = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
`;
const Input = styled.input`
  all: unset;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: none;
  border-left: none;
  width: 100%;
  height: 64px;
  padding: 0 16px;
  font-size: 14px;
  &:not(:first-child) {
    border-right: none;
  }
`;

const Toggles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  position: absolute;
  top: 16px;
  button {
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.5);
    background: transparent;
    border-radius: 999px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 6px 12px;
  }
`;
const Toggled = {
  background: 'rgba(255,255,255,0.5)',
  color: 'black',
  border: 'border: 1px solid white',
};
