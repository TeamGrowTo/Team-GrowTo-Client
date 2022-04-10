import { LectureCategoryData } from "types/info.type";

export function UseSorting() {
  const categoryViewArr = ["개발", "기획", "디자인", "마케팅", "데이터", "기타"];

  //category 화면대로 정렬해줌.
  const sortCategoryToFitScreen = (category: string, arr: LectureCategoryData[] | null) => {
    const result = arr?.find((serverCategory) => serverCategory.categoryName === category);

    if (result) return result;
    else throw new Error("존재하지 않는 카테고리입니다.");
  };

  const filterCategory = (arr: LectureCategoryData[] | null) => {
    return categoryViewArr.map((category) => sortCategoryToFitScreen(category, arr));
  };

  return { filterCategory };
}
