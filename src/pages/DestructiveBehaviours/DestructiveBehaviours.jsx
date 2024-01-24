import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import DestructiveBehavioursCart from "./DestructiveBehavioursCart";

const DestructiveBehaviours = () => {
  return (
    <StyledSection
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <StyledHeaderDiv>
        <StyledHeaderHeading1>Destructive behaviors</StyledHeaderHeading1>
        <StyledHeaderParagraph>
          We all have them! Which are yours?
        </StyledHeaderParagraph>
      </StyledHeaderDiv>
      <DestructiveBehavioursCart />
    </StyledSection>
  );
};
const StyledSection = styled(motion.section)`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledHeaderDiv = styled.div`
  margin-bottom: 15px;
`;
const StyledHeaderHeading1 = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0.25px;
  text-align: center;
  color: #2d3436;
`;
const StyledHeaderParagraph = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.25px;
  text-align: center;
  color: #616161;
`;
export default DestructiveBehaviours;
