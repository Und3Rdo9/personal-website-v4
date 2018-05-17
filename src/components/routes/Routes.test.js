import React from 'react';
import { mount } from 'enzyme';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { MockedProvider } from 'react-apollo/test-utils';
import { MemoryRouter } from 'react-router';

import HomePage from './../layouts/HomePage';
import BlogOverview from './../blog/BlogOverview';
import PostPage from './../blog/PostPage';

import Routes from './Routes';

configure({ adapter : new Adapter() });

describe('<Routes />', () => {

  it('renders the HomePage component correctly when visiting / ', () => {
    const router = mount(
      <MockedProvider mocks={[]}>
        <MemoryRouter initialEntries={['/']} initialIndex={0} >
          <Routes />
        </MemoryRouter>
      </MockedProvider>
    );

    expect(router.find(HomePage).length).toBe(1);
  });

  it('renders the matched route component correctly', () => {
    const router = mount(
      <MemoryRouter initialEntries={['/frontend-blog']} initialIndex={0} >
        <Routes />
      </MemoryRouter>
    );

    expect(router.find(BlogOverview).length).toBe(1);
  });

  it('renders a blog post page component correctly', () => {
    const router = mount(
      <MockedProvider mocks={[]}>
        <MemoryRouter initialEntries={['/frontend-blog/my-javascript-journey']} initialIndex={0} >
          <Routes />
        </MemoryRouter>
      </MockedProvider>
    );

    expect(router.find(PostPage).length).toBe(1);
  });
});
