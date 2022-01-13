import ReviewProfile from "public/assets/images/reviewProfile.svg";
import React from "react";

import Review from "./Review";
import { ReviewList, StyledRoot, Title, Wrapper } from "./style";

export default function MainReview() {
  const reviewInfo = [
    {
      comment: "불편하게 일일히 돌아다니지 않아도 되어서 너무 편해요. 고마워요!",
      Profile: ReviewProfile,
      id: "6년차 마케터 봉봉음료수짱",
    },
    {
      comment:
        "진짜 시간이랑 돈을 아껴주는 서비스. 개발 강의 찾을 때 기대 안하고 한번 사용해봤는데 너무 좋았음.",
      Profile: ReviewProfile,
      id: "6년차 마케터 봉봉음료수짱",
    },
    {
      comment:
        "새로운 강의를 들을 때마다 애용하고 있어요 ㅎㅎ 생각보다 더 편리해서 주변에 동료들에게도 알려주고 있어요.",
      Profile: ReviewProfile,
      id: "6년차 마케터 봉봉음료수짱",
    },
    {
      comment:
        "회원가입 없이 이런 서비스를 무료로 제공해주다니.. 감사합니다! 같은 직군 사람들한테 많이 전파하고 있어요!!",
      Profile: ReviewProfile,
      id: "6년차 마케터 봉봉음료수짱",
    },
    {
      comment:
        "항상 강의를 듣고 싶을 때 일일히 찾고 비교하기가 귀찮았는데 대신 비교해주니 너무 좋아요!",
      Profile: ReviewProfile,
      id: "6년차 마케터 봉봉음료수짱",
    },
    {
      comment:
        "저한테 조금이라도 더 맞는 강의를 찾을 수 있게 되어서 뿌듯해용 앞으로 더 많은 종류의 강의 비교 부탁드려요!",
      Profile: ReviewProfile,
      id: "6년차 마케터 봉봉음료수짱",
    },
  ];

  return (
    <StyledRoot>
      <Wrapper>
        <Title>
          <h2>그로투러들의 생생한 후기</h2>
          <p>그로투 이메일 & DM 으로 보내주신 메시지 기반</p>
        </Title>
        <ReviewList>
          {reviewInfo &&
            reviewInfo.map((review, comment) => {
              <Review review={review} key={comment} />;
            })}
        </ReviewList>
      </Wrapper>
    </StyledRoot>
  );
}
