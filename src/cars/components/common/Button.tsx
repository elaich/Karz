import * as React from 'react';
import './Button.scss';

interface IProps {
  label: string;
  handleClick: () => void;
}

export const Button: React.FC<IProps> = props => {
  const onClick = () => props.handleClick();
  return <button onClick={onClick}>{props.label}</button>;
};
