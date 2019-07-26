import * as React from 'react';

import { storiesOf } from '@storybook/react';

import { CarCard } from '../src/cars/components/CarCard';
import { CarList } from '../src/cars/components/CarList';
import { CarPagination } from '../src/cars/components/CarPagination';
import { carMapperFn } from '../src/cars/mappers/carMapper';

storiesOf('Cars', module)
  .add('CarCard', () => {
    const car = {
      stockNumber: 41400,
      manufacturerName: 'Fiat',
      modelName: 'Marea',
      mileage: {
        number: 100141,
        unit: 'km'
      },
      fuelType: 'Diesel',
      color: 'white',
      pictureUrl: 'http://localhost:3001/car.svg'
    };

    return <CarCard car={carMapperFn(car)} />;
  })
  .add('CarList', () => {
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

    return <CarList cars={cars} />;
  })
  .add('CarPagination', () => {
    const props = {
      page: 2,
      pages: 10,
      changePage: (page: number) => console.log(page)
    };

    return <CarPagination {...props} />;
  });
