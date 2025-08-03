import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Container = styled.div`
  padding: 2rem 1.5rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: white;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  color: #111;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const ChoiceButton = styled.button<{ selected?: boolean }>`
  flex: 1;
  padding: 0.8rem;
  border: 1.5px solid #3578ff;
  background-color: ${({ selected }) => (selected ? "#3578ff" : "white")};
  color: ${({ selected }) => (selected ? "white" : "#3578ff")};
  border-radius: 12px;
  font-size: 1rem;
  cursor: pointer;
`;

const LoanWrapper = styled(motion.div)`
  margin-top: 2rem;
`;

const LoanCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const Label = styled.div`
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 0.2rem;
`;

const Highlight = styled.span`
  color: #3578ff;
  font-weight: bold;
`;

const NextButton = styled.button`
  width: 100%;
  margin-top: 2rem;
  padding: 1rem;
  font-size: 1rem;
  color: white;
  background-color: #3578ff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

export default function DepositQuestion() {
  const [hasCash, setHasCash] = useState<boolean | null>(null);
  const navigate = useNavigate();

  return (
    <Container>
      <div>
        <Title>
          계약금의 20%를
          <br />
          현금으로 보유하고 있으신가요?
        </Title>

        <ButtonGroup>
          <ChoiceButton
            selected={hasCash === true}
            onClick={() => setHasCash(true)}
          >
            네
          </ChoiceButton>
          <ChoiceButton
            selected={hasCash === false}
            onClick={() => setHasCash(false)}
          >
            아니오
          </ChoiceButton>
        </ButtonGroup>

        <AnimatePresence>
          {hasCash === false && (
            <LoanWrapper
              key="loanSection"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
            >
              <p
                style={{
                  marginTop: "1.5rem",
                  marginBottom: "1rem",
                  fontWeight: "bold",
                }}
              >
                계약금이 없다면 대출을 추천해드려요!
              </p>

              <LoanCard>
                <Label>
                  <b>예금담보대출</b>
                </Label>
                <Label>가입대상: 본인 명의 예금 보유자</Label>
                <Label>대출한도: 2억 원</Label>
                <Label>
                  <Highlight>최저 1.0%</Highlight>
                </Label>
              </LoanCard>

              <LoanCard>
                <Label>
                  <b>신한주택대출 (아파트)</b>
                </Label>
                <Label>가입대상: 만 19세 이상</Label>
                <Label>대출기간: 50년</Label>
                <Label>
                  <Highlight>우대 금리 최대 1.4%</Highlight>
                </Label>
              </LoanCard>
            </LoanWrapper>
          )}
        </AnimatePresence>
      </div>

      <NextButton onClick={() => navigate("/installment-loan")}>
        다음
      </NextButton>
    </Container>
  );
}
