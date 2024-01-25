import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import ContinueBtn from "../../UI/ContinueBtn";

const MeasureYourself = () => {
  const [activeBtn, setActiveBtn] = useState("imperial");
  const [isOpenedDropDown, setIsOpenedDrowDown] = useState(true);
  const [height, setHeight] = useState("");
  const [currentHeight, setCurrentHeight] = useState("");

  const handleMeasureChange = (measureType) => {
    setActiveBtn(measureType);
    if (activeBtn === measureType) {
      setIsOpenedDrowDown((prev) => !prev);
    } else if (!isOpenedDropDown && activeBtn !== measureType) {
      setIsOpenedDrowDown(true);
    }
  };

  return (
    <StyledSection
      data-testid="measure-yourself-page"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <StyledMeasureDiv>
        <StyledMeasureBtns
          data-testid="imperial-btn"
          onClick={() => handleMeasureChange("imperial")}
          active={activeBtn === "imperial"}
        >
          Imperial
        </StyledMeasureBtns>
        <StyledMeasureBtns
          data-testid="metric-btn"
          onClick={() => handleMeasureChange("metric")}
          active={activeBtn === "metric"}
        >
          Metric
        </StyledMeasureBtns>
        <AnimatePresence>
          {isOpenedDropDown && (
            <StyledDropDown
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <StyledInput
                data-testid="height-input"
                type="number"
                placeholder={`Height(${activeBtn === "imperial" ? "ft" : "m"})`}
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
              <StyledInput
                data-testid="currentHeight-input"
                type="number"
                placeholder={`Current Height(${
                  activeBtn === "imperial" ? "ft" : "m"
                })`}
                value={currentHeight}
                onChange={(e) => setCurrentHeight(e.target.value)}
              />
            </StyledDropDown>
          )}
        </AnimatePresence>
      </StyledMeasureDiv>
      <StyledContent>
        <StyledContentHeading1>Measure Yourself</StyledContentHeading1>
        <StyledContentParagraph>
          What are your height and body weight?
        </StyledContentParagraph>
        <ContinueBtn
          pathname="/female/destructive-behaviour"
          height={height}
          currentHeight={currentHeight}
          activeBtn={activeBtn}
        />
      </StyledContent>
    </StyledSection>
  );
};

const StyledSection = styled(motion.section)`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledMeasureDiv = styled.div`
  position: relative;
  display: flex;
  border-radius: 10px;
  border: 1px solid #5fcb39;
  margin-bottom: 130px;
`;

const StyledMeasureBtns = styled(({ active, ...rest }) => <button {...rest} />)`
  text-transform: uppercase;
  cursor: pointer;
  padding: 10px 36px;
  font-size: 12px;
  font-weight: 800;
  line-height: 15px;
  letter-spacing: 2.5px;
  text-align: center;
  background: transparent;
  color: #5fcb39;
  transition: all 0.3s;

  ${({ active }) =>
    active &&
    `
  background: #5FCB3933;
`}

  @media (max-width: 400px) {
    padding: 10px 30px;
  }
`;
const StyledDropDown = styled(motion.div)`
  position: absolute;
  width: 100%;
  top: 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const StyledInput = styled.input`
  width: 100%;
  padding: 20px 15px;
  border-radius: 10px;
  border: 1px solid #ddd;
  transition: all 0.3s;

  &:hover {
    border: 1px solid #a9a8a8;
  }
  &:focus {
    border: 1px solid #908e8e;
  }
`;
const StyledContent = styled.div``;
const StyledContentHeading1 = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0.25px;
  text-align: center;
  color: #2d3436;
  margin-bottom: 10px;
`;
const StyledContentParagraph = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.25px;
  text-align: center;
  color: #616161;
  margin-bottom: 115px;
`;
export default MeasureYourself;
