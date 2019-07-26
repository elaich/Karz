import { colorMapperFn } from './colorMapper';

describe('Color Mapper', () => {
  it('maps a color to a color option', () => {
    const color = 'yellow';

    expect(colorMapperFn(color)).toEqual({
      label: 'Yellow',
      value: 'yellow'
    });
  });
});
