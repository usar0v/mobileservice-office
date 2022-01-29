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
  title: string;
  items: IServiceItem[];
}
