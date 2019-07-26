import * as React from 'react';
import { CarCard } from './CarCard';
import { shallow } from 'enzyme';

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
    expect(wrapper.find('.link').prop('href')).toEqual(car.link);
    expect(wrapper.find('.link').text()).toEqual('View details');
  });
});
