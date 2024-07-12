export interface UsersInfoI {
  address: AddressI;
  id: number;
  email: string;
  username: string;
  password: string;
  name: NameI;
  phone: string;
  __v: number;
}

export interface AddressI {
  geolocation: GeolocationI;
  city: string;
  street: string;
  number: number;
  zipcode: string;
}

export interface GeolocationI {
  lat: string;
  long: string;
}

export interface NameI {
  firstname: string;
  lastname: string;
}
