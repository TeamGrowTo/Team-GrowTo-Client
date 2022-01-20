import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import {
  LectureCategoryData,
  LectureDataListType,
  LectureSkillData,
  ResponseLectureDataType,
} from "types/info.type";
import { LectureResultData, ProcessDataState } from "types/lectures.type";
const { persistAtom } = recoilPersist();

export const lectureCategoryState = atom<LectureCategoryData[] | null>({
  key: "lectureCategoryState",
  default: null,
});

export const lectureSkillState = atom<LectureSkillData[] | null>({
  key: "lectureSkillState",
  default: null,
});

export const isDisableState = atom({
  key: "isDisableState",
  default: true,
});

interface CurrentCategory {
  id: number | null;
  categoryName: string | null;
}

export const currentCategoryState = atom<CurrentCategory | null>({
  key: "currentCategoryState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

interface CurrentSkill {
  id: number | null;
  skillName: string | null;
}

export const currentSkillState = atom<CurrentSkill | null>({
  key: "currentSkillState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const lectureDataList = atom<LectureDataListType | null>({
  key: "lectureDataState",
  default: null,
});

export const lectureResultState = atom<LectureResultData[] | null>({
  key: "lectureResultState",
  default: null,
});

export const processState = atom<ProcessDataState>({
  key: "processState",
  default: {
    category: "",
    skill: "",
    tags: [""],
    timeAsc: undefined,
    priceAsc: undefined,
  },
  effects_UNSTABLE: [persistAtom],
});
