import styled from '@emotion/styled';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { staggerVariants } from '../../../animations/site';

const Container = styled.div`
  :root {
    @property --accordion-color {
      syntax: '<color>';
      inherits: false;
      initial-value: var(--primary);
    }
  }
  border-bottom: 1px solid var(--accordion-color);
  width: 100%;
  header {
    cursor: pointer;
    height: 4rem;
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg {
    }
  }
  .content {
    overflow: hidden;
  }
`;

// interface Props {
//     item: number;
//     expanded: number | false;
//     setExpanded: (i: number | false) => void;
//     contentNode: React.ReactNode;
// }

const AccordionItem = ({ item, expanded, setExpanded }) => {
  const isOpen = item.key === expanded;
  return (
    <Container>
      <motion.header
        initial={false}
        // animate={{ backgroundColor: isOpen ? '#FF0088' : '#0055FF' }}
        onClick={() => setExpanded(isOpen ? false : item.key)}>
        <div>{item.title}</div>
        <div>
          <motion.svg
            width='32'
            height='32'
            viewBox='0 0 32 32'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <motion.path
              id='horizontal'
              d='M0 16H32'
              stroke='currentColor'
            />
            <motion.path
              initial={false}
              animate={{ rotate: isOpen ? '270deg' : 0 }}
              transition={{
                delay: 0.2,
                duration: 0.3,
                ease: [0.04, 0.62, 0.23, 0.98],
              }}
              d='M16 0V32'
              stroke='currentColor'
            />
          </motion.svg>
        </div>
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key='content'
            initial='collapsed'
            animate='open'
            exit='collapsed'
            className='content'
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.2, ease: [0.04, 0.62, 0.23, 0.98] }}>
            {item.content}
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
};
const AccordionContainer = styled.div``;
export const Accordion = ({ items, ...props }) => {
  if (!items) return <></>;
  // This approach is if you only want max one section open at a time. If you want multiple
  // sections to potentially be open simultaneously, they can all be given their own `useState`.
  const [expanded, setExpanded] = useState();

  return (
    <AccordionContainer {...props}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial='offscreen'
          whileInView='onscreen'
          custom={index}
          variants={staggerVariants}>
          <AccordionItem
            item={item}
            expanded={expanded}
            setExpanded={setExpanded}
          />
        </motion.div>
      ))}
    </AccordionContainer>
  );
};

export const Example = () => <Accordion items={items} />;
const items = [
  {
    key: 1,
    title: 'What is a dog?',
    content:
      'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.',
  },
  {
    key: 2,
    title: 'What kinds of dogs are there?',
    content:
      'There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.',
  },
];
