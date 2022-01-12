import type { NextPage } from "next";
import Test from "components/common/Test";
const Home: NextPage = () => {
  return (
    <>
      <h1>
        프리텐다드체가 잘 적용되나 확인해보고 싶다<Test></Test>
      </h1>
      <style jsx>{`
        h1 {
          font-family: 'Pretendard-Light';
        }
      `}
      </style>
    </>
  );
};

export default Home;
