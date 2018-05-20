import React from 'react';
import Container from './../common/Container';
import graphCmsLogo from './../../assets/images/graphCMS.svg';
import linkedInLogo from './../../assets/images/linkedin.svg';
import twitterLogo from './../../assets/images/twitter.svg';
import githubLogo from './../../assets/images/github.svg';

const Footer = () => (
  <footer className='app__footer footer'>
    <Container>
      <section className='footer__contents'>
        <h5>
          Elsewhere on the web
        </h5>
        <ul className='unstyled-list unstyled-list--horizontal'>
          <li>
            <a href="" target='_blank'>
              <img src={linkedInLogo} className='footer__icon' />
              <span className='sr-only'>LinkedIn profile</span>
            </a>
          </li>
          <li>
            <a href="">
              <img src={githubLogo} className='footer__icon' />
              <span className='sr-only'>Github profile</span>
            </a>
          </li>
          <li>
            <a href="">
              <img src={twitterLogo} className='footer__icon' />
              <span className='sr-only'>Twitter profile</span>
            </a>
          </li>
        </ul>

        <h5>Website made with the help of: </h5>
        <a href='https://graphcms.com/' title='GraphCMS Website' target='_blank'>
          <img src={graphCmsLogo} alt='GraphCMS Logo' />
        </a>
        <a href='http://sophieshand.com' target='_blank'>Sophie Shand - Graphic Designer</a>
        <p>Copyright &copy; Tim Bakkum 2018</p>
      </section>
    </Container>
  </footer>
);

export default Footer;
