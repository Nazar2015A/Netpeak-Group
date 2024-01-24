import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import TheGoalCart from "./TheGoalCart";

const TheGoal = () => {
  return (
    <StyledSection
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{opacity: 0, y: -50}}
      transition={{ duration: 0.5 }}
    >
      <StyledTopDiv>
        <StyledHeading2>The Goal</StyledHeading2>
        <StyledParagraph>
          Focus on the health benefits you need. <br></br> Balanced nutrition
          will let you achieve them{" "}
        </StyledParagraph>
      </StyledTopDiv>
      <StyledContent>
        <StyledContentHeading>What are your goals?</StyledContentHeading>
        <TheGoalCart />
      </StyledContent>
    </StyledSection>
  );
};

const StyledSection = styled(motion.section)`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const StyledTopDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 15px 0;
`;
const StyledHeading2 = styled.h2`
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0.25px;
  text-align: center;
  color: #2d3436;
`;
const StyledParagraph = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.25px;
  text-align: center;
  color: #616161;
`;
const StyledContent = styled.div``;
const StyledContentHeading = styled.h3`
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.20000000298023224px;
  text-align: center;
  color: #2d3436;
  margin-bottom: 15px;
`;

export default TheGoal;
