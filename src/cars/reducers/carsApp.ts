import { IOption } from '../models/option';
import { CarViewModel } from '../models/carViewModel';
import {
  CarsActionType,
  IToggleFavourite,
  IUpdateCarAction,
  IUpdateCarsAction,
  IUpdateColorsAction,
  IUpdateCarsCountAction,
  IUpdateManufacturerFilterAction,
  IUpdateManufacturersAction,
  IUpdateColorFilterAction,
  IUpdateSortAction,
  IUpdatePagesAction,
  IUpdatePageAction,
  IFetchCarsLoading,
  UPDATE_COLOR_FILTER,
  FETCH_CARS_LOADING,
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
      return updateCar(state, action);
    case UPDATE_CARS:
      return updateCars(state, action);
    case UPDATE_COLORS:
      return updateColors(state, action);
    case UPDATE_MANUFACTURERS:
      return updateManufacturers(state, action);
    case UPDATE_CARS_COUNT:
      return updateCarsCount(state, action);
    case UPDATE_COLOR_FILTER:
      return updateColorFilter(state, action);
    case UPDATE_MANUFACTURER_FILTER:
      return updateManufacturerFilter(state, action);
    case UPDATE_SORT:
      return updateSort(state, action);
    case UPDATE_PAGE:
      return updatePage(state, action);
    case UPDATE_PAGES:
      return updatePages(state, action);
    case FETCH_CARS_LOADING:
      return fetchCarsLoading(state, action);
    case TOGGLE_FAVOURITE:
      return toggleFavourite(state, action);
    default:
      return state;
  }
};

const updateCar = (state: IState, action: IUpdateCarAction) => ({
  ...state,
  car: action.car
});
const updateCars = (state: IState, action: IUpdateCarsAction) => ({
  ...state,
  cars: action.cars
});

const updateColors = (state: IState, action: IUpdateColorsAction) => ({
  ...state,
  colorOptions: [{ label: 'All car colors', checked: true }, ...action.colors]
});

const updateManufacturers = (state: IState, action: IUpdateManufacturersAction) => ({
  ...state,
  manufacturerOptions: [{ label: 'All manufacturers', checked: true }, ...action.manufacturers]
});

const updateCarsCount = (state: IState, action: IUpdateCarsCountAction) => ({
  ...state,
  carsCount: action.carsCount
});

const updateColorFilter = (state: IState, action: IUpdateColorFilterAction) => {
  const colorOptions = state.colorOptions.map(option => ({ ...option, checked: option.value === action.color }));
  return { ...state, colorFilter: action.color, colorOptions };
};

const updateManufacturerFilter = (state: IState, action: IUpdateManufacturerFilterAction) => {
  const manufacturerOptions = state.manufacturerOptions.map(option => ({
    ...option,
    checked: option.value === action.manufacturer
  }));
  return { ...state, manufacturerFilter: action.manufacturer, manufacturerOptions };
};

const updateSort = (state: IState, action: IUpdateSortAction) => {
  const sortOptions = state.sortOptions.map(option => ({
    ...option,
    checked: option.value === action.sort
  }));
  return { ...state, sort: action.sort, sortOptions };
};

const updatePage = (state: IState, action: IUpdatePageAction) => ({
  ...state,
  page: action.page
});

const updatePages = (state: IState, action: IUpdatePagesAction) => ({
  ...state,
  pages: action.pages
});

const fetchCarsLoading = (state: IState, action: IFetchCarsLoading) => ({
  ...state,
  carsLoading: action.loading
});

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
