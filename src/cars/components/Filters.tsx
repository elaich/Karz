import * as React from 'react';
import { Select } from './common/Select';

interface IProps {
  colorOptions: Array<{ label: string; value?: string; checked?: boolean }>;
  manufacturerOptions: Array<{ label: string; value?: string; checked?: boolean }>;
  handleSelectColor: (value?: string) => void;
  handleSelectManufacturer: (value?: string) => void;
}

export const CarFilters: React.FC<IProps> = props => (
  <div className='filters'>
    <Select header='Color' options={props.colorOptions} select={props.handleSelectColor} />
    <Select header='Manufacturer' options={props.manufacturerOptions} select={props.handleSelectManufacturer} />
  </div>
);
