import * as React from 'react';
import { shallow } from 'enzyme';
import { ListView } from './List';
import { ListViewContainer } from './ListContainer';

describe('ListViewContainer', () => {
  const props = {
    fetchCars: jest.fn(),
    fetchColors: jest.fn(),
    fetchManufacturers: jest.fn(),
    updatePage: jest.fn(),
    updateSort: jest.fn(),
    updateColorFilter: jest.fn(),
    updateManufacturerFilter: jest.fn(),

    page: 1,
    pages: 1000,
    sort: 'des',
    colorFilter: 'red',
    manufacturerFilter: 'Fiat',
    carsCount: 100,
    sortOptions: [{ label: 'None', checked: true }, { label: 'Mileage - Descending', value: 'des' }],
    colorOptions: [{ label: 'All car colors', checked: true }, { label: 'White', value: 'white' }],
    manufacturerOptions: [{ label: 'All manufacturers', checked: true }, { label: 'Audi', value: 'Audi' }],
    cars: [
      {
        title: 'Skoda Kodiaq',
        description: 'Stock # 10055 - 179.684 KM - Petrol - Yellow',
        image: 'http://localhost:3001/car.svg',
        link: '/view?sn=10055'
      }
    ]
  };

  afterEach(() => {
    props.fetchCars.mockRestore();
    props.fetchColors.mockRestore();
    props.fetchManufacturers.mockRestore();
    props.updatePage.mockRestore();
    props.updateSort.mockRestore();
  });

  it('renders and fetches', () => {
    const wrapper = shallow(<ListViewContainer {...props} />);
    expect(props.fetchCars).toBeCalled();
    expect(props.fetchColors).toBeCalled();
    expect(props.fetchManufacturers).toBeCalled();
    expect(wrapper).toHaveLength(1);
  });

  describe('header', () => {
    it('props', () => {
      const wrapper = shallow(<ListViewContainer {...props} />);
      expect(wrapper.find(ListView).prop('header')).toMatchObject({
        carsCount: props.carsCount,
        pageCount: props.cars.length,
        sortOptions: props.sortOptions
      });
    });

    it('sorts', () => {
      const wrapper = shallow(<ListViewContainer {...props} />);
      wrapper
        .find(ListView)
        .prop('header')
        .handleSelect('asc');
      expect(props.updateSort).toBeCalledWith('asc');
      expect(props.updatePage).toBeCalledWith(1);
      expect(props.fetchCars).toBeCalledWith({
        sort: 'asc',
        color: props.colorFilter,
        manufacturer: props.manufacturerFilter
      });
    });
  });

  describe('pagination', () => {
    it('props', () => {
      const wrapper = shallow(<ListViewContainer {...props} />);
      expect(wrapper.find(ListView).prop('pagination')).toMatchObject({
        page: props.page,
        pages: props.pages
      });
    });

    it('change page', () => {
      const wrapper = shallow(<ListViewContainer {...props} />);
      wrapper
        .find(ListView)
        .prop('pagination')
        .changePage(2);
      expect(props.updatePage).toBeCalledWith(2);
      expect(props.fetchCars).toBeCalledWith({
        sort: props.sort,
        color: props.colorFilter,
        manufacturer: props.manufacturerFilter,
        page: 2
      });
    });
  });

  describe('filters', () => {
    it('props', () => {
      const wrapper = shallow(<ListViewContainer {...props} />);
      expect(wrapper.find(ListView).prop('filters')).toMatchObject({
        colorOptions: props.colorOptions,
        manufacturerOptions: props.manufacturerOptions,
        handleSelectColor: props.updateColorFilter,
        handleSelectManufacturer: props.updateManufacturerFilter
      });
    });

    it('filter', () => {
      const wrapper = shallow(<ListViewContainer {...props} />);
      wrapper
        .find(ListView)
        .prop('filters')
        .filter();
      expect(props.updatePage).toBeCalledWith(1);
      expect(props.fetchCars).toBeCalledWith({
        sort: props.sort,
        color: props.colorFilter,
        manufacturer: props.manufacturerFilter
      });
    });
  });

  describe('list', () => {
    it('props', () => {
      const wrapper = shallow(<ListViewContainer {...props} />);
      expect(wrapper.find(ListView).prop('list')).toMatchObject({
        cars: props.cars
      });
    });
  });
});
