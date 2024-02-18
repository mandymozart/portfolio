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
  cursor: pointer;
  justify-content: center;
  border: 1px solid var(--primary);
  background: rgba(255, 255, 255, 0.0001);
  backdrop-filter: blur(10px);
  transition: all 0.2s ease-in-out;
  &:hover {
    background: var(--solid);
    color: var(--secondary);
  }
  svg {
    margin-left: 1rem;
  }
  &.methods {
    border-color: var(--accent);
    &.selected,
    &:hover {
      background: var(--accent);
      color: var(--primary);
    }
  }
  &.industries {
    border-color: var(--aero-blue);
    &.selected,
    &:hover {
      background: var(--aero-blue);
      color: var(--primary);
    }
  }
  &.roles {
    border-color: var(--anakiwa);
    &.selected,
    &:hover {
      background: var(--anakiwa);
      color: var(--primary);
    }
  }
  &.types {
    border-color: var(--mauvelous);
    &.selected,
    &:hover {
      background: var(--mauvelous);
      color: var(--primary);
    }
  }
  &.skills {
    border-color: var(--tidal);
    &.selected,
    &:hover {
      background: var(--tidal);
      color: var(--primary);
    }
  }
  &.partners {
    border-color: var(--perfume);
    &.selected,
    &:hover {
      background: var(--perfume);
      color: var(--primary);
    }
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
