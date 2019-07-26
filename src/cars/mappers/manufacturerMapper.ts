interface IManufacturer {
  name: string;
  models: Array<{ name: string }>;
}

export const manufacturerMapperFn = (manufacturer: IManufacturer) => ({
  label: manufacturer.name,
  value: manufacturer.name
});
