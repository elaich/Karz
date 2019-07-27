import * as React from 'react';
import { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Select } from '../src/cars/components/common/Select';
import { Button } from '../src/cars/components/common/Button';
import { Header } from '../src/cars/components/common/Header';
import { Footer } from '../src/cars/components/common/Footer';

storiesOf('Common', module)
  .add('Select', () => {
    const SelectComponent = () => {
      const [options, setOptions] = useState([
        { label: 'None', checked: true },
        { label: 'Mileage - Ascending', value: 'asc' },
        { label: 'Mileage - Descending', value: 'des' }
      ]);

      const select = value => {
        setOptions(options.map(option => ({ ...option, checked: option.value === value })));
      };

      return <Select options={options} select={select} header='Sort by' />;
    };
    return <SelectComponent />;
  })
  .add('Button', () => {
    const props = {
      label: 'Filter',
      // tslint:disable-next-line:no-console
      handleClick: () => console.log('Clicked')
    };
    return <Button {...props} />;
  })
  .add('Header', () => {
    return <Header />;
  })
  .add('Footer', () => {
    return <Footer />;
  });
