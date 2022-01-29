export interface IUser {
  id: number;
  fullName: string;
  email: string;
  password: string;
  phoneNumber: string;
  sum: number;
  spentMoney: number;
  country: string;
  role: number;
  createdAt: string;
  updatedAt: string;
}

export interface IChangeUserRole {
  email: string;
  role: number;
}
export interface IAddBalance {
  email: string;
  balance: number;
}