import * as React from 'react';

import {storiesOf} from '@storybook/react';

import {CarCard} from '../src/cars/components/CarCard.tsx';
import {carMapperFn} from '../src/cars/mappers/carMapper';

storiesOf('Cars', module)
  .add('CarCard', () => {
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

    return <CarCard car={carMapperFn(car)} />
  })
