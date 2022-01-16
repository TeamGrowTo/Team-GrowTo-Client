import RedirectProcessButton from "components/category/RedirectProcessButton";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Category = function () {
  const router = useRouter();
  const [nowCategory, setNowCategory] = useState(Number(router.query.id) || -1);
  const [nowSkill, setNowSkill] = useState(1);

  return (
    <div>
      {nowCategory !== -1 && nowSkill && (
        <RedirectProcessButton nowCategory={nowCategory} nowSkill={nowSkill} />
      )}
    </div>
  );
};

export default Category;
