export interface Car {
  stockNumber: number;
  manufacturerName: string;
  modelName: string;
  mileage: {
    number: number;
    unit: string;
  };
  fuelType: string;
  color: string;
  pictureUrl: string;
}
