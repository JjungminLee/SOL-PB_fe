import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 12px;
`;

const Title = styled.div`
  font-weight: 600;
  margin-bottom: 8px;
`;

const Detail = styled.div`
  font-size: 14px;
  color: #555;
`;

interface Props {
  title: string;
  details: string[];
  highlight?: string;
}

export default function LoanCard({ title, details, highlight }: Props) {
  return (
    <Card>
      <Title>{title}</Title>
      {details.map((d, i) => (
        <Detail key={i}>{d}</Detail>
      ))}
      {highlight && (
        <div style={{ color: "#2962ff", marginTop: 8 }}>{highlight}</div>
      )}
    </Card>
  );
}
