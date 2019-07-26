import * as React from 'react';
import { Select } from './common/Select';
import './CarHeader.scss';

interface IProps {
  carsCount: number;
  pageCount: number;
  handleSelect: (value: string) => void;
  sortOptions: Array<{ label: string; value?: string; checked?: boolean }>;
}

export const CarHeader: React.FC<IProps> = props => (
  <div className='car-header'>
    <div className='left'>
      <div className='heading'>Available cars</div>
      <div className='title'>
        Showing {props.pageCount} of {props.carsCount} results
      </div>
    </div>
    <Select header='Sort by' select={props.handleSelect} options={props.sortOptions} />
  </div>
);
