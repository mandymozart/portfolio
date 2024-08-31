import styled from '@emotion/styled';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import React from 'react';
import { translateProjectVariants } from '../../../animations/site';
import Cross from '../Icons/Cross';
import docs from './../../../data/index';

const Container = styled.button`
  padding: 0 1rem;
  margin: 0;
  font-family: var(--font);
  font-weight: 100;
  border-radius: 1rem;
  height: 2rem;
  font-size: 1rem;
  border-radius: 1rem;
  height: 2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--primary);
  background: rgba(255, 255, 255, 0.0001);
  backdrop-filter: blur(10px);
  transition: all 0.2s ease-in-out;

  svg {
    margin-left: 1rem;
  }
  &.methods {
    border-color: var(--accent);
  }
  &.industries {
    border-color: var(--aero-blue);
  }
  &.roles {
    border-color: var(--anakiwa);
  }
  &.types {
    border-color: var(--mauvelous);
  }
  &.skills {
    border-color: var(--tidal);
  }
  &.partners {
    border-color: var(--perfume);
  }
`;
const Tag = ({ label, uid, category, selected, ...props }) => {
  return (
    <motion.span
      variants={translateProjectVariants}
      initial='initial'
      animate='enter'
      exit='exit'>
      <Container
        className={clsx(category, { selected: selected })}
        {...props}>
        {uid
          ? docs[category].find((item) => item.uid === uid)?.data.name
          : label}
        {selected && <Cross />}
      </Container>
    </motion.span>
  );
};

export default Tag;
