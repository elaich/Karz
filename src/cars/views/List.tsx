import * as React from 'react';
import { CarHeader, IProps as ICarHeader } from '../components/Header';
import { CarList, IProps as ICarList } from '../components/List';
import { CarFilters, IProps as ICarFilters } from '../components/Filters';
import { CarPagination, IProps as ICarPagination } from '../components/Pagination';
import './List.scss';

interface IProps {
  filters: ICarFilters;
  header: ICarHeader;
  list: ICarList;
  pagination: ICarPagination;
}

export const ListView: React.FC<IProps> = props => (
  <div className='list-view'>
    <div className='list-view__filters'>
      <CarFilters {...props.filters} />
    </div>
    <div className='list-view__content'>
      <CarHeader {...props.header} />
      <CarList {...props.list} />
      <CarPagination {...props.pagination} />
    </div>
  </div>
);
