import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { DestructiveBehavioursCartItem } from "./DestructiveBehaviours-data";
import ContinueBtn from "../../UI/ContinueBtn";

const DestructiveBehavioursCart = () => {
  const [cartItems, setCartItems] = useState(DestructiveBehavioursCartItem);

  const handleCartItemClick = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, active: !item.active } : item
      )
    );
  };
  const selectedBehaviours = useMemo(() => {
    return cartItems.filter((item) => item.active).map((item) => item.title);
  }, [cartItems]);

  return (
    <StyledDiv>
      <StyledContent>
        {cartItems.map((cartItem) => (
          <StyledCartItem
            key={cartItem.id}
            active={cartItem.active}
            onClick={() => handleCartItemClick(cartItem.id)}
          >
            <StyledCartItemImg
              src={cartItem.img}
              alt={`Cart Item ${cartItem.title}`}
            />
            <StyledCartItemParagraph>{cartItem.title}</StyledCartItemParagraph>
          </StyledCartItem>
        ))}
      </StyledContent>
      <ContinueBtn
        pathname="/female/physical-exercise"
        selectedBehaviours={selectedBehaviours}
      />
    </StyledDiv>
  );
};
const StyledDiv = styled.div`
  @media (max-width: 400px) {
    margin: 0 10px;
  }
`;
const StyledContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-bottom: 130px;
`;
const StyledCartItem = styled(({ active, ...rest }) => <div {...rest} />)`
  height: 60px;
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
const StyledCartItemImg = styled.img`
  margin-right: 10px;
`;
const StyledCartItemParagraph = styled.p`
  max-width: 93px;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.30000001192092896px;
  text-align: left;
  color: #2d3436;
  @media (max-width: 400px) {
    max-width: auto;
  }
`;
export default DestructiveBehavioursCart;
