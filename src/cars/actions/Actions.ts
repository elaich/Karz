import { CarViewModel } from '../models/carViewModel';
import { IOption } from '../models/option';
import {
  UPDATE_CARS,
  UPDATE_SORT,
  UPDATE_PAGE,
  UPDATE_CARS_COUNT,
  UPDATE_COLOR_FILTER,
  UPDATE_MANUFACTURER_FILTER,
  UPDATE_MANUFACTURERS,
  UPDATE_COLORS,
  CarsActionType
} from '../constants/ActionTypes';

export const updateCars = (cars: CarViewModel[]): CarsActionType => ({
  cars,
  type: UPDATE_CARS
});

export const updateColorOptions = (colors: IOption[]): CarsActionType => ({
  colors,
  type: UPDATE_COLORS
});

export const updateManufacturerOptions = (manufacturers: IOption[]): CarsActionType => ({
  manufacturers,
  type: UPDATE_MANUFACTURERS
});

export const updateCarsCount = (carsCount: number): CarsActionType => ({
  carsCount,
  type: UPDATE_CARS_COUNT
});

export const updateColorFilter = (color?: string): CarsActionType => ({
  color,
  type: UPDATE_COLOR_FILTER
});

export const updateManufacturerFilter = (manufacturer?: string): CarsActionType => ({
  manufacturer,
  type: UPDATE_MANUFACTURER_FILTER
});

export const updateSort = (sort?: string): CarsActionType => ({
  sort,
  type: UPDATE_SORT
});

export const updatePage = (page: number): CarsActionType => ({
  page,
  type: UPDATE_PAGE
});
