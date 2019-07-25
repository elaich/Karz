import * as React from 'react';
import { CarCard } from './CarCard';
import {shallow} from 'enzyme';

describe('CarCard', () => {
  const render = (iProps: any) => {
    return shallow(<CarCard {...iProps} />);
  };

  const car = {
    stockNumber: 41400,
    manufacturerName: 'Fiat',
    modelName: 'Marea',
    mileage: {
      number: 100141,
      unit: 'km',
    },
    fuelType: 'Diesel',
    color: 'white',
    pictureUrl: 'http://localhost:3001/car.svg',
  };

  const props = {
    car,
  };

  it('title', () => {
    const wrapper = render(props);
    expect(wrapper.find('.title').text()).toEqual(
      `${car.manufacturerName} ${car.modelName}`,
    );
  });

  it('description', () => {
    const wrapper = render(props);
    expect(wrapper.find('.description').text()).toEqual(
      `Stock # ${car.stockNumber} - ${car.mileage.number} ${
        car.mileage.unit
      } - ${car.fuelType} - ${car.color}`,
    );
  });

  it('image', () => {
    const wrapper = render(props);
    expect(wrapper.find('img').prop('src')).toEqual(car.pictureUrl);
  });
});
