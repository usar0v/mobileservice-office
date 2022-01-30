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