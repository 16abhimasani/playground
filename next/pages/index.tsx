import { NextPage } from 'next';
import React from 'react';
import { Footer } from '../components/footer';
import { Home } from '../components/home';

const IndexPage: NextPage = () => {
  return (
    <>
      <Home />
      <Footer />
    </>
  );
};
export default React.memo(IndexPage);
