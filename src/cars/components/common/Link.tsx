import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import './Link.scss';

interface IProps {
  to: string;
  children: React.ReactNode;
}

export const Link: React.FC<IProps> = props => <RouterLink className='link' {...props} />;
