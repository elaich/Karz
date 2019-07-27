import * as React from 'react';
import { CarCard } from './Card';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';

describe('CarCard', () => {
  const render = (iProps: any) => {
    return shallow(<CarCard {...iProps} />);
  };

  const car = {
    title: 'Fiat Marea',
    description: 'Stock # 41400 - 100.141 KM - Diesel - White',
    link: '/view?sn=41400',
    image: 'http://localhost:3001/car.svg'
  };

  const props = {
    car
  };

  it('title', () => {
    const wrapper = render(props);
    expect(wrapper.find('.title').text()).toEqual(car.title);
  });

  it('description', () => {
    const wrapper = render(props);
    expect(wrapper.find('.description').text()).toEqual(car.description);
  });

  it('image', () => {
    const wrapper = render(props);
    expect(wrapper.find('img').prop('src')).toEqual(car.image);
  });

  it('link', () => {
    const wrapper = render(props);
    expect(wrapper.find('.link').prop('to')).toEqual(car.link);
  });
});
