import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { cart } from "./TheGoal-data";

const TheGoalCart = () => {
  const navigate = useNavigate();
  return (
    <StyledDiv>
      {cart.map((cartItem) => (
        <StyledCartDiv
          key={cartItem.id}
          onClick={() => navigate("/female/measure-yourself")}
        >
          <StyledCartHeading2>{cartItem.title}</StyledCartHeading2>
          <StyledImg src={cartItem.img} alt="" />
        </StyledCartDiv>
      ))}
    </StyledDiv>
  );
};
const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;
const StyledCartDiv = styled.div`
  cursor: pointer;
  width: 171px;
  height: 171px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  border-radius: 21px;
  border: 1.04px solid #e1e1e1;
  background: linear-gradient(213.67deg, #f1f1f1 12.33%, #ffffff 69.93%),
    linear-gradient(0deg, #e1e1e1, #e1e1e1);
`;
const StyledCartHeading2 = styled.h2`
  font-size: 17px;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: 0.20848487317562103px;
  text-align: left;
  color: #2d3436;
  margin-left: 10px;
  max-width: 80px;
`;
const StyledImg = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`;
export default TheGoalCart;
