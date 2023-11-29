import { atom } from "recoil";

export const departureState = atom<string>({
  key: "departureState",
  default: "출발",
});

export const arriveState = atom<string>({
  key: "arriveState",
  default: "도착",
});
