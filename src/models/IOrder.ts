import {IUser} from "./IUser";
import {IServiceItem} from "./IService";

export interface IOrderedPhone {
  id: number;
  userId: number;
  phoneId: number;
  price: number;
  sn: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IOrderedProgram {
  id: number;
  userId: number;
  user: IUser;
  program: IServiceItem;
  price: number;
  email: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}