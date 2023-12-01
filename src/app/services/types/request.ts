import { Client } from "./client";
import { Product } from "./product";
import { Vehicle } from "./vehicle";

export enum Status {
  WAITING_FOR_PRODUCTION = 'WAITING_FOR_PRODUCTION',
  IN_PRODUCTION = 'IN_PRODUCTION',
  PRODUCED = 'PRODUCED',
  WAITING_VEHICLE = 'WAITING_VEHICLE',
  IN_TRANSIT = 'IN_TRANSIT',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED',
}


export interface Request {
  id: number;
  client: Client;
  vehicle: Vehicle;
  product: Product;
  amount: number;
  status: Status;
}
