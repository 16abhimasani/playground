import { NextPage } from 'next';
import React from 'react';
import { Footer } from '../components/footer';
import { TestComp } from '../components/test';

const IndexPage: NextPage = () => {
  return (
    <>
      <TestComp />
      <Footer />
    </>
  );
};
export default React.memo(IndexPage);
