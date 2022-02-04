export interface IUser {
  id: number;
  fullName: string;
  email: string;
  password: string;
  phoneNumber: string;
  sum: number;
  spentMoney: number;
  country: string;
  discount: number;
  role: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IChangeUserRole {
  email: string;
  role: number;
}

export interface IAddBalance {
  email: string;
  balance: number;
}

export interface IAddDiscount {
  email: string;
  discount: number;
}
