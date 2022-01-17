import { atom } from "recoil";
import { LectureCategoryData } from "types/info.type";

export const lectureCategoryState = atom<LectureCategoryData[] | null>({
  key: "lectureCategoryState",
  default: null,
});

interface CurrentCategory {
  id: number | null;
  categoryName: string | null;
}

export const currentCategoryState = atom<CurrentCategory | null>({
  key: "currentCategoryState",
  default: null,
});
