import * as React from 'react';
import { shallow } from 'enzyme';
import { ColorsSelect } from './ColorsSelect';
import { Select } from '../common/Select';

describe('<ColorsSelect />', () => {
  const props = {
    fetchColors: jest.fn(),
    updateColorFilter: jest.fn(),
    colorOptions: [{ label: 'All car colors', checked: true }, { label: 'White', value: 'white' }]
  };

  it('renders Select', () => {
    const wrapper = shallow(<ColorsSelect {...props} />);
    expect(wrapper.find(Select)).toHaveLength(1);
  });

  it('renders header', () => {
    const wrapper = shallow(<ColorsSelect {...props} />);
    expect(wrapper.find(Select).prop('header')).toEqual('Color');
  });

  it('passes handleSelectColor', () => {
    const wrapper = shallow(<ColorsSelect {...props} />);
    wrapper
      .find(Select)
      .props()
      .select();
    expect(props.updateColorFilter).toBeCalled();
  });

  it('renders options', () => {
    const wrapper = shallow(<ColorsSelect {...props} />);
    expect(wrapper.find(Select).prop('options')).toEqual(props.colorOptions);
  });

  it('fetches and renders', () => {
    const wrapper = shallow(<ColorsSelect {...props} />);
    expect(props.fetchColors).toBeCalled();
  });
});
