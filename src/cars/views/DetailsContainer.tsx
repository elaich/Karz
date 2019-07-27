import * as React from 'react';
import { connect } from 'react-redux';
import { fetchCar, toggleFavourite } from '../actions/Actions';
import { IState } from '../reducers/carsApp';
import { DetailsContent } from '../components/details/Content';

export interface IProps {
  stockNumber: number;
  fetchCar: (stockNumber: number) => void;
  car: {
    title: string;
    description: string;
  };
  favourites: number[];
  toggleFavourite: (stockNumber: number) => void;
}

export class DetailsContainer extends React.Component<IProps> {
  public componentDidMount() {
    this.props.fetchCar(this.props.stockNumber);
  }

  public render() {
    const isFavourite = this.props.favourites.indexOf(this.props.stockNumber) >= 0;

    return this.props.car ? (
      <DetailsContent
        title={this.props.car.title}
        description={this.props.car.description}
        isFavourite={isFavourite}
        toggleFavourite={this.toggleFavourite}
      />
    ) : (
      ''
    );
  }

  private toggleFavourite = () => {
    this.props.toggleFavourite(this.props.stockNumber);
  };
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchCar: (stockNumber: number) => {
      dispatch(fetchCar(stockNumber));
    },
    toggleFavourite: (stockNumber: number) => {
      dispatch(toggleFavourite(stockNumber));
    }
  };
};

const mapStateToProps = (state: IState) => ({
  car: state.car,
  favourites: state.favourites
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailsContainer);
