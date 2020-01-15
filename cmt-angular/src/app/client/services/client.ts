export interface Client {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  pid: string;
  phone: number;
  legalAddress: Address;
  actualAddress: Address;
  photo: string;
}

interface Address {
  country: string;
  city: string;
  address: string;
}
