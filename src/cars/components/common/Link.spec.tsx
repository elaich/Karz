import * as React from 'react';
import { shallow } from 'enzyme';
import { Link } from './Link';
import { Link as RouterLink } from 'react-router-dom';

describe('Link', () => {
  const props = {
    to: '/'
  };

  const wrapper = shallow(<Link {...props}>Hamid</Link>);

  it('renders', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('passes to prop', () => {
    expect(wrapper.find(RouterLink).prop('to')).toEqual(props.to);
  });

  it('passes to prop', () => {
    expect(
      wrapper
        .find(RouterLink)
        .children()
        .text()
    ).toEqual('Hamid');
  });
});
