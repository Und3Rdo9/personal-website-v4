import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import waitForExpect from 'wait-for-expect';
import { MockedProvider } from 'react-apollo/test-utils';
import PostPageContainer, { GET_POST } from './PostPageContainer';

configure({ adapter: new Adapter() });

describe('<PostPageContainer />', () => {
  const slug = 'test-slug-that-is-not-in-cache-test';
  const match = {
    params: {
      slug
    }
  };

  const postMock = {
    request: {
      query: GET_POST,
      variables: { slug }
    },
    result: {
      data: {
        Post: {
          tags: ['javascript'],
          coverImage: {
            url: 'https://media.graphcms.com/qGxHfCxdTxq9xI3qlyGa'
          },
          authors: [{ name: 'Tim Bakkum' }],
          content: 'When I got back into front-end development [..]',
          title: 'How I leveled up my JS skills: my JavaScript journey',
          dateAndTime: '2018-04-25T16:00:00.000Z'
        }
      }
    }
  };

  const postErrorMock = {
    request: {
      query: GET_POST,
      variables: { slug }
    },
    error: new Error('aw shucks')
  };

  it('should render loading state initially', () => {
    const wrapper = mount(
      <MockedProvider mocks={[]}>
        <PostPageContainer match={match} />
      </MockedProvider>
    );

    expect(wrapper.find('SectionLoader').length).toBe(1);

    wrapper.unmount();
  });

  it('should render data without error', async () => {
    const wrapper = mount(
      <MockedProvider mocks={[postMock]} addTypename={false}>
        <PostPageContainer match={match} />
      </MockedProvider>
    );

    await waitForExpect(() => {
      // force to use the latest version
      // see https://github.com/airbnb/enzyme/issues/1233
      wrapper.update();

      expect(wrapper.find('h1').length).toBe(1);
      expect(wrapper.find('PostDetail').length).toBe(1);
      expect(wrapper.find('h1').text()).toEqual(
        'How I leveled up my JS skills: my JavaScript journey'
      );
    });

    wrapper.unmount();
  });

  it('should show errors', async () => {
    const wrapper = mount(
      <MockedProvider mocks={[postErrorMock]} addTypename={false}>
        <PostPageContainer match={match} />
      </MockedProvider>
    );

    await waitForExpect(() => {
      wrapper.update();

      expect(wrapper.contains('Error :(')).toEqual(true);
    });

    wrapper.unmount();
  });
});
