import { manufacturerMapperFn } from './manufacturerMapper';

describe('Manufacturer Mapper', () => {
  it('maps a manufacturer to a manufacturer option', () => {
    const manufacturer = {
      name: 'Fiat',
      models: [
        {
          name: 'Marea'
        }
      ]
    };

    expect(manufacturerMapperFn(manufacturer)).toEqual({
      label: 'Fiat',
      value: 'Fiat'
    });
  });
});
