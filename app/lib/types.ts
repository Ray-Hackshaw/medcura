export interface AppointmentSlot {
  time: string;
  name: string;
  image?: string;
  status: "Upcoming" | "Ongoing" | "Done" | "Cancelled";
  reason?: string;
  flag?: boolean;
}
