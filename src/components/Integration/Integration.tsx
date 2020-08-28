import { FC, useState } from "react";
import React from "react";
import styled from "styled-components";
import { Offers } from "../../components/Offers/Offers";
import { ProductPhoto } from "../../components/ProductPhoto/ProductPhoto";
import { ProductTabs } from "../../components/ProductTabs/ProductTabs";
import { SmallHide } from "../../components/SmallHide/SmallHide";
import { SocialSharing } from "../../components/SocialSharing/SocialSharing";
import data from "../../data";
const Body = styled.div`
  box-sizing: border-box;
  padding-top: 60px;
  padding-bottom: 60px;

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

const Wrapper = styled.div`
  box-sizing: border-box;
  max-width: 1150px;
  margin: 0 auto;
  padding-right: 30px;
  padding-left: 30px;

  transition: padding 0.3s ease, max-width 0.3s ease;

  color: #212528;

  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
`;

const ProductWrapper = styled.div`
  display: flex;

  box-sizing: border-box;
  width: inherit;
  margin: 0;
  margin-left: -30px;
  padding: 0;

  list-style: none;

  color: #212528;

  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
`;

const RightSectionWrapper = styled.div`
  float: left;

  box-sizing: border-box;
  width: 41.666%;
  min-height: 1px;
  padding-left: 30px;

  list-style: none;

  user-select: none;
  vertical-align: top;

  color: #212528;

  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
`;

const RightSection = styled.div`
  top: 80px;

  box-sizing: border-box;
  padding-top: 16px;

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

const ProductTags = styled.div`
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

const TextLink = styled.a`
  display: inline;

  box-sizing: border-box;
  margin: 0;
  padding: 0;

  list-style: none;

  user-select: none;
  transition: all 0.3s ease;
  text-decoration: underline !important;

  color: #5600e3;
  border: 0 none;
  outline: none !important;
  background: none;

  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
`;

export const Integration: FC = () => {
  const [productImages, setProductImages] = useState(data.product.images);
  const [productOptions, setProductOptions] = useState(data.product.options);
  const [productVariantPrice, setProductVariantPrice] = useState(
    data.product.variants[0].price
  );

  const [number, setNumber] = useState(1);
  const [src, setSrc] = useState(data.product.images[0].src);
  const onChange = (value: number) => {
    if (value > 0) {
      setNumber(value);
    }
  };

  function onChangeColor(value: number) {
    for (let i = 0; i < productImages.length; i++) {
      if (productImages[i].position == value + 1) {
        setSrc(productImages[i].src);
      }
    }
    for (let i = 0; i < data.product.variants.length; i++) {
      if (data.product.variants[i].position == value + 1) {
        setProductVariantPrice(data.product.variants[i].price);
      }
    }
  }
  function onSetSrc(value: String) {
    setSrc(value);
  }
  function onClickAddToCart() {
    console.log("AddToCart");
  }
  return (
    <Body>
      <Wrapper>
        <ProductWrapper>
          <ProductPhoto
            productImages={productImages}
            src={src}
            onSetSrc={onSetSrc}
          ></ProductPhoto>

          <RightSectionWrapper>
            <RightSection>
              <SmallHide></SmallHide>
              <Offers
                productVariantPrice={productVariantPrice}
                productOptions={productOptions}
                onChangeColor={onChangeColor}
                onClickAddToCart={onClickAddToCart}
              ></Offers>
              <ProductTabs></ProductTabs>
              <SocialSharing></SocialSharing>
              <ProductTags>
                <span>Tags: </span>
                <TextLink href="https://debutifydemo.myshopify.com/collections/all/textile">
                  Textile
                </TextLink>
              </ProductTags>
            </RightSection>
          </RightSectionWrapper>
        </ProductWrapper>
      </Wrapper>
    </Body>
  );
};
