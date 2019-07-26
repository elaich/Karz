import * as React from 'react';
import {useState} from 'react';

import {storiesOf} from '@storybook/react';

import {CarCard} from '../src/cars/components/CarCard.tsx';
import {Select} from '../src/cars/components/common/Select';
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

    return <CarCard car={carMapperFn(car)} />;
  })
  .add('Select', () => {
    const SelectComponent = () => {
      const [options, setOptions] = useState([
        {label: 'None', checked: true},
        {label: 'Mileage - Ascending', value: 'asc'},
        {label: 'Mileage - Descending', value: 'des'},
      ]);

      const select = value => {
        setOptions(
          options.map(option => ({...option, checked: option.value === value})),
        );
      };

      return <Select options={options} select={select} />;
    };
    return <SelectComponent />;
  });
