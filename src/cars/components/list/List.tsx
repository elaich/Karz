import * as React from 'react';
import { CarCard } from './Card';
import { LoadingCarCard } from './LoadingCard';
import { CarViewModel } from '../../models/carViewModel';

export interface IProps {
  cars: CarViewModel[];
  carsLoading: boolean;
}

export const CarList: React.FC<IProps> = props => (
  <div>{props.carsLoading ? <LoadingCarCard /> : props.cars.map(car => <CarCard key={car.link} car={car} />)}</div>
);
