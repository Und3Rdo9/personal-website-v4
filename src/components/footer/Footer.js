import React from 'react';
import Container from './../common/Container';
import graphCmsLogo from './../../assets/images/graphCMS.svg';
import linkedInLogo from './../../assets/images/linkedin.svg';
import twitterLogo from './../../assets/images/twitter.svg';
import githubLogo from './../../assets/images/github.svg';

const Footer = () => (
  <footer className="app__footer footer">
    <Container>
      <section className="footer__contents">
        <h5>Elsewhere on the web</h5>
        <ul className="unstyled-list unstyled-list--horizontal">
          <li>
            <a
              href="https://www.linkedin.com/in/tbakkum/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedInLogo} className="footer__icon" alt="" />
              <span className="sr-only">LinkedIn profile</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Und3Rdo9/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubLogo} className="footer__icon" alt="" />
              <span className="sr-only">Github profile</span>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/TimBakk_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitterLogo} className="footer__icon" alt="" />
              <span className="sr-only">Twitter profile</span>
            </a>
          </li>
        </ul>

        <h5>Website made with the help of: </h5>
        <a
          href="https://graphcms.com/"
          title="GraphCMS Website"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={graphCmsLogo} alt="GraphCMS Logo" />
        </a>
        <a
          href="http://sophieshand.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sophie Shand - Graphic Designer
        </a>
        <p>Copyright &copy; Tim Bakkum 2018</p>
      </section>
    </Container>
  </footer>
);

export default Footer;
