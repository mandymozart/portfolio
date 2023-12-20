import styled from "@emotion/styled";

export const SlideIn = styled.div`
  position: fixed;
  z-index: 1000000;
  top: var(--header-height);
  left: 0;
  bottom: 0;
  right: 0;
  padding: var(--grid-padding);
  transition: all 0.2s ease-in-out;
  transform: translateY(100vh);
  border-radius: 4rem 4rem 0 0;
  background-color: var(--color-captions);
  overflow: auto;
  &.isActive {
    transform: translateY(0);
  }
  &.slidein--footer {
    background-color: var(--primary);
    color: var(--background);
  }
`;
