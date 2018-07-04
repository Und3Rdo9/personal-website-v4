import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import Helmet from 'react-helmet';

import Container from './../common/Container';

const ContentPage = ({ title, coverImage, content, metaDescription }) => {
  return (
    <article className="page">
      <Helmet>
          <title>{title} - Tim Bakkum | Amsterdam based front-end developer</title>
          <meta name="description" content={metaDescription} />
      </Helmet>
      <Container>
        <h1 className="page__title">{title}</h1>
        <section className="page__content">
          <ReactMarkdown source={content} />
        </section>
      </Container>
    </article>
  );
};

ContentPage.propTypes = {
  title: PropTypes.string.isRequired,
  coverImage: PropTypes.string,
  content: PropTypes.string.isRequired
};

export default ContentPage;
