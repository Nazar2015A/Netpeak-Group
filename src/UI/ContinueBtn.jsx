import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import { MyAppContext } from "../context/Context";

const ContinueBtn = ({
  pathname,
  height = null,
  currentHeight = null,
  activeBtn = null,
  selectedBehaviours = null,
}) => {
  const { setSelectedInfo } = useContext(MyAppContext);
  const navigate = useNavigate();
  const handleNavigate = () => {
    if (height && activeBtn === "imperial") {
      setSelectedInfo((prev) => ({
        ...prev,
        imperialHeight: height,
        imperialCurrentHeight: currentHeight,
      }));
    }
    if (height && activeBtn === "metric") {
      setSelectedInfo((prev) => ({
        ...prev,
        metricHeight: height,
        metricCurrentHeight: currentHeight,
      }));
    }
    if (selectedBehaviours?.length !== 0) {
      setSelectedInfo((prev) => ({ ...prev, behaviours: selectedBehaviours }));
    }
    navigate(pathname);
  };
  return (
    <StyledContinueBtn onClick={handleNavigate}>Continue</StyledContinueBtn>
  );
};
ContinueBtn.propTypes = {
  pathname: PropTypes.string.isRequired,
  height: PropTypes.string,
  currentHeight: PropTypes.string,
  activeBtn: PropTypes.string,
  selectedBehaviours: PropTypes.array,
};
const StyledContinueBtn = styled.button`
  width: 100%;
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0.20000000298023224px;
  text-align: center;
  background: #5fcb3933;
  color: #ffffff;
  border-radius: 10px;
  padding: 10px 36px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #86d56a;
  }
`;
export default ContinueBtn;
