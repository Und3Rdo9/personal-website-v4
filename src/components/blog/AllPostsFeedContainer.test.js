import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import waitForExpect from 'wait-for-expect';
import { MockedProvider } from 'react-apollo/test-utils';
import { MemoryRouter } from 'react-router';
import AllPostsFeedContainer, { GET_ALL_POSTS } from './AllPostsFeedContainer';

configure({ adapter: new Adapter() });

describe('<AllPostsFeedContainer />', () => {
  const firstThreePostsMock = {
    cache: false,
    request: {
      query: GET_ALL_POSTS,
      variables: {
        skip: 0,
        first: 3
      }
    },
    result: {
      data: {
        allPosts: [
          {
            slug: 'testing-apollo-react-components',
            coverImage: {
              url: 'https://media.graphcms.com/KDO8n3WvSpSz2J8ALINI'
            },
            title: 'Testing Apollo React components',
            dateAndTime: '2018-05-17T00:00:00.000Z',
            summary: 'test summary here'
          },
          {
            slug: 'animals-web-development',
            coverImage: {
              url: 'https://media.graphcms.com/JL5EWFFPQFSTrGeLglDt'
            },
            title: 'The Animals of the Web',
            dateAndTime: '2018-05-10T22:00:00.000Z',
            summary: 'placeholder summary'
          },
          {
            slug: 'my-javascript-journey',
            coverImage: {
              url: 'https://media.graphcms.com/wN8of5YmTxeso7M7KJSX'
            },
            title: 'How I leveled up my JS skills: my JavaScript journey',
            dateAndTime: '2018-04-25T16:00:00.000Z',
            summary:
              'By the time you read this, a new JS framework has been published. Here I share my JS learning journey of the last year.'
          }
        ],
        _allPostsMeta: { count: 7 }
      }
    }
  };

  const additionalPostsMock = {
    cache: false,
    request: {
      query: GET_ALL_POSTS,
      variables: {
        skip: 3,
        first: 3
      }
    },
    result: {
      data: {
        allPosts: [
          {
            slug: 'my-javascript-journey-1',
            coverImage: {
              url: 'https://media.graphcms.com/wN8of5YmTxeso7M7KJSX'
            },
            title: 'How I leveled up my JS skills: my JavaScript journey',
            dateAndTime: '2018-04-25T16:00:00.000Z',
            summary:
              'By the time you read this, a new JS framework has been published. Here I share my JS learning journey of the last year.'
          },
          {
            slug: 'my-javascript-journey-2',
            coverImage: {
              url: 'https://media.graphcms.com/wN8of5YmTxeso7M7KJSX'
            },
            title: 'How I leveled up my JS skills: my JavaScript journey',
            dateAndTime: '2018-04-25T16:00:00.000Z',
            summary:
              'By the time you read this, a new JS framework has been published. Here I share my JS learning journey of the last year.'
          },
          {
            slug: 'my-javascript-journey-3',
            coverImage: {
              url: 'https://media.graphcms.com/wN8of5YmTxeso7M7KJSX'
            },
            title: 'How I leveled up my JS skills: my JavaScript journey',
            dateAndTime: '2018-04-25T16:00:00.000Z',
            summary:
              'By the time you read this, a new JS framework has been published. Here I share my JS learning journey of the last year.'
          }
        ],
        _allPostsMeta: { count: 7 }
      }
    }
  };
  const postsErrorMock = {
    request: {
      query: GET_ALL_POSTS,
      variables: {
        skip: 0,
        first: 3
      }
    },
    error: new Error('this is an error')
  };

  it('should render loading state initially', () => {
    const wrapper = mount(
      <MockedProvider mocks={[]}>
        <AllPostsFeedContainer />
      </MockedProvider>
    );

    expect(wrapper.find('SectionLoader').length).toBe(1);

    wrapper.unmount();
  });

  it('should render the first 3 posts without error', async () => {
    const wrapper = mount(
      <MockedProvider mocks={[firstThreePostsMock]} addTypename={false}>
        <MemoryRouter initialEntries={['/frontend-blog']} initialIndex={0}>
          <AllPostsFeedContainer />
        </MemoryRouter>
      </MockedProvider>
    );

    await waitForExpect(() => {
      // force to use the latest version
      // see https://github.com/airbnb/enzyme/issues/1233
      wrapper.update();

      expect(wrapper.find('PostFeedItem').length).toBe(3);
    });

    wrapper.unmount();
  });

  it('should fetch more posts when onLoadMore is called', async () => {
    const wrapper = mount(
      <MockedProvider
        mocks={[firstThreePostsMock, additionalPostsMock]}
        addTypename={false}
      >
        <MemoryRouter initialEntries={['/frontend-blog']} initialIndex={0}>
          <AllPostsFeedContainer />
        </MemoryRouter>
      </MockedProvider>
    );

    await waitForExpect(() => {
      // force to use the latest version
      //  see https://github.com/airbnb/enzyme/issues/1233
      wrapper.update();
      const btn = wrapper.find('button');
      btn.simulate('click');
      wrapper.update();
      expect(wrapper.find('PostFeedItem').length).toBe(6);
    });

    wrapper.unmount();
  });

  it('should show errors', async () => {
    const wrapper = mount(
      <MockedProvider mocks={[postsErrorMock]} addTypename={false}>
        <AllPostsFeedContainer />
      </MockedProvider>
    );

    await waitForExpect(() => {
      wrapper.update();

      expect(wrapper.contains('Error :(')).toEqual(true);
    });

    wrapper.unmount();
  });
});
