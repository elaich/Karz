import * as React from 'react'
import { CarCard } from './CarCard';

interface IProps {
  cars: any[];
}
export const CarList: React.FC<IProps> = props => (
  <div>
    {props.cars.map(car => <CarCard key={car.link} car={car} />)}
  </div>
)
