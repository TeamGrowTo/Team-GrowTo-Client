import type { NextPage } from "next";
import Test from "components/common/Test";
import Share from "components/main/Share";
const Home: NextPage = () => {
  return (
    <>
      <h1>
        프리텐다드체가 잘 적용되나 확인해보고 싶다<Test></Test>
      </h1>
      <style jsx>
        {`
          h1 {
            font-family: "Pretendard-Light";
          }
        `}
      </style>
      <Share />
    </>
  );
};

export default Home;
