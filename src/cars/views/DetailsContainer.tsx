import * as React from 'react';
import { connect } from 'react-redux';
import { fetchCar, toggleFavourite } from '../actions/Actions';
import { IState } from '../reducers/carsApp';
import { DetailsContent } from '../components/details/Content';
import { RouteComponentProps } from 'react-router-dom';

import './DetailsContainer.scss';

export interface IProps {
  match: {
    params: {
      stockNumber: string;
    };
  };
  history: any;
  fetchCar: (stockNumber: number, history: any) => void;
  car: {
    title: string;
    description: string;
  };
  favourites: number[];
  toggleFavourite: (stockNumber: number) => void;
}

export class DetailsContainer extends React.Component<IProps> {
  public componentDidMount() {
    const stockNumber = this.props.match.params.stockNumber;
    this.props.fetchCar(Number(stockNumber), this.props.history);
  }

  public render() {
    const stockNumber = this.props.match.params.stockNumber;
    const isFavourite = this.props.favourites.indexOf(Number(stockNumber)) >= 0;

    return (
      <div className='details-page'>
        <div className='banner' />
        {this.props.car ? (
          <DetailsContent
            title={this.props.car.title}
            description={this.props.car.description}
            isFavourite={isFavourite}
            toggleFavourite={this.toggleFavourite}
          />
        ) : (
          ''
        )}
      </div>
    );
  }

  private toggleFavourite = () => {
    const stockNumber = this.props.match.params.stockNumber;
    this.props.toggleFavourite(Number(stockNumber));
  };
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchCar: (stockNumber: number, history: any) => {
      dispatch(fetchCar(stockNumber, history));
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
