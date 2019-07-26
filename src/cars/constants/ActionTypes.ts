import { CarViewModel } from '../models/carViewModel';
import { IOption } from '../models/option';

export const UPDATE_CARS = 'UPDATE_CARS';
export const UPDATE_COLORS = 'UPDATE_COLORS';
export const UPDATE_MANUFACTURERS = 'UPDATE_MANUFACTURERS';
export const UPDATE_CARS_COUNT = 'UPDATE_CARS_COUNT';
export const UPDATE_COLOR_FILTER = 'UPDATE_COLOR_FILTER';
export const UPDATE_MANUFACTURER_FILTER = 'UPDATE_MANUFACTURER_FILTER';
export const UPDATE_SORT = 'UPDATE_SORT';
export const UPDATE_PAGE = 'UPDATE_PAGE';

interface IUpdateCarsAction {
  type: typeof UPDATE_CARS;
  cars: CarViewModel[];
}

interface IUpdateColorsAction {
  type: typeof UPDATE_COLORS;
  colors: IOption[];
}

interface IUpdateManufacturersAction {
  type: typeof UPDATE_MANUFACTURERS;
  manufacturers: IOption[];
}

interface IUpdateCarsCountAction {
  type: typeof UPDATE_CARS_COUNT;
  carsCount: number;
}

interface IUpdateColorFilterAction {
  type: typeof UPDATE_COLOR_FILTER;
  color: string;
}

interface IUpdateManufacturerFilterAction {
  type: typeof UPDATE_MANUFACTURER_FILTER;
  manufacturer: string;
}

interface IUpdateSortAction {
  type: typeof UPDATE_SORT;
  sort: string;
}

interface IUpdatePageAction {
  type: typeof UPDATE_PAGE;
  page: number;
}

export type CarsActionType =
  | IUpdateCarsAction
  | IUpdateColorsAction
  | IUpdateManufacturersAction
  | IUpdateCarsCountAction
  | IUpdateColorFilterAction
  | IUpdateManufacturerFilterAction
  | IUpdateSortAction
  | IUpdatePageAction;
