import * as React from 'react';
import './Pagination.scss';

export interface IProps {
  page: number;
  pages: number;
  changePage: (page: number) => void;
}

export const CarPagination: React.FC<IProps> = props => {
  const isFirst = () => props.page === 1;
  const isLast = () => props.page === props.pages;

  const buttons = [
    {
      onClick: () => {
        if (!isFirst()) {
          props.changePage(1);
        }
      },
      className: isFirst() ? 'disabled' : '',
      label: 'First'
    },
    {
      onClick: () => {
        if (!isFirst()) {
          props.changePage(props.page - 1);
        }
      },
      className: isFirst() ? 'disabled' : '',
      label: 'Previous'
    },
    {
      className: 'disabled',
      label: `Page ${props.page} of ${props.pages}`
    },
    {
      onClick: () => {
        if (!isLast()) {
          props.changePage(props.page + 1);
        }
      },
      className: isLast() ? 'disabled' : '',
      label: 'Next'
    },
    {
      onClick: () => {
        if (!isLast()) {
          props.changePage(props.pages);
        }
      },
      className: isLast() ? 'disabled' : '',
      label: 'Last'
    }
  ];

  return (
    <div className='pagination'>
      {buttons.map(({ className, onClick, label }) => (
        <span key={label} className={className} onClick={onClick}>
          {label}
        </span>
      ))}
    </div>
  );
};
