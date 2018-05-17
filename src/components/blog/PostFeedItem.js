import React from 'react';
import { Link } from 'react-router-dom';

const PostFeedItem = ({ post }) => {
  const { title, summary, coverImage, slug } = post;
  return (
    <article className='post-feed__item'>
      <img
        className='post-feed__item-cover'
        src={coverImage.url}
        alt={title}
      />
      <h3 className='post-feed__item-title'>{title}</h3>
      <p className='post-feed__item-summary'>{summary}</p>
      <Link to={`/frontend-blog/${slug}`} className='button button--primary'>Read more</Link>
    </article>
  )
}

export default PostFeedItem;
