export interface ResponseCategoryData {
  name: string | null;
}

export interface LectureCategoryData {
  categoryName: string | null;
}

export interface ResponseLectureDataType {
  name: string;
  time: number;
  price: number;
  reviewTime: string;
  startYear: string;
  tags: string[];
  url: string;
}

export interface LectureDataListType {
  data: ResponseLectureDataType[];
}
