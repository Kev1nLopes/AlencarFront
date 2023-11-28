import { ShippingCompany } from "./shippingCompany";

export interface Vehicle {
  id: number;
  plateNumber: string;
  shippingCompany: ShippingCompany;
  active: boolean;
}
