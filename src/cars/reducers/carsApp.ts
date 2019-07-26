import { IOption } from '../models/option';
import { CarViewModel } from '../models/carViewModel';
import {
  CarsActionType,
  UPDATE_COLOR_FILTER,
  UPDATE_CARS_COUNT,
  UPDATE_MANUFACTURERS,
  UPDATE_CARS,
  UPDATE_PAGE,
  UPDATE_SORT,
  UPDATE_COLORS
} from '../constants/ActionTypes';

export interface IState {
  cars: CarViewModel[];
  colorOptions: IOption[];
  manufacturerOptions: IOption[];
}

const initialState: IState = {
  cars: [],
  colorOptions: [],
  manufacturerOptions: []
};

export const carsApp = (state: IState = initialState, action: CarsActionType) => {
  switch (action.type) {
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
      return { ...state, colorFilter: action.color };
    case UPDATE_SORT:
      return { ...state, sort: action.sort };
    case UPDATE_PAGE:
      return { ...state, page: action.page };
    default:
      return state;
  }
};
