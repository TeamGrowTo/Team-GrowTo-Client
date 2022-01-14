import { atom } from "recoil";

export const totalNumberState = atom({
  key: "totalNumberState",
  default: 250,
});

export const findNumberState = atom({
  key: "findNumberState",
  default: 3500,
});

export const requestNumberState = atom({
  key: "requestNumberState",
  default: 99,
});
