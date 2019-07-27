import * as React from 'react';
import { connect } from 'react-redux';
import { ListView } from './List';
import { CarViewModel } from '../models/carViewModel';
import { IOption } from '../models/option';
import { IParameters } from '../datasource/api';
import {
  fetchCars,
  updatePage,
  updateSort,
  fetchColors,
  updateColorFilter,
  fetchManufacturers,
  updateManufacturerFilter
} from '../actions/Actions';

import { IState } from '../reducers/carsApp';

interface IProps {
  page: number;
  pages: number;
  sort: string;
  carsCount: number;
  colorFilter: string;
  cars: CarViewModel[];
  sortOptions: IOption[];
  colorOptions: IOption[];
  manufacturerFilter: string;
  manufacturerOptions: IOption[];

  fetchColors: () => void;
  fetchManufacturers: () => void;
  updatePage: (page: number) => void;
  updateSort: (sort?: string) => void;
  updateColorFilter: (color?: string) => void;
  fetchCars: (parameters?: IParameters) => void;
  updateManufacturerFilter: (manufacturer?: string) => void;
}

export class ListViewContainer extends React.Component<IProps> {
  public componentDidMount() {
    this.props.fetchCars();
    this.props.fetchColors();
    this.props.fetchManufacturers();
  }

  public render() {
    const props = {
      pagination: {
        page: this.props.page,
        changePage: this.changePage,
        pages: this.props.pages
      },
      header: {
        carsCount: this.props.carsCount,
        pageCount: this.props.cars.length,
        sortOptions: this.props.sortOptions,
        handleSelect: this.sort
      },
      list: {
        cars: this.props.cars
      },
      filters: {
        colorOptions: this.props.colorOptions,
        manufacturerOptions: this.props.manufacturerOptions,
        filter: this.filter,
        handleSelectColor: this.props.updateColorFilter,
        handleSelectManufacturer: this.props.updateManufacturerFilter
      }
    };

    return <ListView {...props} />;
  }

  private changePage = (page: number) => {
    this.props.updatePage(page);
    this.props.fetchCars({
      sort: this.props.sort,
      color: this.props.colorFilter,
      manufacturer: this.props.manufacturerFilter,
      page
    });
  };

  private filter = () => {
    this.props.updatePage(1);
    this.props.fetchCars({
      color: this.props.colorFilter,
      sort: this.props.sort,
      manufacturer: this.props.manufacturerFilter
    });
  };

  private sort = (sort?: string) => {
    this.props.updateSort(sort);
    this.props.updatePage(1);
    if (sort !== this.props.sort) {
      this.props.fetchCars({
        sort,
        color: this.props.colorFilter,
        manufacturer: this.props.manufacturerFilter
      });
    }
  };
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateColorFilter: (color?: string) => {
      dispatch(updateColorFilter(color));
    },
    updateSort: (sort?: string) => {
      dispatch(updateSort(sort));
    },
    updatePage: (page: number) => {
      dispatch(updatePage(page));
    },
    fetchCars: (parameters?: IParameters) => {
      dispatch(fetchCars(parameters));
    },
    fetchColors: () => {
      dispatch(fetchColors());
    },
    fetchManufacturers: () => {
      dispatch(fetchManufacturers());
    },
    updateManufacturerFilter: (manufacturer?: string) => {
      dispatch(updateManufacturerFilter(manufacturer));
    }
  };
};

const mapStateToProps = (state: IState) => state;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListViewContainer);
