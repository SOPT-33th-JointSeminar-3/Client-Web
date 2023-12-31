export interface calInfo {
  year: number;
  month: number;
  start: number;
  length: number;
  holiday: number[];
  data: {
    date: number;
    price: number;
  }[];
}

const CALENDAR_INFO: calInfo[] = [
  {
    year: 2023,
    month: 12,
    start: 5,
    length: 31,
    holiday: [25],
    data: [
      { date: 5, price: 5.8 },
      { date: 7, price: 8 },
      { date: 11, price: 7.7 },
      { date: 15, price: 6.4 },
      { date: 20, price: 6 },
      { date: 21, price: 7.3 },
      { date: 23, price: 10.2 },
      { date: 29, price: 9 },
    ],
  },
  {
    year: 2024,
    month: 1,
    start: 1,
    length: 31,
    holiday: [1],
    data: [{ date: 5, price: 5.8 }],
  },
  {
    year: 2024,
    month: 2,
    start: 4,
    length: 29,
    holiday: [9, 10],
    data: [
      { date: 5, price: 5.8 },
      { date: 7, price: 8 },
      { date: 11, price: 7.7 },
    ],
  },
  {
    year: 2024,
    month: 3,
    start: 5,
    length: 31,
    holiday: [1],
    data: [],
  },
  {
    year: 2024,
    month: 4,
    start: 1,
    length: 30,
    holiday: [10],
    data: [],
  },
  {
    year: 2024,
    month: 5,
    start: 3,
    length: 31,
    holiday: [15],
    data: [],
  },
  {
    year: 2024,
    month: 6,
    start: 6,
    length: 30,
    holiday: [6],
    data: [],
  },
  {
    year: 2024,
    month: 7,
    start: 1,
    length: 31,
    holiday: [],
    data: [],
  },
  {
    year: 2024,
    month: 8,
    start: 4,
    length: 31,
    holiday: [15],
    data: [],
  },
  {
    year: 2024,
    month: 9,
    start: 0,
    length: 30,
    holiday: [16, 17, 18],
    data: [],
  },
  {
    year: 2024,
    month: 10,
    start: 2,
    length: 31,
    holiday: [3, 9],
    data: [],
  },
  {
    year: 2024,
    month: 11,
    start: 5,
    length: 30,
    holiday: [],
    data: [],
  },
];

export { CALENDAR_INFO };
