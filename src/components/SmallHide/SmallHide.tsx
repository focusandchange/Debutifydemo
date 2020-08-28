import { FC } from "react";
import React from "react";
import styled from "styled-components";
// import "../node_modules/font-awesome/css/font-awesome.min.css";

const SmallHideMain = styled.div`
  box-sizing: border-box;

  list-style: none;

  user-select: none;

  color: #212528;

  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
`;

const ProductSingleTitle = styled.h1`
  display: block;

  box-sizing: border-box;
  margin-top: 0;
  margin-bottom: 12px;

  list-style: none;

  user-select: none;
  letter-spacing: 0;
  text-transform: initial;

  color: #212528;

  font-family: Oswald, sans-serif;
  font-size: 60px;
  font-weight: 700;
  font-style: normal;
  line-height: 1.2;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
`;

const ReviewBadge = styled.div`
  box-sizing: border-box;
  margin-bottom: 16px;

  list-style: none;

  user-select: none;

  color: #212528;

  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
`;

const SprBadge = styled.span`
  display: block;

  box-sizing: border-box;
  min-width: auto;
  min-height: auto;

  list-style: none;

  user-select: none;

  color: #212528;

  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
`;

const SprStarRating = styled.span`
  -webkit-box-sizing: border-box;
  margin: 0 3px 0 0;

  list-style: none;

  user-select: none;

  color: #212528;

  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
`;

const SprBadgeCaption = styled.span`
  -webkit-box-sizing: border-box;

  list-style: none;

  user-select: none;

  color: #212528;

  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
`;

const SprIconSprIconStarEmpty = styled.i`
  position: relative;
  top: 1px;

  -webkit-box-sizing: border-box;
  width: 1.3em;
  height: 1.3em;

  list-style: none;

  user-select: none;

  opacity: 0.6;
  color: #212528;

  font-family: Roboto, sans-serif;
  font-size: 100%;
  font-weight: 400;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;

  ::before {
    display: inline-block;

    width: 1em;

    content: "\\e801";

    text-align: center;
    text-decoration: inherit;
    text-transform: none;

    font-family: "font-awesome-stars";
    font-size: 120%;
    font-weight: normal;
    font-style: normal;
    font-variant: normal;
    line-height: 1em;
    speak: none;
  }
`;

// interface SmallHideProp {

// }

export const SmallHide: FC = () => {
  return (
    <SmallHideMain>
      <ProductSingleTitle>Mx.0</ProductSingleTitle>
      <ReviewBadge>
        <SprBadge>
          <SprStarRating>
            <SprIconSprIconStarEmpty></SprIconSprIconStarEmpty>
            <SprIconSprIconStarEmpty></SprIconSprIconStarEmpty>
            <SprIconSprIconStarEmpty></SprIconSprIconStarEmpty>
            <SprIconSprIconStarEmpty></SprIconSprIconStarEmpty>
            <SprIconSprIconStarEmpty></SprIconSprIconStarEmpty>
          </SprStarRating>
          <SprBadgeCaption>No reviews</SprBadgeCaption>
        </SprBadge>
      </ReviewBadge>
    </SmallHideMain>
  );
};
