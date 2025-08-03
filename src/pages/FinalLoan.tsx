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

export default function FinalPaymentLoan() {
  const navigate = useNavigate();

  return (
    <Container
      as={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Content>
        <Title>잔금납입을 준비해봐요!</Title>
        <Subtitle>개인 DSR에 따라 상이해요.</Subtitle>

        <Subtitle style={{ fontWeight: 600, marginBottom: 16 }}>
          잔납납금을 위한 대출을 추천해드려요!
        </Subtitle>

        <LoanCard
          title="내집마련 디딤돌대출"
          details={[
            "가입대상: 세대주포함 세대원 전원이 무주택",
            "대출한도: 2.4억원 (생애최초), 3.2억원 (신혼가구, 다자녀)",
          ]}
        />

        <LoanCard
          title="신한주택대출 (아파트)"
          details={["가입대상: 만 19세 이상", "대출기간: 50년"]}
          highlight="우대 금리 최대 1.4%"
        />
      </Content>

      <NextButton onClick={() => navigate("/finish")}>다음</NextButton>
    </Container>
  );
}
