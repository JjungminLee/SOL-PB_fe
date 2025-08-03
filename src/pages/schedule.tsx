import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  padding: 2rem 1.5rem;
  background-color: white;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
`;

const CalendarBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
  gap: 1rem;
`;

const CharImage = styled.img`
  width: 80px;
  height: auto;
`;

const TextBox = styled.div`
  font-size: 0.95rem;
  color: #333;
  line-height: 1.4;
`;

const SubscribeButton = styled.button`
  margin-top: 1.5rem;
  padding: 0.75rem;
  width: 100%;
  font-size: 1rem;
  color: #3578ff;
  border: 1.5px solid #3578ff;
  border-radius: 10px;
  background-color: white;
  cursor: pointer;
`;

const NextButton = styled.button`
  margin-top: 2rem;
  padding: 1rem;
  width: 100%;
  font-size: 1rem;
  color: white;
  background-color: #3578ff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

export default function Schedule() {
  const navigate = useNavigate();

  return (
    <Container>
      <div>
        <Title>청약지원을 하러 가볼까요?</Title>

        <CalendarBox>
          <CharImage
            src="/schedule_moly.png"
            alt="물리 캐릭터"
            width={90}
            height={110}
          />
          <TextBox>
            물리가 수집한 <br />
            청약 일정을 줍줍해 가세요!
          </TextBox>
        </CalendarBox>

        <SubscribeButton
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/calendar.ics";
            link.download = "청약일정.ics";
            link.click();
          }}
        >
          내 캘린더에 구독하기
        </SubscribeButton>
      </div>
      <NextButton onClick={() => navigate("/strategy")}>다음</NextButton>
    </Container>
  );
}
