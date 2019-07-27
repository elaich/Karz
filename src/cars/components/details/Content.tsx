import * as React from 'react';
import { messages } from '../../constants/messages';
import { Button } from '../common/Button';
import './Content.scss';

export interface IProps {
  title: string;
  description: string;
  isFavourite: boolean;
  toggleFavourite: () => void;
}

export const DetailsContent = (props: any) => (
  <div className='details-content'>
    <div className='left'>
      <div className='title'>{props.title}</div>
      <div className='description'>{props.description}</div>
      <div className='details'>{messages['details.paragraph']}</div>
    </div>
    <div className='favourite'>
      <p>{props.isFavourite ? messages['favourite.remove'] : messages['favourite.add']}</p>
      <Button label={props.isFavourite ? 'Remove' : 'Save'} handleClick={props.toggleFavourite} />
    </div>
  </div>
);
