import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { DetailsContainer, IProps as IDetailsContainer } from './DetailsContainer';
import { DetailsContent } from '../components/details/Content';

describe('DetailsContainer', () => {
  const render = (iProps: IDetailsContainer) => {
    return shallow(<DetailsContainer {...iProps} />);
  };

  const props = {
    stockNumber: 1010,
    fetchCar: jest.fn(),
    car: {
      title: 'Chrysler Corssfire',
      description: 'Stock # 41400 - 100.141 KM - Diesel - White'
    },
    favourites: [1010, 2, 3],
    toggleFavourite: jest.fn()
  };

  let wrapper: ShallowWrapper<IDetailsContainer>;

  beforeEach(() => {
    wrapper = render(props);
  });

  it('renders and fetches', () => {
    expect(wrapper).toHaveLength(1);
    expect(props.fetchCar).toBeCalledWith(props.stockNumber);
  });

  it('passes car props', () => {
    expect(wrapper.find(DetailsContent).prop('title')).toEqual(props.car.title);
    expect(wrapper.find(DetailsContent).prop('description')).toEqual(props.car.description);
    expect(wrapper.find(DetailsContent).prop('isFavourite')).toEqual(true);
  });

  it('toggleFavourite', () => {
    wrapper
      .find(DetailsContent)
      .props()
      .toggleFavourite();
    expect(props.toggleFavourite).toBeCalledWith(1010);
  });
});
