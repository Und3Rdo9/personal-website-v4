import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { MockedProvider } from 'react-apollo/test-utils';
import LatestsPostsFeedContainer from './LatestPostsFeedContainer';

configure({ adapter : new Adapter() });

describe('<LatestsPostsFeedContainer />', () => {

  it('matches snapshot ', () => {
    const wrapper = shallow(
      <LatestsPostsFeedContainer />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
