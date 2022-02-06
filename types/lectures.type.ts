// type Answer = "Fast" | "Middle" | "Slow";

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
  hasPreview?: string;
  reviewTime: string;
  startYear: number;
  duration: number;
  tags: string[];
  url: string;
}

export interface LectureResultData {
  name: string;
  time: number;
  price: number;
  replay: number;
  answer: string;
  createdDate: number;
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

export interface CurrentCompareData {
  id: number;
  name: string;
  skill: string;
}
