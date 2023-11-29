import { atom } from "recoil";

export const departureState = atom({
  key: "departureState",
  default: "",
});

export const arriveState = atom({
  key: "arriveState",
  default: "",
});
