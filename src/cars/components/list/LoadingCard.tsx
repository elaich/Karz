import * as React from 'react';
import { CarViewModel } from '../../models/carViewModel';
import './LoadingCard.scss';

export const LoadingCarCard: React.FC<{}> = () => (
  <div className='loading-car'>
    <div className='loading-car__image'>
      <img />
    </div>
    <div className='loading-car__content'>
      <h2 className='loading-car__content__title' />
      <p className='loading-car__content__description' />
      <p className='loading-car__content__link' />
    </div>
  </div>
);
