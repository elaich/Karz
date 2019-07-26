import * as React from 'react';
import {useState} from 'react';
import {storiesOf} from '@storybook/react';
import {Select} from '../src/cars/components/common/Select';

storiesOf('Common', module)
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


