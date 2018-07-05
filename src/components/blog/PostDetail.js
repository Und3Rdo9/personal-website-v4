import React from 'react';
import PropTypes from 'prop-types';
import Container from './../common/Container';
import Section from './../common/Section';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';
import Helmet from 'react-helmet';

const PostDetail = ({
  title,
  coverImage,
  tags,
  authorName,
  dateAndTime,
  content,
  metaDescription
}) => {
  return (
    <article className="post-detail">
      <Helmet>
        <title>{title} - Tim Bakkum | Amsterdam based front-end developer</title>
        <meta name="description" content={metaDescription} />
      </Helmet>
      <figure className="post-detail__figure">
        <img src={coverImage} alt={title} className="post-detail__image" />
        <div className="post-detail__meta">
          <span className="post-detail__pubdate">
            <span className="sr-only">Published on&nbsp;</span>
            <time pubdate="true" dateTime={dateAndTime}>
              {format(dateAndTime, 'DD MMMM YYYY')}{' '}
            </time>
          </span>
          <span className="post-detail__author">{`By ${authorName}`}</span>
        </div>
      </figure>
      <Container>
        <Section>
          <h1 className="post-detail__title">{title}</h1>
          <section className="post-detail__content">
            <ReactMarkdown source={content} />
          </section>
        </Section>
        <Section>
          <h6>Comments</h6>
          <p>Thanks for reading my article. Currently comments are unavailable. I'm working on SSR and implementing comments. Until then, feel free to contact me in any other way.</p>
        </Section>
      </Container>
    </article>
  );
};

PostDetail.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    coverImage: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    authorName: PropTypes.string.isRequired,
    dateAndTime: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  })
};

export default PostDetail;
