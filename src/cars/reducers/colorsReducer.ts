import { IOption } from '../models/option';
import { UPDATE_COLORS, CarsActionType, IUpdateColorsAction } from '../constants/ActionTypes';

export interface IState {
  colorOptions: IOption[];
}

const initialState = {
  colorOptions: [{ label: 'All car colors', checked: true }]
};

export const colorsReducer = (state: IState = initialState, action: CarsActionType) => {
  switch (action.type) {
    case UPDATE_COLORS:
      return updateColors(state, action);
    default:
      return state;
  }
};

const updateColors = (state: IState, action: IUpdateColorsAction) => ({
  ...state,
  colorOptions: [{ label: 'All car colors', checked: true }, ...action.colors]
});
