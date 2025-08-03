import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../store/useStore";
import styled from "styled-components";

const Container = styled.div`
  padding: 2rem;
`;
const Title = styled.h2`
  font-size: 1.2rem;
`;
const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;
const Button = styled.button<{ selected?: boolean }>`
  padding: 0.5rem 1rem;
  border: 1px solid #0077ff;
  background: ${({ selected }) => (selected ? "#0077ff" : "white")};
  color: ${({ selected }) => (selected ? "white" : "#0077ff")};
  border-radius: 8px;
  cursor: pointer;
`;

const NextButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid #0077ff;
  background: #0077ff;
  color: white;
  width: 100%;
  border-radius: 8px;
  cursor: pointer;
`;
export default function Input() {
  const navigate = useNavigate();
  const {
    isHomeless,
    isMarried,
    marriageYears,
    childrenCount,
    setValue,
    isHouseholder,
    hasAccount,
    hasHouseHistory,
  } = useUserStore();

  return (
    <Container>
      <Title>
        정보를 입력 받아
        <br />
        내집 마련 전략을 알려드릴게요!
      </Title>

      <p>무주택 여부</p>
      <ButtonGroup>
        <Button
          selected={isHomeless === true}
          onClick={() => setValue("isHomeless", true)}
        >
          네
        </Button>
        <Button
          selected={isHomeless === false}
          onClick={() => setValue("isHomeless", false)}
        >
          아니오
        </Button>
      </ButtonGroup>

      <p>결혼 여부</p>
      <ButtonGroup>
        <Button
          selected={isMarried === true}
          onClick={() => setValue("isMarried", true)}
        >
          네
        </Button>
        <Button
          selected={isMarried === false}
          onClick={() => setValue("isMarried", false)}
        >
          아니오
        </Button>
      </ButtonGroup>

      <p>결혼 기간</p>
      <input
        value={marriageYears}
        onChange={(e) => setValue("marriageYears", e.target.value)}
        placeholder="7년"
      />

      <p>자녀수</p>
      <input
        value={childrenCount}
        onChange={(e) => setValue("childrenCount", e.target.value)}
        placeholder="2명"
      />

      <p>세대주 여부</p>
      <ButtonGroup>
        <Button
          selected={isHouseholder === true}
          onClick={() => setValue("isHouseholder", true)}
        >
          네
        </Button>
        <Button
          selected={isHouseholder === false}
          onClick={() => setValue("isHouseholder", false)}
        >
          아니오
        </Button>
      </ButtonGroup>

      <p>청약통장 가입 여부</p>
      <ButtonGroup>
        <Button
          selected={hasAccount === true}
          onClick={() => setValue("hasAccount", true)}
        >
          네
        </Button>
        <Button
          selected={hasAccount === false}
          onClick={() => setValue("hasAccount", false)}
        >
          아니오
        </Button>
      </ButtonGroup>

      <p>주택 소유 이력</p>
      <ButtonGroup>
        <Button
          selected={hasHouseHistory === true}
          onClick={() => setValue("hasHouseHistory", true)}
        >
          네
        </Button>
        <Button
          selected={hasHouseHistory === false}
          onClick={() => setValue("hasHouseHistory", false)}
        >
          아니오
        </Button>
      </ButtonGroup>

      <NextButton onClick={() => navigate("/schedule")}>다음</NextButton>
    </Container>
  );
}
