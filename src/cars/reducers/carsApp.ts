import { IOption } from '../models/option';
import { CarViewModel } from '../models/carViewModel';
import {
  CarsActionType,
  IToggleFavourite,
  UPDATE_COLOR_FILTER,
  TOGGLE_FAVOURITE,
  UPDATE_CARS_COUNT,
  UPDATE_MANUFACTURER_FILTER,
  UPDATE_MANUFACTURERS,
  UPDATE_CARS,
  UPDATE_CAR,
  UPDATE_PAGE,
  UPDATE_PAGES,
  UPDATE_SORT,
  UPDATE_COLORS
} from '../constants/ActionTypes';

export interface IState {
  cars: CarViewModel[];
  favourites?: number[];
  car?: CarViewModel;
  page: number;
  pages: number;
  colorOptions: IOption[];
  sortOptions: IOption[];
  manufacturerOptions: IOption[];
  colorFilter?: string;
  manufacturerFilter?: string;
  sort?: string;
}

export const initialState: IState = {
  cars: [],
  favourites: [],
  page: 1,
  pages: 1,
  colorOptions: [{ label: 'All car colors', checked: true }],
  manufacturerOptions: [{ label: 'All manufacturers', checked: true }],
  sortOptions: [
    { label: 'None', checked: true },
    { label: 'Mileage - Ascending', value: 'asc' },
    { label: 'Mileage - Descending', value: 'des' }
  ]
};

export const carsApp = (state: IState = initialState, action: CarsActionType) => {
  switch (action.type) {
    case UPDATE_CAR:
      return { ...state, car: action.car };
    case UPDATE_CARS:
      return { ...state, cars: action.cars };
    case UPDATE_COLORS:
      return { ...state, colorOptions: [{ label: 'All car colors', checked: true }, ...action.colors] };
    case UPDATE_MANUFACTURERS:
      return {
        ...state,
        manufacturerOptions: [{ label: 'All manufacturers', checked: true }, ...action.manufacturers]
      };
    case UPDATE_CARS_COUNT:
      return { ...state, carsCount: action.carsCount };
    case UPDATE_COLOR_FILTER:
      const colorOptions = state.colorOptions.map(option => ({ ...option, checked: option.value === action.color }));
      return { ...state, colorFilter: action.color, colorOptions };
    case UPDATE_MANUFACTURER_FILTER:
      const manufacturerOptions = state.manufacturerOptions.map(option => ({
        ...option,
        checked: option.value === action.manufacturer
      }));
      return { ...state, manufacturerFilter: action.manufacturer, manufacturerOptions };
    case UPDATE_SORT:
      const sortOptions = state.sortOptions.map(option => ({
        ...option,
        checked: option.value === action.sort
      }));
      return { ...state, sort: action.sort, sortOptions };
    case UPDATE_PAGE:
      return { ...state, page: action.page };
    case UPDATE_PAGES:
      return { ...state, pages: action.pages };
    case TOGGLE_FAVOURITE:
      return toggleFavourite(state, action);
    default:
      return state;
  }
};

const toggleFavourite = (state: IState, action: IToggleFavourite) => {
  if (state.favourites.indexOf(action.stockNumber) === -1) {
    return {
      ...state,
      favourites: [...state.favourites, action.stockNumber]
    };
  }

  return {
    ...state,
    favourites: state.favourites.filter(sn => sn !== action.stockNumber)
  };
};
