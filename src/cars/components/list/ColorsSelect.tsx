import * as React from 'react';
import { connect } from 'react-redux';
import { Select } from '../common/Select';
import { IOption } from '../../models/option';
import { fetchColors, updateColorFilter } from '../../actions/Actions';
import { IState } from '../../reducers/carsApp';

interface IProps {
  fetchColors: () => void;
  colorOptions: IOption[];
  updateColorFilter: (value?: string) => void;
}

export const ColorsSelect: React.FC<IProps> = props => {
  props.fetchColors();
  return <Select header={'Color'} options={props.colorOptions} select={props.updateColorFilter} />;
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchColors: () => {
      dispatch(fetchColors());
    },
    updateColorFilter: (color?: string) => {
      dispatch(updateColorFilter(color));
    }
  };
};

const mapStateToProps = (state: IState) => ({
  colorOptions: state.colorOptions
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorsSelect);
