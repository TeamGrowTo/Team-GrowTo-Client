import {
  getLectureFindNumber,
  getLectureRequestNumber,
  getLectureTotalNumber,
} from "apis/count.api";
import Modal from "components/common/Modal";
import ReportSection from "components/main/MainReport/ReportSection";
import Image from "next/image";
import {
  FindIcon,
  FindIcon_mobile,
  ReportLine,
  ReportLine_mobile,
  RequestIcon,
  RequestIcon_mobile,
  TotalIcon,
  TotalIcon_mobile,
} from "public/assets/icons";
import { GrowtoLogo } from "public/assets/images";
import React, { useEffect, useState } from "react";
import Screen from "styles/Screen";

import { ShareBox } from "../Share/style";
import {
  ButtonWrapper,
  LineWrapper,
  Logo,
  ReportBox,
  ShareButton,
  StyledRoot,
  Wrapper,
} from "./style";
export default function MainReport() {
  const [totalNumber, setTotalNumber] = useState(0);
  const [findNumber, setFindNumber] = useState(0);
  const [requestNumber, setRequestNumber] = useState(0);

  const ReportNumber = async () => {
    const nowTotalNumber = await getLectureTotalNumber();
    const nowFindNumber = await getLectureFindNumber();
    const nowRequestNumber = await getLectureRequestNumber();

    nowTotalNumber && setTotalNumber(nowTotalNumber);
    nowFindNumber && setFindNumber(nowFindNumber);
    nowRequestNumber && setRequestNumber(nowRequestNumber);
  };

  useEffect(() => {
    ReportNumber();
  }, []);

  const TotalCompare = {
    Icon: TotalIcon,
    mobileIcon: TotalIcon_mobile,
    title: "총 비교 강의",
    count: totalNumber,
    unit: "개",
  };
  const CustomSearch = {
    Icon: FindIcon,
    mobileIcon: FindIcon_mobile,
    title: "맞춤 강의 찾기",
    count: findNumber,
    unit: "회",
  };
  const RequestCompare = {
    Icon: RequestIcon,
    mobileIcon: RequestIcon_mobile,
    title: "비교 요청",
    count: requestNumber,
    unit: "건",
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const shareUrl = async () => {
    try {
      await navigator.clipboard.writeText(
        "https://www.growto.kr/?utm_source=Growto&utm_medium=share&utm_campaign=share",
      );
      setIsModalOpen(true);
      document.body.style.overflow = "hidden";
    } catch {
      alert("복사 실패!");
    }
  };

  return (
    <StyledRoot>
      <Wrapper>
        <ReportBox>
          <ReportSection reportInfo={TotalCompare} />
          <LineWrapper>
            <Screen desktop>
              <ReportLine />
            </Screen>
            <Screen mobile>
              <ReportLine_mobile />
            </Screen>
          </LineWrapper>
          <ReportSection reportInfo={CustomSearch} />
          <LineWrapper>
            <Screen desktop>
              <ReportLine />
            </Screen>
            <Screen mobile>
              <ReportLine_mobile />
            </Screen>
          </LineWrapper>
          <ReportSection reportInfo={RequestCompare} />
        </ReportBox>
        <ShareBox>
          <ButtonWrapper>
            <Image src={GrowtoLogo} alt="그로투" />
            <p>가 필요한 친구에게</p>
            <ShareButton onClick={shareUrl}>공유하기</ShareButton>
          </ButtonWrapper>
        </ShareBox>
        <Modal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          mainText="공유 링크가 복사 되었어요 ☺️"
          subText="모두가 편하게 강의를 찾을 수 있도록 주변에 알려주세요."
        />
      </Wrapper>
    </StyledRoot>
  );
}
