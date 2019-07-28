import * as React from 'react';
import { shallow } from 'enzyme';
import { CarHeader } from './Header';
import { Select } from '../common/Select';

describe('CarHeader', () => {
  const props = {
    pageCount: 10,
    carsCount: 100,
    handleSelect: jest.fn(),
    carsLoading: false,
    sortOptions: [
      { label: 'None', checked: true },
      { label: 'Mileage - Ascending', value: 'asc' },
      { label: 'Mileage - Descending', value: 'des' }
    ]
  };

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CarHeader {...props} />);
  });

  it('renders', () => {
    wrapper = shallow(<CarHeader {...props} />);
    expect(wrapper).toHaveLength(1);
  });

  it('heading', () => {
    wrapper = shallow(<CarHeader {...props} />);
    expect(wrapper.find('.heading').text()).toEqual('Available cars');
  });

  it('title', () => {
    wrapper = shallow(<CarHeader {...props} />);
    expect(wrapper.find('.title').text()).toEqual('Showing 10 of 100 results');
  });

  describe('Select', () => {
    it('header', () => {
      wrapper = shallow(<CarHeader {...props} />);
      expect(wrapper.find(Select).prop('header')).toEqual('Sort by');
    });

    it('onSelect', () => {
      wrapper = shallow(<CarHeader {...props} />);
      wrapper
        .find(Select)
        .props()
        .select();
      expect(props.handleSelect).toBeCalled();
    });

    it('options', () => {
      wrapper = shallow(<CarHeader {...props} />);
      expect(wrapper.find(Select).prop('options')).toEqual(props.sortOptions);
    });
  });
});
