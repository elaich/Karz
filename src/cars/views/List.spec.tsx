import * as React from 'react';
import { shallow } from 'enzyme';
import { CarCard } from '../components/list/Card';
import { CarList } from '../components/list/List';
import { CarHeader } from '../components/list/Header';
import { CarFilters } from '../components/list/Filters';
import { CarPagination } from '../components/list/Pagination';
import { ListView } from './List';

describe('ListView', () => {
  const props = {
    header: {
      carsCount: 100,
      pageCount: 10,
      handleSelect: jest.fn(),
      carsLoading: false,
      sortOptions: [
        { label: 'None', checked: true },
        { label: 'Mileage - Ascending', value: 'asc' },
        { label: 'Mileage - Descending', value: 'des' }
      ]
    },
    list: {
      cars: [
        {
          title: 'Skoda Kodiaq',
          description: 'Stock # 10055 - 179.684 KM - Petrol - Yellow',
          image: 'http://localhost:3001/car.svg',
          link: '/view?sn=10055'
        },
        {
          title: 'Skoda Roomster',
          description: 'Stock # 10067 - 155.416 KM - Petrol - Red',
          link: '/view?sn=10067',
          image: 'http://localhost:3001/car.svg'
        },
        {
          title: 'Fiat Fiorino',
          description: 'Stock # 10110 - 106.002 KM - Petrol - Yellow',
          link: '/view?sn=10110',
          image: 'http://localhost:3001/car.svg'
        }
      ],
      carsLoading: false
    },
    filters: {
      colorOptions: [
        { label: 'All car colors', checked: true },
        { label: 'Yellow', value: 'yellow' },
        { label: 'Red', value: 'red' },
        { label: 'White', value: 'white' }
      ],
      manufacturerOptions: [
        { label: 'All manufacturers', checked: true },
        { label: 'Audi', value: 'Audi' },
        { label: 'BMW', value: 'BMW' },
        { label: 'Chrysler', value: 'Chrysler' }
      ],
      filter: jest.fn(),
      handleSelectColor: jest.fn(),
      handleSelectManufacturer: jest.fn()
    },
    pagination: {
      page: 1,
      changePage: jest.fn(),
      pages: 10
    }
  };

  it('renders', () => {
    const wrapper = shallow(<ListView {...props} />);
    expect(wrapper).toHaveLength(1);
  });

  it('header', () => {
    const wrapper = shallow(<ListView {...props} />);
    expect(wrapper.find(CarHeader).props()).toMatchObject(props.header);
  });

  it('list', () => {
    const wrapper = shallow(<ListView {...props} />);
    expect(wrapper.find(CarList).props()).toEqual(props.list);
  });

  it('filters', () => {
    const wrapper = shallow(<ListView {...props} />);
    expect(wrapper.find(CarFilters).props()).toMatchObject(props.filters);
  });

  it('pagination', () => {
    const wrapper = shallow(<ListView {...props} />);
    expect(wrapper.find(CarPagination).props()).toMatchObject(props.pagination);
  });
});
