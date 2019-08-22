import { colorsReducer, IState } from './colorsReducer';
import { IOption } from '../models/option';
import { updateColorOptions } from '../actions/Actions';

describe('Colors Reducer', () => {
  const initialState: IState = {
    colorOptions: []
  };

  it('should update colors', () => {
    const colorOptions: IOption[] = [
      { label: 'Yellow', value: 'yellow' },
      { label: 'Red', value: 'red' },
      { label: 'White', value: 'white' }
    ];

    expect(colorsReducer(initialState, updateColorOptions(colorOptions))).toEqual({
      colorOptions: [{ label: 'All car colors', checked: true }, ...colorOptions]
    });
  });
});
