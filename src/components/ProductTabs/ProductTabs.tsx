import { FC, useState } from "react";
import React from "react";
import styled from "styled-components";

const ProductTabsMain = styled.div`
  box-sizing: border-box;
  margin-top: 16px;

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

const ProductTabsWrapper = styled.div`
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

const ProductTabsItem = styled.div`
  box-sizing: border-box;
  margin-bottom: 16px;

  list-style: none;

  user-select: none;

  color: #212528;
  border: 2px solid #f2f2f2;
  border-radius: 3px;

  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
`;

const ProductTabsHeaderWrapper = styled.div`
  display: flex;
  align-items: center;

  box-sizing: border-box;
  padding: 16px;

  list-style: none;

  cursor: pointer;
  user-select: none;
  transition: all 0.3s ease;

  color: #212528;

  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
`;

const ContentWrapper = styled.div<{ spread: boolean }>`
  display: ${(props) => (props.spread ? "block" : "none")};

  box-sizing: border-box;
  margin-bottom: 0;
  padding: 30px 16px;

  list-style: none;

  user-select: none;

  color: #212528;
  border-top: 2px solid #f2f2f2;
  background-color: #f7f7f7;

  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
`;

const Content = styled.div`
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

const ProductTabsListIcon = styled.span`
  display: inline-block;

  box-sizing: border-box;
  width: 1.25em;
  margin-right: 8px;

  list-style: none;

  cursor: pointer;
  user-select: none;
  text-align: center;

  color: #212528;

  /* font-family: "Font Awesome 5 Free"; */
  font-size: 16px;
  font-weight: 900;
  font-style: normal;
  font-variant: normal;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  text-rendering: auto;
`;

const ProductTabsHeaderTitle = styled.span`
  flex: auto;

  box-sizing: border-box;
  margin-right: 8px;
  margin-bottom: 0;

  list-style: none;

  cursor: pointer;
  user-select: none;
  letter-spacing: 0.5px;
  text-transform: initial;

  color: #212528;

  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
`;

const ReviewBadge = styled.div`
  box-sizing: border-box;
  margin-right: 8px;
  margin-left: auto;

  list-style: none;

  cursor: pointer;
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
  box-sizing: border-box;
  margin-right: 8px;
  margin-left: auto;

  list-style: none;

  cursor: pointer;
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

const StarRating = styled.span`
  box-sizing: border-box;
  margin: 0 3px 0 0;

  list-style: none;

  cursor: pointer;
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

const Star = styled.i`
  position: relative;
  top: 1px;

  box-sizing: border-box;
  width: 1.3em;
  height: 1.3em;

  list-style: none;

  cursor: pointer;
  user-select: none;

  opacity: 0.6;
  color: #212528;

  font-family: Roboto, sans-serif;
  font-size: 100%;
  font-weight: 400;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
`;

const SprBadgeCaption = styled.span`
  box-sizing: border-box;

  list-style: none;

  cursor: pointer;
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

const Image = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: block;

  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;

  list-style: none;

  user-select: none;
  text-align: center !important;

  color: #212528;
  border: 0 none;
  border-radius: 3px;

  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
`;

const ImageWrapper = styled.div`
  position: relative;

  box-sizing: border-box;
  margin-bottom: 0;
  padding-top: 66.69921875%;

  list-style: none;

  user-select: none;
  text-align: center !important;

  color: #212528;

  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
`;

export const ProductTabs: FC = () => {
  const [Details, setDetails] = useState(false);
  const [Reviews, setReviews] = useState(false);
  const [RichText, setRichText] = useState(false);
  return (
    <ProductTabsMain>
      <ProductTabsWrapper>
        <ProductTabsItem>
          <ProductTabsHeaderWrapper
            onClick={() => {
              setDetails(!Details);
              setReviews(false);
              setRichText(false);
            }}
          >
            <ProductTabsListIcon></ProductTabsListIcon>
            <ProductTabsHeaderTitle>Details</ProductTabsHeaderTitle>
          </ProductTabsHeaderWrapper>
          <ContentWrapper spread={Details}>
            <Content>
              Walk the line between dress and casual and add these smart
              sneakers to your rotation. With their simple soles, a heritage
              stripe and perfect fit, you'll wear them all year round.
            </Content>
          </ContentWrapper>
        </ProductTabsItem>
        <ProductTabsItem>
          <ProductTabsHeaderWrapper
            onClick={() => {
              setDetails(false);
              setReviews(!Reviews);
              setRichText(false);
            }}
          >
            <ProductTabsListIcon></ProductTabsListIcon>
            <ProductTabsHeaderTitle>Reviews</ProductTabsHeaderTitle>
            <ReviewBadge>
              <SprBadge>
                <StarRating>
                  <Star></Star>
                  <Star></Star>
                  <Star></Star>
                  <Star></Star>
                  <Star></Star>
                </StarRating>
                <SprBadgeCaption>No reviews</SprBadgeCaption>
              </SprBadge>
            </ReviewBadge>
          </ProductTabsHeaderWrapper>
          <ContentWrapper spread={Reviews}>
            <Content></Content>
          </ContentWrapper>
        </ProductTabsItem>

        <ProductTabsItem>
          <ProductTabsHeaderWrapper
            onClick={() => {
              setDetails(false);
              setReviews(false);
              setRichText(!RichText);
            }}
          >
            <ProductTabsListIcon></ProductTabsListIcon>
            <ProductTabsHeaderTitle>Rich text</ProductTabsHeaderTitle>
          </ProductTabsHeaderWrapper>
          <ContentWrapper spread={RichText}>
            <Content>
              <ImageWrapper>
                <Image src="//cdn.shopify.com/s/files/1/0108/0999/9419/files/happy-playful-young-man_300x300.jpg?v=1564205002"></Image>
              </ImageWrapper>
            </Content>
          </ContentWrapper>
        </ProductTabsItem>
      </ProductTabsWrapper>
    </ProductTabsMain>
  );
};
