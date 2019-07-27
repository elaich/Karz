import * as React from 'react';
import { Select } from './Select';
import { shallow } from 'enzyme';

describe('Select', () => {
  const props = {
    header: 'Sort by',
    options: [
      { label: 'None', checked: true },
      { label: 'Mileage - Ascending', value: 'asc' },
      { label: 'Mileage - Descending', value: 'des' }
    ],
    select: jest.fn()
  };

  it('prints header', () => {
    const wrapper = shallow(<Select {...props} />);
    expect(wrapper.find('.select__header').text()).toEqual('Sort by');
  });

  it('can show options', () => {
    const wrapper = shallow(<Select {...props} />);
    expect(wrapper.find('.title').text()).toEqual('None');
  });

  it('has open state', () => {
    const wrapper = shallow(<Select {...props} />);
    expect(wrapper.state('opened')).toEqual(false);
    expect(wrapper.find('.options')).toHaveLength(0);
  });

  it('state opened show options', () => {
    const wrapper = shallow(<Select {...props} />);
    wrapper.setState({ opened: true });
    expect(wrapper.find('.options')).toHaveLength(1);

    expect(
      wrapper
        .find('li')
        .at(0)
        .text()
    ).toEqual('None');
    expect(
      wrapper
        .find('li')
        .at(1)
        .text()
    ).toEqual('Mileage - Ascending');
    expect(
      wrapper
        .find('li')
        .at(2)
        .text()
    ).toEqual('Mileage - Descending');
  });

  it('state opened change arrow', () => {
    const wrapper = shallow(<Select {...props} />);
    expect(wrapper.find('img').hasClass('select-box__open')).toBe(false);
    wrapper.setState({ opened: true });
    expect(wrapper.find('img').hasClass('select-box__open')).toBe(true);
  });

  it('clicking title toggles opened', () => {
    const wrapper = shallow(<Select {...props} />);
    wrapper.find('.select-box').simulate('click');
    expect(wrapper.state('opened')).toEqual(true);
    wrapper.find('.select-box').simulate('click');
    expect(wrapper.state('opened')).toEqual(false);
  });

  it('clicking on an option calls select', () => {
    const wrapper = shallow(<Select {...props} />);
    wrapper.setState({ opened: true });

    wrapper
      .find('li')
      .at(1)
      .simulate('click');
    expect(props.select).toBeCalledWith('asc');

    wrapper.setState({ opened: true });
    wrapper
      .find('li')
      .at(0)
      .simulate('click');
    expect(props.select).toBeCalledWith(undefined);
  });

  it('clicking on an option calls select', () => {
    const wrapper = shallow(<Select {...props} />);
    wrapper.setState({ opened: true });

    wrapper
      .find('li')
      .at(1)
      .simulate('click');
    expect(wrapper.state('opened')).toBe(false);
  });
});
