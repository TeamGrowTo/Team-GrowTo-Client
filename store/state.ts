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
  effects_UNSTABLE: [persistAtom],
});

export const lectureSkillState = atom<LectureSkillData[] | null>({
  key: "lectureSkillState",
  default: null,
});
//--------------------카테고리 리스트 관련------------
export const isDisableState = atom({
  key: "isDisableState",
  default: true,
});

export type SortingType = "총 소요시간" | "가격" | "개설일" | "반복시청 기간" | "질의응답 시간";

//정렬하는 select형식의 button들을 만들기 위해 기준을 배열로 만든 후 리턴문에서 map 해주기
export const sortingCriteria: SortingType[] = [
  "총 소요시간",
  "가격",
  "개설일",
  "반복시청 기간",
  "질의응답 시간",
];

//sorting isOpen 객체의 type정의
export interface ISorting {
  [key: string]: boolean;
}

//드랍다운 한 개가 열리면 다른 것들이 닫혀야 함 : 여러 개를 한 번에 관리해줘야함
//드랍다운이 열렸는지 여부(isOpen)를 객체에 담는다. ex){"반복시청 기간": true, ... }
export const isOpenDefault = {
  "총 소요시간": false,
  가격: false,
  개설일: false,
  "반복시청 기간": false,
  "질의응답 시간": false,
};

export const isOpenState = atom<ISorting>({
  key: "isOpenState",
  default: isOpenDefault,
});

//-----------isSelected----------------
//중복 선택이 안되기 때문에 isOpen처럼 isSelected도 객체로.. 한번에 관리한다.
//초기값은 모두 false.
export type ISelectedItemName = {
  [key in SortingType]: SortingItemType;
};

export const isSelectedState = atom<ISorting>({
  key: "isSelectedState",
  default: isOpenDefault,
});

//---------------currentSortingState-----------

//dropdown 내리면 나오는 선택 목록들 type정의
export type SortingItemType =
  | "긴 순"
  | "짧은 순"
  | "최근 순"
  | "높은 순"
  | "낮은 순"
  | "빠름"
  | "긴 순서"
  | "짧은 순서";

export type IDropListName = {
  [key in SortingType]: SortingItemType[];
};

export type ICurrentSortingType = {
  [key in SortingType]: string;
};

//dropListName은 드랍다운 클릭했을 때 나오는 목록 리스트들을 기준별로 저장한 것
//가격과 개설일은 eslint자동수정으로 따옴표가 자꾸 빠지는데 문제없이 돌아갑니다
export const dropListName: IDropListName = {
  "총 소요시간": ["긴 순", "짧은 순"],
  가격: ["높은 순", "낮은 순"],
  개설일: ["최근 순"],
  "반복시청 기간": ["긴 순서", "짧은 순서"],
  "질의응답 시간": ["빠름"],
};

//어떤 것이 선택되었는지를 표시하기 위한 객체. 처음에는 아무것도 선택되지 않았기 때문에 빈문자열.
//선택된 드랍다운 메뉴가 들어갈 currentSorting의 디폴트값

//선택된 기준의 경우만 무엇이 선택되었는지 버튼 안에 표시되어야함.
export const currentSortingDefault: ICurrentSortingType = {
  "총 소요시간": "",
  가격: "",
  개설일: "",
  "반복시청 기간": "",
  "질의응답 시간": "",
};

export const currentSortingState = atom<ICurrentSortingType>({
  key: "currentSortingState",
  default: currentSortingDefault,
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
