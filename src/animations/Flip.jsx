import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

const Container = styled.div`
  position: relative;
  overflow: hidden;
  display: inline-block;
`;

const FlippableText = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Flip = ({ children }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  return (
    <Container
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <FlippableText
        initial={{ translateY: '0%' }}
        animate={{ translateY: isFlipped ? '-100%' : '0%' }}
        exit={{ translateY: '100%' }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}>
        {children}
      </FlippableText>
    </Container>
  );
};

export default Flip;
