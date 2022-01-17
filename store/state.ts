import { atom } from "recoil";

export const lectureCategoryState = atom({
  key: "lectureCategoryState",
  default: [],
});

interface CurrentCategory {
  id: number;
  categoryName: string;
}

export const currentCategoryState = atom<CurrentCategory | null>({
  key: "currentCategoryState",
  default: null,
});

interface CurrentSkill {
  id: number;
  skillName: string;
}

export const currentSkillState = atom<CurrentSkill | null>({
  key: "currentSkillState",
  default: null,
});
