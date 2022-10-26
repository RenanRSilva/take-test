export type SelectedVehicleModel = {
   name: string;
   modelName: string;
   modelYear: number;
   manufacturingYear: number;
   fuel: string;
   mileage: number;
   price: number;
   picture: string;
   onClick: (uuid: any) => void;
   id: string;
   brand_name: string;
};
