type Answer = "Fast" | "Middle" | "Slow";

interface ItemObj {
  id: number;
  name: string;
}
export interface ResponseResultProperty {
  lectures: ResponseResultData[];
  category: ItemObj;
  skill: ItemObj;
}

export interface ResponseResultData {
  name: string;
  time: number;
  price: number;
  replay: boolean;
  reviewTime: Answer;
  startYear: string;
  tags: string[];
  url: string;
}

export interface LectureResultData {
  name: string;
  time: number;
  price: number;
  replay: boolean;
  answer: Answer;
  createdDate: string;
  tags: string[];
  url: string;
}

export interface LecturesResultAllData {
  result: LectureResultData[];
  category: ItemObj;
  skill: ItemObj;
}

export interface IProcessData {
  category: string;
  skill: string;
  tags: string[];
  timeAsc: boolean | null;
  priceAsc: boolean | null;
}
export interface ProcessDataState {
  category: string;
  skill: string;
  tags: string[];
  timeAsc: boolean | null | undefined;
  priceAsc: boolean | null | undefined;
}
