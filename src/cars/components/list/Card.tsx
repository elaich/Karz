import * as React from 'react';
import { CarViewModel } from '../models/carViewModel';
import './Card.scss';

interface IProps {
  car: CarViewModel;
}

export const CarCard: React.FC<IProps> = props => (
  <div className='car'>
    <div className='image'>
      <img src={props.car.image} />
    </div>
    <div className='content'>
      <h2 className='title'>{props.car.title}</h2>
      <p className='description'>{props.car.description}</p>
      <a className='link' href={props.car.link}>
        View details
      </a>
    </div>
  </div>
);
