import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../store/useStore";
import { getStrategy } from "../api/strategy-api";
import LoadingView from "./loadingView";

const Container = styled.div`
  padding: 2rem 1.5rem;
  min-height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const CharImage = styled.img`
  width: 56px;
  height: 56px;
`;

const Title = styled.h2`
  font-size: 1rem;
  font-weight: bold;
  color: #333;
`;

const SectionTitle = styled.h3`
  font-size: 0.95rem;
  font-weight: bold;
  color: #3578ff;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
`;

const RegionList = styled.div`
  color: #333;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: #eee;
  margin: 1.5rem 0;
`;

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 1rem;
  font-size: 0.9rem;
  color: #333;
`;

const AptName = styled.div`
  color: #3578ff;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Label = styled.div`
  margin-top: 0.3rem;
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

export default function Strategy() {
  const navigate = useNavigate();
  const {
    isHomeless,
    isMarried,
    marriageYears,
    childrenCount,
    isHouseholder,
    hasAccount,
    hasHouseHistory,
  } = useUserStore();

  const [loading, setLoading] = useState(true);
  const [strategy, setStrategy] = useState<{
    regions: string[];
    items: {
      name: string;
      date: string;
      announce: string;
      price: string;
    }[];
  }>({ regions: [], items: [] });

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const result = await getStrategy({
          isHomeless: isHomeless ?? false,
          isMarried: isMarried ?? false,
          marriageYears: Number(marriageYears ?? 0),
          childrenCount: Number(childrenCount ?? 0),
          isHouseholder: isHouseholder ?? false,
          hasAccount: hasAccount ?? false,
          hasHouseHistory: hasHouseHistory ?? false,
        });

        setStrategy(result);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };
    fetch();
  }, []);

  if (loading) return <LoadingView />;

  return (
    <Container>
      <div>
        <Header>
          <CharImage src="/strategy_pli.png" alt="AI 캐릭터" />
          <Title>
            AI가 분석한
            <br />
            청약 전략을 알려드려요
          </Title>
        </Header>

        <SectionTitle>추천 지역</SectionTitle>
        <RegionList>{strategy.regions.join("　　")}</RegionList>

        <Divider />

        <SectionTitle>청약 추천리스트</SectionTitle>
        <CardList>
          {strategy.items.map((item, idx) => (
            <Card key={idx}>
              <AptName>{item.name}</AptName>
              <Label>접수　{item.date}</Label>
              <Label>발표　{item.announce}</Label>
              <Label>분양가 {item.price}</Label>
            </Card>
          ))}
        </CardList>
      </div>

      <NextButton onClick={() => navigate("/deposit-question")}>
        다음
      </NextButton>
    </Container>
  );
}
