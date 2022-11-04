import { faker } from '@faker-js/faker';

import { ContactModel } from '../../../src/domain/models/contact-model'

export const mockContact = (): ContactModel => ({
   firstLetters: faker.datatype.string(2),
   name: faker.datatype.string(5),
   phoneNumber: faker.datatype.string(7),
   email: faker.datatype.string(9),
})
