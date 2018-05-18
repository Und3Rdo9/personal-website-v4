import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { MockedProvider } from 'react-apollo/test-utils';
import PostFeedContainer from './PostFeedContainer';

configure({ adapter : new Adapter() });

describe('<PostFeedContainer />', () => {

  it('matches snapshot ', () => {
    const wrapper = shallow(
      <PostFeedContainer />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
