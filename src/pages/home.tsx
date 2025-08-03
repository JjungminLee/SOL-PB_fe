import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  gap: 60x;
  background-color: white;
`;

const Title = styled.div`
  text-align: center;
  font-size: 1.25rem;
  color: #666;
  margin-top: 2rem;

  b {
    display: block;
    font-size: 1.5rem;
    color: #3578ff;
    margin-top: 0.5rem;
  }
`;

const BearImage = styled.img`
  width: 180px;
  height: auto;
`;

const StartButton = styled.button`
  background-color: #3578ff;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 12px;
  padding: 0.75rem 2rem;
  cursor: pointer;
  width: 100%;
  max-width: 320px;
`;

export default function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>
        AI PB가 도와주는
        <b>청년 주택 청약</b>
      </Title>
      <BearImage src="/home_sol.png" alt="귀여운 곰" />

      <StartButton onClick={() => navigate("/input")}>시작하기</StartButton>
    </Container>
  );
}
