type Answer = "Fast" | "Middle" | "Slow";

export interface PostLectureReportData {
  difference: number;
  lectureName: string;
  description: string;
  email: string;
}

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

export interface LectureCompareRequest {
  categoryId: string | null;
  skill: string | null;
  email: string | null;
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

export interface LectureRankData {
  id: number;
  name: string;
  skill: string;
  number: number;
}
