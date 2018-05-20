import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

import Container from './../common/Container';

const ContentPage = ({ title, coverImage, content }) => {
  return (
    <article className='page'>
      <Container>
        <h1 className='page__title'>{title}</h1>
        <section className='page__content'>
          <ReactMarkdown source={content} />
        </section>
      </Container>
    </article>
  );
};

export default ContentPage;
