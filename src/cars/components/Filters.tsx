import * as React from 'react';
import { IOption } from '../models/option';
import { Select } from './common/Select';

export interface IProps {
  colorOptions: IOption[];
  manufacturerOptions: IOption[];
  handleSelectColor: (value?: string) => void;
  handleSelectManufacturer: (value?: string) => void;
}

export const CarFilters: React.FC<IProps> = props => (
  <div className='filters'>
    <Select header='Color' options={props.colorOptions} select={props.handleSelectColor} />
    <Select header='Manufacturer' options={props.manufacturerOptions} select={props.handleSelectManufacturer} />
  </div>
);
