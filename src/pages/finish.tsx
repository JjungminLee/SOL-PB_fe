import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 24px;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`;

const TopSection = styled.div`
  margin-top: 60px;
`;

const Title = styled(motion.h2)`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 32px;
`;

const Image = styled(motion.img)`
  width: 80%;
  max-width: 320px;
  margin: 0 auto;
`;

const BottomSection = styled.div`
  width: 100%;
`;

const Button = styled(motion.button)`
  background-color: #3969ff;
  color: white;
  font-weight: bold;
  padding: 16px;
  border-radius: 16px;
  width: 100%;
  max-width: 100%;
  border: none;
`;

export default function HomeFinished() {
  return (
    <Container
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <TopSection>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          내 집 마련이 끝났어요!
        </Title>

        <Image
          src="/finish_all.png"
          alt="신한 캐릭터 일러스트"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.5,
            type: "spring",
            stiffness: 100,
          }}
        />
      </TopSection>

      <BottomSection>
        <Button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.3 }}
          onClick={() =>
            (window.location.href =
              "https://sol.shinhan.com/sup/common/callSupInstallService.jsp?screenid=IN04710201001")
          }
        >
          신한 SOL로 가기
        </Button>
      </BottomSection>
    </Container>
  );
}
