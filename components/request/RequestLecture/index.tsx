import { postLectureRequest } from "apis/lectures.api";
import Modal from "components/common/Modal";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { lectureCategoryState } from "store/state";
import { LectureCategoryData } from "types/info.type";

import Email from "./Email";
import LectureCategory from "./LectureCategory";
import LectureType from "./LectureType";
import {
  ActiveRequestButton,
  DisabledRequestButton,
  RequestCard,
  StyledRoot,
  Title,
  Wrapper,
} from "./style";
export interface IPostRequest {
  categoryId: number;
  skill: string;
  email: string;
}
export default function RequestLecture() {
  const [postData, setPostData] = useState<IPostRequest>({
    categoryId: 0,
    skill: "",
    email: "",
  });
  const [lecture, setLecture] = useState("");
  const [email, setEmail] = useState("");
  const [categorySelected, setCategorySelected] = useState("");
  const [typeFilled, setTypeFilled] = useState(false);
  const [emailFilled, setEmailFilled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const getData = useRecoilValue(lectureCategoryState);
  const isBlank = (): boolean => {
    if (categorySelected === "" || lecture === "" || email === "") return true;

    return false;
  };

  useEffect(() => {
    const temp = { ...postData };

    if (categorySelected) {
      getData?.map((data: LectureCategoryData) => {
        if (data.categoryName?.includes(categorySelected) === true) {
          if (data.id) {
            temp["categoryId"] = data.id;
          }
        }
      });
    }
    if (lecture) {
      temp["skill"] = lecture;
    }
    if (email) {
      temp["email"] = email;
    }
    setPostData(temp);
  }, [lecture, email]);
  const submitRequest = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (isBlank()) {
      e.preventDefault();

      return;
    }
    await postLectureRequest(postData);
    setCategorySelected("");
    setLecture("");
    setEmail("");
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <StyledRoot>
      <Wrapper>
        <Title>
          <h2>강의 비교 요청</h2>
          <p>이런 강의도 비교해주세요!</p>
        </Title>
        <RequestCard>
          <form>
            <LectureCategory
              categorySelected={categorySelected}
              setCategorySelected={setCategorySelected}
            />
            <LectureType setTypeFilled={setTypeFilled} setLecture={setLecture} lecture={lecture} />
            <Email setEmailFilled={setEmailFilled} setEmail={setEmail} email={email} />
            {categorySelected !== "" && typeFilled === true && emailFilled === true ? (
              <ActiveRequestButton type="button" onClick={submitRequest}>
                <p>강의비교 요청하기</p>
              </ActiveRequestButton>
            ) : (
              <DisabledRequestButton>
                <p>강의비교 요청하기</p>
              </DisabledRequestButton>
            )}
          </form>
        </RequestCard>
        <Modal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          mainText="비교요청이 완료되었어요."
          subText="100명의 요청이 모이면 메일로 비교 정보를 보내드릴게요."
        />
      </Wrapper>
    </StyledRoot>
  );
}
