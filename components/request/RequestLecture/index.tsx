import Modal from "components/common/Modal";
// import { postLectureRequest } from "pages/apis/lectures.api";
import React, { useState } from "react";

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

export default function RequestLecture() {
  const [categorySelected, setCategorySelected] = useState("");
  const [typeFilled, setTypeFilled] = useState(false);
  const [emailFilled, setEmailFilled] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const submitRequest = async () => {
    try {
      // await postLectureRequest();
      setIsModalOpen(true);
      document.body.style.overflow = "hidden";
    } catch {
      alert("요청 실패!");
    }
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
            <LectureType setTypeFilled={setTypeFilled} />
            <Email setEmailFilled={setEmailFilled} />
            {categorySelected !== "" && typeFilled === true && emailFilled === true ? (
              <ActiveRequestButton onClick={submitRequest}>
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
