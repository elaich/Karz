import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { CarFilters } from './Filters';
import { Select, IProps as ISelect } from './common/Select';

describe('Car Filters', () => {
  const props = {
    colorOptions: [
      { label: 'All car colors', checked: true },
      { label: 'Yellow', value: 'yellow' },
      { label: 'Red', value: 'red' },
      { label: 'White', value: 'white' }
    ],
    manufacturerOptions: [
      { label: 'All manufacturers', checked: true },
      { label: 'Audi', value: 'Audi' },
      { label: 'BMW', value: 'BMW' },
      { label: 'Chrysler', value: 'Chrysler' }
    ],
    handleSelectColor: jest.fn(),
    handleSelectManufacturer: jest.fn()
  };

  let wrapper: ShallowWrapper;
  let colorSelect: ShallowWrapper<ISelect>;
  let manufacturerSelect: ShallowWrapper<ISelect>;

  beforeEach(() => {
    wrapper = shallow(<CarFilters {...props} />);
  });

  describe('Color filters', () => {
    beforeEach(() => {
      colorSelect = wrapper.find(Select).at(0);
    });

    it('header', () => {
      expect(colorSelect.prop('header')).toEqual('Color');
    });

    it('options', () => {
      expect(colorSelect.prop('options')).toEqual(props.colorOptions);
    });

    it('handleSelect', () => {
      colorSelect.props().select();
      expect(props.handleSelectColor).toBeCalled();
    });
  });

  describe('Manufacturer filters', () => {
    beforeEach(() => {
      manufacturerSelect = wrapper.find(Select).at(1);
    });

    it('header', () => {
      expect(manufacturerSelect.prop('header')).toEqual('Manufacturer');
    });

    it('options', () => {
      expect(manufacturerSelect.prop('options')).toEqual(props.manufacturerOptions);
    });

    it('handleSelect', () => {
      manufacturerSelect.props().select();
      expect(props.handleSelectManufacturer).toBeCalled();
    });
  });
});
