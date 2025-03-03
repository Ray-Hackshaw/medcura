export interface AppointmentSlot {
  time: string;
  name: string;
  image?: string;
  status: 'Available' | 'Booked' | 'Cancelled';
  reason?: string;
  flag?: boolean;
}
