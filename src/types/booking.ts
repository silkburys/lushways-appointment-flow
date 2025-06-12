
export interface Location {
  id: string;
  name: string;
  address: string;
  image: string;
}

export interface Service {
  id: string;
  name: string;
  price: number;
  duration: number;
  category: string;
}

export interface Staff {
  id: string;
  name: string;
  image: string;
  specialties: string[];
}

export interface BookingItem {
  id: string;
  location: Location;
  service: Service;
  staff: Staff;
  date: string;
  time: string;
  price: number;
}

export interface Customer {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  comments?: string;
}
