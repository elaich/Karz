import * as React from 'react';
import { shallow } from 'enzyme';
import { CarPagination } from './Pagination';

describe('CarPagination', () => {
  const render = (iProps: any) => {
    const wrapper = shallow(<CarPagination {...iProps} />);
    const findSpanAt = (index: number) => wrapper.find('span').at(index);
    return { wrapper, findSpanAt };
  };

  it('show buttons', () => {
    const props = {
      page: 2,
      pages: 10
    };

    const { wrapper, findSpanAt } = render(props);
    expect(findSpanAt(0).text()).toEqual('First');
    expect(findSpanAt(1).text()).toEqual('Previous');
    expect(findSpanAt(2).text()).toEqual('Page 2 of 10');
    expect(findSpanAt(3).text()).toEqual('Next');
    expect(findSpanAt(4).text()).toEqual('Last');
  });

  describe('first page', () => {
    const props = {
      page: 1,
      changePage: jest.fn(),
      pages: 10
    };
    const { wrapper, findSpanAt } = render(props);

    it('disabled / enabled buttons', () => {
      expect(findSpanAt(0).hasClass('disabled')).toBe(true);
      expect(findSpanAt(1).hasClass('disabled')).toBe(true);
      expect(findSpanAt(2).hasClass('disabled')).toBe(true);
      expect(findSpanAt(3).hasClass('disabled')).toBe(false);
      expect(findSpanAt(4).hasClass('disabled')).toBe(false);
    });

    it('changes page', () => {
      findSpanAt(3).simulate('click');
      expect(props.changePage).toBeCalledWith(2);
      props.changePage.mockClear();

      findSpanAt(4).simulate('click');
      expect(props.changePage).toBeCalledWith(10);
      props.changePage.mockClear();

      findSpanAt(0).simulate('click');
      findSpanAt(1).simulate('click');
      expect(props.changePage).not.toBeCalled();
    });
  });

  describe('last page', () => {
    const props = {
      changePage: jest.fn(),
      page: 10,
      pages: 10
    };

    const { wrapper, findSpanAt } = render(props);
    it('disabled / enabled buttons', () => {
      expect(findSpanAt(0).hasClass('disabled')).toBe(false);
      expect(findSpanAt(1).hasClass('disabled')).toBe(false);
      expect(findSpanAt(2).hasClass('disabled')).toBe(true);
      expect(findSpanAt(3).hasClass('disabled')).toBe(true);
      expect(findSpanAt(4).hasClass('disabled')).toBe(true);
    });

    it('changes page', () => {
      findSpanAt(0).simulate('click');
      expect(props.changePage).toBeCalledWith(1);
      props.changePage.mockClear();

      findSpanAt(1).simulate('click');
      expect(props.changePage).toBeCalledWith(9);
      props.changePage.mockClear();

      findSpanAt(3).simulate('click');
      findSpanAt(4).simulate('click');
      expect(props.changePage).not.toBeCalled();
    });
  });
});
