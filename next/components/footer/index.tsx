import Image from 'next/image';
import { FC } from 'react';
import { FooterContainer } from './styles';

export const Footer: FC = () => {
  return (
    <>
      <FooterContainer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </FooterContainer>
    </>
  );
};
