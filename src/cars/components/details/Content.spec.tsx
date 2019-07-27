import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { DetailsContent, IProps as IDetailsContent } from './Content';
import { messages } from '../../constants/messages';
import { Button } from '../common/Button';

describe('Content', () => {
  const props = {
    title: 'Fiat Marea',
    description: 'Stock # 41400 - 100.141 KM - Diesel - White',
    isFavourite: false,
    toggleFavourite: jest.fn()
  };

  const render = (iProps: IDetailsContent) => {
    return shallow(<DetailsContent {...iProps} />);
  };

  let wrapper: ShallowWrapper<IDetailsContent>;

  beforeEach(() => {
    wrapper = render(props);
  });

  it('renders', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('title', () => {
    expect(wrapper.find('.title').text()).toEqual(props.title);
  });

  it('description', () => {
    expect(wrapper.find('.description').text()).toEqual(props.description);
  });

  it('details', () => {
    expect(wrapper.find('.details').text()).toEqual(messages['details.paragraph']);
  });

  describe('favourite', () => {
    it('text not favourite', () => {
      expect(
        wrapper
          .find('.favourite')
          .find('p')
          .text()
      ).toEqual(messages['favourite.add']);
    });

    it('text favourite', () => {
      const favouriteWrapper = render({ ...props, isFavourite: true });
      expect(
        favouriteWrapper
          .find('.favourite')
          .find('p')
          .text()
      ).toEqual(messages['favourite.remove']);
    });

    it('action favourite', () => {
      const favouriteWrapper = render({ ...props, isFavourite: true });
      expect(
        favouriteWrapper
          .find('.favourite')
          .find(Button)
          .prop('label')
      ).toEqual('Remove');
    });

    it('action', () => {
      expect(
        wrapper
          .find('.favourite')
          .find(Button)
          .prop('label')
      ).toEqual('Save');
    });

    it('action', () => {
      wrapper
        .find('.favourite')
        .find(Button)
        .props()
        .handleClick();
      expect(props.toggleFavourite).toBeCalled();
    });
  });
});
