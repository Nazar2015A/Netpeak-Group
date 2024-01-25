import React from "react";
import styled from "styled-components";
import foodMentorImg from "../../assets/img/foodMentorImg.png";
import { useNavigate } from "react-router-dom";
import left from "../../assets/img/left.svg";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <StyledNavbar data-testid="navbar">
      <StyledImg src={left} alt="Left Icon" onClick={() => navigate(-1)} />
      <StyledMentorImg src={foodMentorImg} alt="Food Mentor Image" />
      <StyledTitle>Food Mentor</StyledTitle>
    </StyledNavbar>
  );
};
const StyledNavbar = styled.header`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled.h2`
  color: #374234;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.025em;
  margin-left: 10px;
`;
const StyledImg = styled.img`
  width: 35px;
  height: 35px;
  cursor: pointer;
  padding: 10px 12px;
  border-radius: 5px;
  margin-right: 18px;
  transition: all 0.3s;

  &:hover {
    background: #eeeeee;
  }
`;
const StyledMentorImg = styled.img`
  width: 33px;
  height: 33px;
`;
export default Navbar;
