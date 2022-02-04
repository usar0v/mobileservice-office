import {IUser} from "./IUser";
import {IServiceItem} from "./IService";

export interface IOrderedPhone {
  id: number;
  user: IUser;
  phone: IServiceItem;
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

export interface IOrderedGame {
  id: number;
  userId: number;
  user: IUser;
  game: IServiceItem;
  gameId: number;
  nickName?: string;
  playerId: number;
  price: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

