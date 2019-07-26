import * as React from 'react';
import { shallow } from 'enzyme';
import { CarHeader } from './CarHeader';
import { Select } from './common/Select';

describe('CarHeader', () => {
  const props = {
    pageCount: 10,
    carsCount: 100,
    handleSelect: jest.fn(),
    sortOptions: [
      { label: 'None', checked: true },
      { label: 'Mileage - Ascending', value: 'asc' },
      { label: 'Mileage - Descending', value: 'des' }
    ]
  };

  it('renders', () => {
    const wrapper = shallow(<CarHeader {...props} />);
    expect(wrapper).toHaveLength(1);
  });

  it('heading', () => {
    const wrapper = shallow(<CarHeader {...props} />);
    expect(wrapper.find('.heading').text()).toEqual('Available cars');
  });

  it('title', () => {
    const wrapper = shallow(<CarHeader {...props} />);
    expect(wrapper.find('.title').text()).toEqual('Showing 10 of 100 results');
  });

  describe('Select', () => {
    it('header', () => {
      const wrapper = shallow(<CarHeader {...props} />);
      expect(wrapper.find(Select).prop('header')).toEqual('Sort by');
    });

    it('onSelect', () => {
      const wrapper = shallow(<CarHeader {...props} />);
      wrapper
        .find(Select)
        .props()
        .select();
      expect(props.handleSelect).toBeCalled();
    });

    it('options', () => {
      const wrapper = shallow(<CarHeader {...props} />);
      expect(wrapper.find(Select).prop('options')).toEqual(props.sortOptions);
    });
  });
});
