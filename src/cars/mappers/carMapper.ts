import { Car } from '../models/car';
import { CarViewModel } from '../models/carViewModel';

const formatMileage = (x: number) => {
  const parts = x.toString().split(',');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return parts.join(',');
};

const capitalize = (s: string) => {
  const parts = s.split('');
  parts[0] = parts[0].toUpperCase();
  return parts.join('');
};

export const carMapperFn = (car: Car): CarViewModel => {
  const title = `${car.manufacturerName} ${car.modelName}`;
  const description = `Stock # ${car.stockNumber} - ${formatMileage(
    car.mileage.number
  )} ${car.mileage.unit.toUpperCase()} - ${car.fuelType} - ${capitalize(car.color)}`;
  const link = `/${car.stockNumber}`;
  const image = car.pictureUrl;

  return {
    title,
    description,
    link,
    image
  };
};
