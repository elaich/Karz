import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { DetailsContent } from '../src/cars/components/details/Content';

storiesOf('Details', module)
  .add('Content', () => {
    const props = {
      title: 'Chrysler Crossfire',
      description: 'Stock # 41400 - 100.141 KM - Diesel - White',
      isFavourite: false,
      // tslint:disable-next-line:no-console
      toggleFavourite: console.log
    };

    return <DetailsContent {...props} />;
  })
  .add('Content Favourite', () => {
    const props = {
      title: 'Chrysler Crossfire',
      description: 'Stock # 41400 - 100.141 KM - Diesel - White',
      isFavourite: true,
      // tslint:disable-next-line:no-console
      toggleFavourite: console.log
    };

    return <DetailsContent {...props} />;
  });
