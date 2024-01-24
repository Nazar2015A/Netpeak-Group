import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import activeGirl from "../../assets/img/activeGirl.png";
import { physicalExerciseItem } from "./PhysicalExercise-data";
import { MyAppContext } from "../../context/Context";

const PhysicalExerciseCart = () => {
  const { setSelectedInfo } = useContext(MyAppContext);
  const [cartItems, setCartItems] = useState(physicalExerciseItem);

  const handleCartItemClick = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? { ...item, active: !item.active }
          : { ...item, active: false }
      )
    );
  };

  useEffect(() => {
    const physicalExerciseChoosed = cartItems.find(
      (item) => item.active
    )?.title;
    setSelectedInfo((prev) => ({
      ...prev,
      physicalExercise: physicalExerciseChoosed,
    }));
  }, [cartItems]);

  return (
    <StyledDiv>
      <StyledImg src={activeGirl} alt="Active Girl" />
      <StyledContent>
        {cartItems.map((exercise) => (
          <StyledCartItem
            onClick={() => handleCartItemClick(exercise.id)}
            key={exercise.id}
            active={exercise.active}
          >
            <StyledCartItemParagraph>{exercise.title}</StyledCartItemParagraph>
          </StyledCartItem>
        ))}
      </StyledContent>
    </StyledDiv>
  );
};
const StyledDiv = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 400px) {
    flex-direction: column;
    align-items: center;
  }
`;
const StyledImg = styled.img`
  width: 175px;
  height: 365px;
`
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 400px) {
    gap: 20px;
  }
`;
const StyledCartItem = styled(({ active, ...rest }) => <div {...rest} />)`
  height: 80px;
  padding: 0 24px 0 12px;
  border: 1px solid #e1e1e1;
  border-radius: 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;

  ${(props) =>
    props.active &&
    `
      background: #eeeeee;
  `}
`;
const StyledCartItemParagraph = styled.p`
  max-width: 120px;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.20000000298023224px;
  text-align: left;
  color: #2d3436;
`;
export default PhysicalExerciseCart;
