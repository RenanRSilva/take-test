import { HttpClient, HttpStatusCode } from '../protocols/http/http-client';
import { LoadVehicleList } from '../../domain/usecases/load-vehicle-list';
import { UnexpectedError } from '../../domain/errors/unexpected-error';

export class RemoteLoadVehicleList implements LoadVehicleList {
   constructor(
      private readonly url: string,
      private readonly httpClient: HttpClient<RemoteLoadVehicleList.Model[]>
   ) {}

   async load(): Promise<LoadVehicleList.Model[]> {
      const httpResponse = await this.httpClient.request({
         url: this.url,
         method: 'get',
      });
      const remoteVehicles = httpResponse.body || [];
      switch (httpResponse.statusCode) {
         case HttpStatusCode.ok:
            return remoteVehicles;
         case HttpStatusCode.noContent:
            return [];
         default:
            throw new UnexpectedError();
      }
   }
}

export namespace RemoteLoadVehicleList {
   export type Model = {
      evaluation_type: string;
      version_uuid: string;
      mileage: number;
      model_year: number;
      name: string;
      transmission_type: string;
      fuel_type: string;
      vehicle_uuid: string;
      model_name: string;
      manufacturing_year: number;
      version_name: string;
      image: string;
      brand_name: string;
      ad_selling_price: number;
      model_uuid: string;
      brand_uuid: string;
   };
}
