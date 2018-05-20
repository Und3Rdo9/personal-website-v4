import React from 'react';
import PropTypes from 'prop-types';
import Container from './../common/Container';
import Section from './../common/Section';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';

const PostDetail = ({ title, coverImage, tags, authorName, dateAndTime, content }) => {
  console.log(dateAndTime);
  return (
    <article className='post-detail'>
      <figure className='post-detail__figure'>
        <img
          src={coverImage}
          alt={title}
          className='post-detail__image'
        />
        <div className="post-detail__meta">
          <span className='post-detail__pubdate'>
            <span className='sr-only'>Published on&nbsp;</span>
            <time pubdate datetime={dateAndTime}>{format(dateAndTime, 'DD MMMM YYYY')} </time>
          </span>
          <span className='post-detail__author'>
            {`By ${authorName}`}
          </span>
        </div>
      </figure>
      <Container>
        <Section>
          <h1 className='post-detail__title'>{title}</h1>
          <section className='post-detail__content'>
            <ReactMarkdown source={content} />
          </section>
        </Section>
      </Container>
    </article>
  );
};

export default PostDetail;
