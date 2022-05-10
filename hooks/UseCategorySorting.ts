import { LectureCategoryData } from "types/info.type";

export function UseSorting() {
  //category 화면대로 정렬해줌.
  const sortCategoryToFitScreen = (category: string, arr: LectureCategoryData[] | null) => {
    const result = arr?.find((serverCategory) => serverCategory.categoryName === category);

    if (result) return result;
    else throw new Error("존재하지 않는 카테고리입니다.");
  };

  //서버데이터와 정렬하고 싶은 화면의 데이터 순서를 받는다.
  const filterCategory = (arr: LectureCategoryData[] | null, categoryViewArr: string[]) => {
    return categoryViewArr.map((category) => sortCategoryToFitScreen(category, arr));
  };

  return { filterCategory };
}
