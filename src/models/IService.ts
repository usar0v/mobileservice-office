export interface IServiceItem {
  id: number;
  brandId: number;
  title: string;
  price: number;
  term: string;
  instructionTitle: string;
  instructionStep: string[];
  createdAt: string;
  updatedAt: string;
}


export interface IService {
  id: number;
  title: string;
  items: IServiceItem[];
}

export interface IChangeServiceStatus {
  id: number;
  status: string;
}