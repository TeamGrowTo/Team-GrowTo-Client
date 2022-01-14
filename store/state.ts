import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const lectureCategoryState = atom({
  key: "lectureCategoryState",
  default: [],
});

export const processState = atom({
  key: "processState",
  default: {
    category: "",
    skill: "",
    tags: [""],
    timeAsc: false,
    priceAsc: false,
  },
  effects_UNSTABLE: [persistAtom],
});
