import React from "react";
import styled from "styled-components";
const LoadingWrapper = styled.div`
  min-height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoadingImage = styled.img`
  width: 200px;
  max-width: 80%;
  margin-bottom: 1.5rem;
`;

const LoadingText = styled.div`
  font-size: 1.1rem;
  color: #3578ff;
  text-align: center;
`;

export default function LoadingView() {
  return (
    <LoadingWrapper>
      <LoadingImage src="/finish_all.png" alt="로딩 이미지" />
      <LoadingText>잠시만 기다려주세요</LoadingText>
    </LoadingWrapper>
  );
}
