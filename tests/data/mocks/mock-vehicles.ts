import { faker } from '@faker-js/faker'
import { RemoteLoadVehicleList } from '../../../src/data/use-cases/remote-load-vehicle-list'

export const mockVehicles = (): RemoteLoadVehicleList.Model => (
  {
    evaluation_type: faker.datatype.string(10),
    version_uuid: faker.datatype.uuid(),
    mileage: faker.datatype.number(4),
    model_year: faker.datatype.number(4),
    name: faker.datatype.string(10),
    transmission_type: faker.datatype.string(10),
    fuel_type: faker.datatype.string(10),
    vehicle_uuid: faker.datatype.uuid(),
    model_name: faker.datatype.string(10),
    manufacturing_year: faker.datatype.number(4),
    version_name: faker.datatype.string(10),
    image: faker.image.imageUrl(),
    brand_name: faker.datatype.string(10),
    ad_selling_price: faker.datatype.number(4),
    model_uuid: faker.datatype.uuid(),
    brand_uuid: faker.datatype.uuid(),
  })

export const mockVehiclesList = (): RemoteLoadVehicleList.Model[] => ([
  mockVehicles(),
  mockVehicles(),
  mockVehicles(),
])
