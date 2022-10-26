import { RemoteLoadVehicleList } from '../../../src/data/use-cases/remote-load-vehicle-list';
import { HttpStatusCode } from '../../../src/data/protocols/http/http-client';
import { UnexpectedError } from '../../../src/domain/errors/unexpected-error';
import { HttpClientSpy } from '../mocks/mock-http';
import { mockVehiclesList } from '../mocks/mock-vehicles';

import { faker } from '@faker-js/faker';

type SutTypes = {
   sut: RemoteLoadVehicleList;
   httpClientSpy: HttpClientSpy<RemoteLoadVehicleList.Model[]>;
};

const makeSut = (url = faker.internet.url()): SutTypes => {
   const httpClientSpy = new HttpClientSpy<RemoteLoadVehicleList.Model[]>();
   const sut = new RemoteLoadVehicleList(url, httpClientSpy);
   return {
      sut,
      httpClientSpy,
   };
};

describe('RemoteLoadVehicleList', () => {
   it('should call HttpClient with corret URL and Method', async () => {
      const url = faker.internet.url();
      const { sut, httpClientSpy } = makeSut(url);

      await sut.load();

      expect(httpClientSpy.url).toBe(url);
      expect(httpClientSpy.method).toBe('get');
   });

   it('should throw UnexpectedError if HttpClient returns 404', async () => {
      const { sut, httpClientSpy } = makeSut();
      httpClientSpy.response = {
         statusCode: HttpStatusCode.notFound,
      };

      const promise = sut.load();

      await expect(promise).rejects.toThrow(new UnexpectedError());
   });

   it('should return a list of Vehicles if HttpClient returns 200', async () => {
      const { sut, httpClientSpy } = makeSut();
      const httpResult = mockVehiclesList();
      httpClientSpy.response = {
         statusCode: HttpStatusCode.ok,
         body: httpResult,
      };

      const vehicleList = await sut.load();

      expect(vehicleList).toEqual([
         {
            evaluation_type: httpResult[0].evaluation_type,
            version_uuid: httpResult[0].version_uuid,
            mileage: httpResult[0].mileage,
            model_year: httpResult[0].model_year,
            name: httpResult[0].name,
            transmission_type: httpResult[0].transmission_type,
            fuel_type: httpResult[0].fuel_type,
            vehicle_uuid: httpResult[0].vehicle_uuid,
            model_name: httpResult[0].model_name,
            manufacturing_year: httpResult[0].manufacturing_year,
            version_name: httpResult[0].version_name,
            image: httpResult[0].image,
            brand_name: httpResult[0].brand_name,
            ad_selling_price: httpResult[0].ad_selling_price,
            model_uuid: httpResult[0].model_uuid,
            brand_uuid: httpResult[0].brand_uuid,
         },
         {
            evaluation_type: httpResult[1].evaluation_type,
            version_uuid: httpResult[1].version_uuid,
            mileage: httpResult[1].mileage,
            model_year: httpResult[1].model_year,
            name: httpResult[1].name,
            transmission_type: httpResult[1].transmission_type,
            fuel_type: httpResult[1].fuel_type,
            vehicle_uuid: httpResult[1].vehicle_uuid,
            model_name: httpResult[1].model_name,
            manufacturing_year: httpResult[1].manufacturing_year,
            version_name: httpResult[1].version_name,
            image: httpResult[1].image,
            brand_name: httpResult[1].brand_name,
            ad_selling_price: httpResult[1].ad_selling_price,
            model_uuid: httpResult[1].model_uuid,
            brand_uuid: httpResult[1].brand_uuid,
         },
         {
            evaluation_type: httpResult[2].evaluation_type,
            version_uuid: httpResult[2].version_uuid,
            mileage: httpResult[2].mileage,
            model_year: httpResult[2].model_year,
            name: httpResult[2].name,
            transmission_type: httpResult[2].transmission_type,
            fuel_type: httpResult[2].fuel_type,
            vehicle_uuid: httpResult[2].vehicle_uuid,
            model_name: httpResult[2].model_name,
            manufacturing_year: httpResult[2].manufacturing_year,
            version_name: httpResult[2].version_name,
            image: httpResult[2].image,
            brand_name: httpResult[2].brand_name,
            ad_selling_price: httpResult[2].ad_selling_price,
            model_uuid: httpResult[2].model_uuid,
            brand_uuid: httpResult[2].brand_uuid,
         },
      ]);
   });

   it('should return an empty list if HttpClient returns 204', async () => {
      const { sut, httpClientSpy } = makeSut();
      httpClientSpy.response = {
         statusCode: HttpStatusCode.noContent,
      };

      const vehicleList = await sut.load();

      expect(vehicleList).toEqual([]);
   });
});
