import RedirectProcessButton from "components/category/RedirectProcessButton";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { currentCategoryState, currentSkillState } from "store/state";

const Category = function () {
  const router = useRouter();
  const [currentCategory, setCurrentCategory] = useRecoilState(currentCategoryState);
  const [currentSkill, setCurrentSkill] = useRecoilState(currentSkillState);

  useEffect(() => {
    setCurrentCategory({ id: Number(router.query.id) || -1, categoryName: "" });
    setCurrentSkill({ id: 1, skillName: "" });
  }, []);

  return <div>{currentCategory?.id !== -1 && currentSkill?.id && <RedirectProcessButton />}</div>;
};

export default Category;
