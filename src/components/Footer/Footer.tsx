'use client';
import styled from '@emotion/styled';
import { SlSocialGithub } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';
import { playToneAtRoute } from '../../audio';
import useMenuStore from '../../stores/MenuStore';
import ButtonLink from '../Common/FormElements/ButtonLink';
import { BREAKPOINT_SM, BREAKPOINT_XS } from './../../../config';
import { SlideInRoute, routes } from './../../slideInRoutes';

const Container = styled.div`
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 1rem;
  line-height: 1.5rem;
  padding: var(--grid-padding) 0;
  flex: 100% 1 1;
  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 4fr;
    @media (max-width: ${BREAKPOINT_SM}) {
      grid-template-columns: 1fr 1fr 2fr;
    }
    @media (max-width: ${BREAKPOINT_XS}) {
      grid-template-columns: 1fr 1fr;
    }
    nav {
      padding: 0 var(--grid-padding);
      &.social a {
        font-size: 1.5rem;
        margin-right: 1rem;
      }
      ul {
        padding: 0;
        list-style: none;
        margin: 0;
      }
    }
  }
`;

const Footer = () => {
  const activeMenuItem = useMenuStore((store) => store.activeMenuItem);
  const setActiveMenuItem = useMenuStore((store) => store.setActiveMenuItem);
  const navigate = useNavigate()

  const navigateTo = (to: SlideInRoute) => {
    console.log('navigateTo', activeMenuItem.key, to.key);
    if (activeMenuItem.key === to.key) {
      playToneAtRoute();
    } else {
      playToneAtRoute(to.key);
      setActiveMenuItem(to);
      navigate(to.key);
    }
  };

  return (
    <Container>
      <div>
        <nav className='social'>
          <a
            href='https://github.com/mandymozart'
            target='_blank'>
            <SlSocialGithub />
          </a>
        </nav>
        <nav className='legal'>
          <ul>
            <li>
              <ButtonLink onClick={() => navigateTo(routes.IMPRINT)}>
                Imprint
              </ButtonLink>
            </li>
            <li>
              <ButtonLink
                link
                onClick={() => navigateTo(routes.PRIVACY)}>
                Privacy Policy
              </ButtonLink>
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  );
};

export default Footer;
