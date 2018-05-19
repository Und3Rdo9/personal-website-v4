import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { MockedProvider } from 'react-apollo/test-utils';
import Header from './Header';
import enhanceWithClickOutside from 'react-click-outside';
import { MemoryRouter } from 'react-router';

configure({ adapter : new Adapter() });

describe('<Header />', () => {
  it('matches snapshot', () => {
    const tree = shallow(
      <MemoryRouter initialEntries={['/']} initialIndex={0} keyLength={0}>
        <Header />
      </MemoryRouter>
    );
    expect(toJson(tree)).toMatchSnapshot();
  });

  let headerInstance;
  const headerWrapper = mount(
    <MemoryRouter initialEntries={['/']} initialIndex={0} >
      <Header wrappedRef={instance => { headerInstance = instance }} />
    </MemoryRouter>
  );



  it('hides the menu on initialisation', () => {
    expect(headerWrapper.find('.header__navigation-wrapper--open').length).toBe(0);
  });

  it('shows the menu when clicking on the menu toggle button', () => {
    const toggleButton = headerWrapper.find('.header__navigation-toggle');
    toggleButton.simulate('click');
    expect(headerWrapper.find('.header__navigation-wrapper--open').length).toBe(1);

  });

  describe('handleClickOutside', () => {
    it('calls toggleNavigation only if navigationOpen state equals true', () => {
      headerInstance.setState({ navigationOpen: false });
      headerInstance.handleClickOutside();
      expect(headerInstance.state.navigationOpen).toEqual(false);
      headerInstance.setState({ navigationOpen: true });
      expect(headerInstance.state.navigationOpen).toEqual(true);
      headerInstance.handleClickOutside();
      expect(headerInstance.state.navigationOpen).toEqual(false);
    });
  });
});
