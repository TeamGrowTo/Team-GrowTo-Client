import {
  MainReviewProfile1,
  MainReviewProfile1_mobile,
  MainReviewProfile2,
  MainReviewProfile2_mobile,
  MainReviewProfile3,
  MainReviewProfile3_mobile,
  MainReviewProfile4,
  MainReviewProfile4_mobile,
  MainReviewProfile5,
  MainReviewProfile5_mobile,
  MainReviewProfile6,
  MainReviewProfile6_mobile,
} from "public/assets/images";
import React from "react";

import Review from "./Review";
import { ReviewList, StyledRoot, Title, Wrapper } from "./style";

export default function MainReview() {
  const reviewInfo = [
    {
      comment:
        "새로운 강의를 들을 때마다 애용하고 있어요 ㅎㅎ 강의를 찾는게 일이었는데, 이제는 덕분에 비교해서 듣네요.",
      Profile: MainReviewProfile1,
      MobileProfile: MainReviewProfile1_mobile,
      nickname: "사회초년생 개발자",
      id: "jay2kxxx",
      isTransparent: true,
      isTransparentMobile: true,
    },
    {
      comment:
        "항상 강의를 듣고 싶을 때 일일히 찾고 비교하기가 귀찮았는데 대신 비교해주니 너무 좋아요!",
      Profile: MainReviewProfile2,
      MobileProfile: MainReviewProfile2_mobile,
      nickname: "2년차 디자이너",
      id: "yoonsxxx",
      isTransparent: false,
      isTransparentMobile: false,
    },
    {
      comment:
        "진짜 시간이랑 돈을 아껴주는 서비스. 개발 강의를 찾을 때 기대 안하고 한번 사용해봤는데 너무 좋았음",
      Profile: MainReviewProfile3,
      MobileProfile: MainReviewProfile3_mobile,
      nickname: "3년차 개발자",
      id: "ryu19xxx",
      isTransparent: true,
      isTransparentMobile: false,
    },
    {
      comment:
        "강의 찾기에 급급했고, 상세페이지 하나 읽어보려고 하면 머리 아팠는데 이렇게 정리해서 보여주니까 정말 편하네요",
      Profile: MainReviewProfile4,
      MobileProfile: MainReviewProfile4_mobile,
      nickname: "취업준비생 데이터사이언티스트",
      id: "v2tmexxx",
      isTransparent: false,
      isTransparentMobile: true,
    },
    {
      comment:
        "어떤 강의 들으면 좋을까요? 라는요청을 후배들한테 많이 받곤 하는데, 그로투를 추천해주면 딱 이네요.",
      Profile: MainReviewProfile5,
      MobileProfile: MainReviewProfile5_mobile,
      nickname: "6년차 마케터",
      id: "alphaxxx",
      isTransparent: true,
      isTransparentMobile: true,
    },
    {
      comment:
        "취준 불안감에 광고 나오는 강의를 무작정 결제해서 후회했던 경험이 있는데, 이렇게 비교해서 봤더라면 무지성 결제를 막을 수 있었을 듯ㅠㅠ",
      Profile: MainReviewProfile6,
      MobileProfile: MainReviewProfile6_mobile,
      nickname: "취업준비생 기획자",
      id: "re_recxxx",
      isTransparent: false,
      isTransparentMobile: false,
    },
  ];

  return (
    <StyledRoot>
      <Wrapper>
        <Title>
          <h2>그로투러들의 생생한 후기</h2>
          <hgroup>*그로투 이메일 & DM 으로 보내주신 메시지 기반</hgroup>
        </Title>
        <ReviewList>
          {reviewInfo.map((review) => (
            <Review review={review} key={review.id} />
          ))}
        </ReviewList>
      </Wrapper>
    </StyledRoot>
  );
}
