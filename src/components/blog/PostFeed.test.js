import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { MockedProvider } from 'react-apollo/test-utils';
import PostFeed from './PostFeed';

configure({ adapter : new Adapter() });

describe('<PostFeed />', () => {

  const testProps = {
    postsData : [
    {
      title: 'testTitle',
      summary: 'testSummary',
      slug: 'test-slug',
      coverImage: {
        url: 'http://timbakkum.net'
      },
      dateAndTime: '21380921389'
    },
    {
      title: 'testTitle2',
      summary: 'testSummary2',
      slug: 'test-slug2',
      coverImage: {
        url: 'http://timbakkum2.net'
      },
      dateAndTime: '29991002001'
    }]
  };

  const wrapper = shallow(
    <PostFeed {...testProps} />
  );

  it('renders correctly ', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('displays the correct amount of PostFeedItem components', () => {
    expect(wrapper.find('PostFeedItem').length).toBe(2);
  });
});
