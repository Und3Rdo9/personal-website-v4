import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PostFeedItem from './PostFeedItem';

configure({ adapter : new Adapter() });

describe('<PostFeedItem />', () => {

  const post = {
    title: 'testTitle',
    summary: 'testSummary',
    slug: 'test-slug',
    coverImage: {
      url: 'http://timbakkum.net'
    },
    dateAndTime: '21380921389'
  };

  const wrapper = shallow(
    <PostFeedItem post={post} />
  );

  it('renders correctly ', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('displays the correct title', () => {
    expect(wrapper.find('.post-feed__item-title').text()).toBe('testTitle');
  });

  it('displays the correct title', () => {
    expect(wrapper.find('.post-feed__item-summary').text()).toBe('testSummary');
  });

  it('renders the correct link', () => {
    expect(wrapper.find('.post-feed__item-cta').prop('to')).toBe('/frontend-blog/test-slug');
  });

  it('displays the correct image url', () => {
    expect(wrapper.find('.post-feed__item-cover').prop('src')).toEqual('http://timbakkum.net');
  })
});
