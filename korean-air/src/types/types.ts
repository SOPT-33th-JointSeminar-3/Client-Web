export interface SeatsType {
  seatId: number;
  flightId: number;
  seatClass: string;
  price: number;
}

export interface FlightInfoItem {
  id: number;
  startTime: string;
  endTime: string;
  durationTime: string;
  isLowestPrice: boolean;
  seats: SeatsType[];
}
