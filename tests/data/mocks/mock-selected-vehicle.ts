import { faker } from '@faker-js/faker';

import { SelectedVehicleModel } from '../../../src/domain/models/selected-vehicle-model';

export const mockVehicle = (): SelectedVehicleModel => ({
   name: faker.datatype.string(10),
   modelName: faker.datatype.string(10),
   modelYear: faker.datatype.number(4),
   manufacturingYear: faker.datatype.number(4),
   fuel: faker.datatype.string(10),
   mileage: faker.datatype.number(4),
   price: faker.datatype.number(6),
   picture: faker.image.imageUrl(),
   onClick: (uuid: any) => {},
   id: faker.datatype.uuid(),
   brand_name: faker.datatype.string(10),
});
