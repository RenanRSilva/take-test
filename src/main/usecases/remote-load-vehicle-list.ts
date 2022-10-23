import { makeApiUrl } from "../factories/http/api-url-factory";
import { LoadVehicleList } from "../../domain/usecases/load-vehicle-list";
import { RemoteLoadVehicleList } from "../../data/use-cases/remote-load-vehicle-list";
import { makeAxiosHttpClient } from "../factories/http/axios-http-client-factory";

export const makeRemoteLoadVehicleList = (): LoadVehicleList =>
  new RemoteLoadVehicleList(makeApiUrl('/v2/5eb553df31000060006994a8'), makeAxiosHttpClient())
