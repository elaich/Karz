import * as React from 'react';
import { Select } from '../common/Select';
import { IOption } from '../../models/option';
import './Header.scss';

export interface IProps {
  carsCount: number;
  pageCount: number;
  handleSelect: (value: string) => void;
  sortOptions: IOption[];
  carsLoading: boolean;
}

export const CarHeader: React.FC<IProps> = props => (
  <div className='car-header'>
    <div className='left'>
      <div className='heading'>{props.carsLoading ? 'Loading' : 'Available cars'}</div>
      <div className='title'>{props.carsLoading || `Showing ${props.pageCount} of ${props.carsCount} results`}</div>
    </div>
    <Select header='Sort by' select={props.handleSelect} options={props.sortOptions} />
  </div>
);
