import * as React from 'react';
import { CarCard } from './Card';
import { CarViewModel } from '../../models/carViewModel';

export interface IProps {
  cars: CarViewModel[];
}

export const CarList: React.FC<IProps> = props => (
  <div>
    {props.cars.map(car => (
      <CarCard key={car.link} car={car} />
    ))}
  </div>
);
