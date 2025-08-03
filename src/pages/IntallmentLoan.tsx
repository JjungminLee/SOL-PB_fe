import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import LoanCard from "./LoanCard";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 24px;
  box-sizing: border-box;
`;

const Content = styled.div`
  flex: 1;
  overflow-y: auto;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Subtitle = styled.div`
  font-size: 14px;
  color: #777;
  margin-bottom: 20px;
`;

const NextButton = styled.button`
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 12px;
  background: #2962ff;
  color: white;
  font-weight: bold;
  margin-top: 16px;
`;

export default function InstallmentLoan() {
  const navigate = useNavigate();

  return (
    <Container
      as={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Content>
        <Title>중도금 납부를 하기 위해서는 분양가의 60%이 필요해요.</Title>
        <Subtitle>잔금일 전까지 4~6회로 나누어 납부해요.</Subtitle>

        <Subtitle style={{ fontWeight: 600, marginBottom: 16 }}>
          중도금 납부를 위한 대출을 추천해드려요!
        </Subtitle>

        <LoanCard
          title="쏠편한 전세대출 (주택금융공사)"
          details={["가입대상: 무주택으로 확인된 고객", "대출한도: 4.4억원"]}
          highlight="우대금리 1.3% 이내"
        />

        <LoanCard
          title="신한주택대출 (아파트)"
          details={["가입대상: 만 19세 이상", "대출기간: 50년"]}
          highlight="우대 금리 최대 1.4%"
        />
      </Content>

      <NextButton onClick={() => navigate("/final-loan")}>다음</NextButton>
    </Container>
  );
}
