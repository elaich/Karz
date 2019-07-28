import * as React from 'react';
import { shallow } from 'enzyme';
import { CarList } from './List';
import { CarCard } from './Card';

describe('Car List', () => {
  it('shows list of cars', () => {
    const cars = [
      {
        title: 'Skoda Kodiaq',
        description: 'Stock # 10055 - 179.684 KM - Petrol - Yellow',
        image: 'http://localhost:3001/car.svg',
        link: '/view?sn=10055'
      },
      {
        title: 'Skoda Roomster',
        description: 'Stock # 10067 - 155.416 KM - Petrol - Red',
        link: '/view?sn=10067',
        image: 'http://localhost:3001/car.svg'
      },
      {
        title: 'Fiat Fiorino',
        description: 'Stock # 10110 - 106.002 KM - Petrol - Yellow',
        link: '/view?sn=10110',
        image: 'http://localhost:3001/car.svg'
      }
    ];

    const props = {
      cars,
      carsLoading: false
    };

    const wrapper = shallow(<CarList {...props} />);
    wrapper.find(CarCard).map((card, index) => expect(card.prop('car')).toEqual(cars[index]));
  });
});
