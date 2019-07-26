import * as React from 'react';
import { shallow } from 'enzyme';
import { Button } from './Button';

describe('Button', () => {
  const props = {
    label: 'Filter',
    handleClick: jest.fn()
  };
  const wrapper = shallow(<Button {...props} />);

  it('renders', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('label', () => {
    expect(wrapper.find('button').text()).toEqual('Filter');
  });

  it('handleClick', () => {
    wrapper.find('button').simulate('click');
    expect(props.handleClick).toBeCalled();
  });
});
