export interface IServiceItem {
  id: number;
  brandId: number;
  title: string;
  price: number;
  term: string;
  instructionTitle: string;
  instructionStep: string[];
  createdAt: Date;
  updatedAt: Date;
}


export interface IService {
  id: number;
  title: string;
  items: IServiceItem[];
}

export interface IChangeServiceStatus {
  id: number;
  status: string;
  userId: number;
  price: number;
}

export interface ISiteService {
  id?: number,
  title: string;
  items: string[],
  createdAt?: Date,
  updatedAt?: Date,
}