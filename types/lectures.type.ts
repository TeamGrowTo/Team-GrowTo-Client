type Answer = "Fast" | "Middle" | "Slow";

export interface ResponseResultProperty {
  lectures: ResponseResultData[];
  categoryId: number;
  skillId: number;
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
  categoryId: number;
  skillId: number;
}

export interface LectureCompareRequest {
  categoryId: string | null;
  skill: string | null;
  email: string | null;
}
