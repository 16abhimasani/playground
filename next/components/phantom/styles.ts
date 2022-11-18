import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ORANGE = `#FDB455`;
export const RED = `#F64747`;
export const GREEN = `#6DE27C`;

export const PHANTOM_BLACK = `#222222`;
export const WHITE = `#FFFFFF`;

export const Wrapper = styled(motion.div)`
  position: relative;
  * {
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: 'antialiased';
    color: ${WHITE};
  }
`;

export const Container = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${PHANTOM_BLACK};
  border-radius: 8px;
  min-width: 300px;
  width: 370px;
  height: 410px;
  padding: 32px 16px;
  overflow: scroll;
`;
