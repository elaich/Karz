import * as React from 'react';
import { messages } from '../constants/messages';
import logo from '../components/common/logo.png';
import { Link } from '../components/common/Link';

import './NotFound.scss';

export const NotFound: React.FC<{}> = () => (
  <div className='notfound'>
    <div className='notfound__logo'>
      <img src={logo} />
    </div>
    <div className='notfound__title'>{messages['notfound.title']}</div>
    <p className='notfound__p'>{messages['notfound.p1']}</p>
    <p className='notfound__p'>
      {'You can always go back to the '} <Link to={'/'}>homepage</Link>
    </p>
  </div>
);
