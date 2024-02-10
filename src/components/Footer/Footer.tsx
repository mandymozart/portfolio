'use client';
import styled from '@emotion/styled';
import { SlSocialGithub, SlSocialLinkedin } from 'react-icons/sl';
import { playToneAtRoute } from '../../audio';
import useMenuStore from '../../stores/MenuStore';
import ButtonLink from '../Common/FormElements/ButtonLink';
import { emitRouteChange } from './../../events/routerEvents';
import { SlideInRoute, routes } from './../../slideInRoutes';

const Container = styled.div`
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 1rem;
  line-height: 1.5rem;
  padding: var(--grid-padding) 0;
  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 4fr;
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

  const navigateTo = (to: SlideInRoute) => {
    console.log('navigateTo', activeMenuItem.key, to.key);
    if (activeMenuItem.key === to.key) {
      playToneAtRoute();
    } else {
      playToneAtRoute(to.key);
      emitRouteChange({ to });
      setActiveMenuItem(to);
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
          <a
            href='https://linkedin.com/mandymozartdhsdjfghsdfhg'
            target='_blank'>
            <SlSocialLinkedin />
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
        <nav className='attribution'>
          <ul>
            <li>
              <ButtonLink onClick={() => navigateTo(routes.ATTRIBUTIONS)}>
                Attributions
              </ButtonLink>
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  );
};

export default Footer;
