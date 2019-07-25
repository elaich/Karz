import * as React from 'react';
import {Car} from '../models/car';
import './CarCard.scss';

interface IProps {
  car: Car;
}

export const CarCard: React.FC<IProps> = props => (
  <div className="car">
    <div className="image">
      <img src={props.car.pictureUrl} />
    </div>
    <div className="content">
      <h2 className="title">
        {props.car.manufacturerName} {props.car.modelName}
      </h2>
      <p className="description">
        Stock # {props.car.stockNumber} - {props.car.mileage.number}{' '}
        {props.car.mileage.unit} - {props.car.fuelType} - {props.car.color}
      </p>
      <a className="link" href={'/view?sn=' + props.car.stockNumber}>View details</a>
    </div>
  </div>
);
