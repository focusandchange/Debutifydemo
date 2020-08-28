import { FC, ChangeEvent, useState } from "react";
import React from "react";
import styled from "styled-components";

const OffersMain = styled.div`
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

const PriceWrapper = styled.div`
  display: flex;
  align-items: center;

  -webkit-box-sizing: border-box;
  margin-bottom: 16px;
  padding-bottom: 16px;

  list-style: none;

  user-select: none;
  letter-spacing: 0.5px;
  text-transform: initial;

  color: #212528;
  border-bottom: 2px solid #f2f2f2;

  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
`;

const PriceA11y = styled.span`
  position: absolute;

  overflow: hidden;
  clip: rect(0, 0, 0, 0);

  -webkit-box-sizing: border-box;
  width: 1px;
  height: 1px;

  list-style: none;

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

const ProductSinglePriceWrapperHide = styled.span`
  display: none !important;

  -webkit-box-sizing: border-box;

  list-style: none;

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

const ComparePrice = styled.span`
  display: inline-block;

  -webkit-box-sizing: border-box;

  list-style: none;

  user-select: none;
  text-decoration: line-through;
  letter-spacing: 0.5px;
  text-transform: initial;

  color: #212528;

  font-family: Roboto, sans-serif;
  font-size: 19px;
  font-weight: 700;
  font-style: normal;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
`;

const ComparePriceA11y = styled.span`
  position: absolute;

  overflow: hidden;
  clip: rect(0, 0, 0, 0);

  -webkit-box-sizing: border-box;
  width: 1px;
  height: 1px;

  list-style: none;

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

const ProductPrice = styled.span`
  -webkit-box-sizing: border-box;

  list-style: none;

  user-select: none;
  letter-spacing: 0.5px;
  text-transform: initial;

  color: #212528;

  font-family: Roboto, sans-serif;
  font-size: 19px;
  font-weight: 700;
  font-style: normal;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
`;

const InventoryQuantityMain = styled.div`
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

const InventoryQuantity = styled.div`
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

const Symbol = styled.span`
  display: inline-block;

  box-sizing: border-box;
  width: 1.25em;

  list-style: none;

  user-select: none;
  text-align: center;

  color: #212528;

  font-family: "Font Awesome 5 Free";
  font-size: 16px;
  font-weight: 900;
  font-style: normal;
  font-variant: normal;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  text-rendering: auto;
`;

const QuantityText = styled.span`
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

const QuantityItemTemp = styled.strong`
  box-sizing: border-box;
  margin: auto 5px;

  list-style: none;

  user-select: none;

  color: #212528;

  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
`;

const LiveViewMain = styled.div`
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

const LiveView = styled.div`
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

const TextWrapperLiveView = styled.div`
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

const Eye = styled.span`
  display: inline-block;

  box-sizing: border-box;
  width: 1.25em;

  list-style: none;

  user-select: none;
  text-align: center;

  color: #212528;

  font-family: "Font Awesome 5 Free";
  font-size: 16px;
  font-weight: 900;
  font-style: normal;
  font-variant: normal;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  text-rendering: auto;
`;

const NumberLiveView = styled.strong`
  box-sizing: border-box;

  list-style: none;

  user-select: none;

  color: #212528;

  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
`;

const TextLiveView = styled.strong`
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

const Strong = styled.strong`
  box-sizing: border-box;
  margin: auto 5px;

  list-style: none;

  user-select: none;

  color: #212528;

  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
`;

const DeliveryTimeMain = styled.div`
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

const DeliveryTime = styled.div`
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

const ShippingFast = styled.span`
  display: inline-block;

  box-sizing: border-box;
  width: 1.25em;

  list-style: none;

  user-select: none;
  text-align: center;

  color: #212528;

  font-family: "Font Awesome 5 Free";
  font-size: 16px;
  font-weight: 900;
  font-style: normal;
  font-variant: normal;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  text-rendering: auto;
`;

const Span = styled.span`
  box-sizing: border-box;
  margin-right: 5px;

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

const FromTextDeliveryTime = styled.strong`
  box-sizing: border-box;

  list-style: none;

  user-select: none;

  color: #212528;

  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
`;

const ToTextDeliveryTime = styled.strong`
  box-sizing: border-box;

  list-style: none;

  user-select: none;

  color: #212528;

  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
`;

const SwatchClearfixWrapper = styled.div`
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

const Header = styled.div`
  box-sizing: border-box;
  margin-bottom: 4px;

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

const SwatchClearfix = styled.div`
  box-sizing: border-box;
  margin-bottom: 8px;

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
  ::after {
    display: table;
    clear: both;

    content: "";
  }
`;

const SwatchElement = styled.div`
  position: relative;

  display: flex;
  float: left;

  justify-content: center;

  box-sizing: border-box;
  margin: 0 8px 8px 0;
  padding: 4px;

  list-style: none;

  user-select: none;
  text-transform: capitalize;

  color: #212528;
  border: 2px solid #f2f2f2;
  border-color: #5600e3;
  border-radius: 100px;

  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.5;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
`;

const SwatchLabel = styled.label<{ background: string }>`
  float: left;
  overflow: hidden;

  box-sizing: border-box;
  min-width: 40px;
  height: 40px;
  margin: 0;

  list-style: none;

  cursor: pointer;
  user-select: none;
  transition: all 0.3s ease;
  text-align: center;
  white-space: nowrap;
  text-transform: capitalize;
  text-overflow: ellipsis;

  color: #212528;
  border-radius: 100px;
  background-color: ${(props) => props.background};

  /* background-image: url(//cdn.shopify.com/s/files/1/0108/0999/9419/t/49/assets/white_100x100_crop_center.jpg?v=4348732871465748300);
   */

  background-repeat: no-repeat;
  background-position: center;
  background-size: 150%;

  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  line-height: 40px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
`;

const LabelSize = styled.label`
  display: block;

  box-sizing: border-box;
  margin-bottom: 4px;

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

const LabelQuantity = styled.label`
  display: block;

  box-sizing: border-box;
  margin-bottom: 4px;

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

const SizeBigWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  box-sizing: border-box;
  margin: 0;
  margin-left: -16px;
  padding: 0;

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

const SizeWrapper = styled.div`
  float: left;
  flex: 50%;

  box-sizing: border-box;
  width: 100%;
  min-height: 1px;
  margin-bottom: 16px;
  padding-left: 16px;

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

const Select = styled.select`
  display: inline-block;

  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  padding: 6px 30px 6px 10px !important;

  list-style: none;

  cursor: pointer;
  user-select: none;
  transition: all 0.3s ease;
  text-indent: 0.01px;

  color: #212528;
  border: 2px solid #f2f2f2;
  border-color: #f7f7f7;
  border-radius: 3px;
  outline: none !important;
  background-color: #f7f7f7;
  background-image: url("//cdn.shopify.com/s/files/1/0108/0999/9419/t/49/assets/ico-select.svg?v=5678075976391802735") !important;
  background-repeat: no-repeat !important;
  background-position: right 10px center !important;
  background-size: auto 16px;

  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  appearance: none;
`;

const QuantityWrapper = styled.div`
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

const Input = styled.input`
  display: inline-block;

  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  padding: 6px 10px !important;

  list-style: none;

  user-select: none;
  transition: all 0.3s ease;
  text-align: center;

  color: #212528;
  border: 2px solid #f2f2f2;
  border-color: #f7f7f7;
  border-radius: 3px;
  outline: none !important;
  background-color: #f7f7f7;

  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
`;

const QuantityContainer = styled.div`
  position: relative;

  box-sizing: border-box;
  width: 100%;
  max-width: 100%;

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

const MinusButton = styled.button`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;

  display: inherit;
  overflow: hidden;

  box-sizing: border-box;
  width: 40px;
  height: 40px;
  margin: 0;
  padding: 0;

  list-style: none;

  cursor: pointer;
  user-select: none;
  transition: all 0.3s ease;
  text-align: center;
  vertical-align: middle;
  white-space: normal;
  text-decoration: none;
  letter-spacing: 0;
  text-transform: initial;

  color: #212528;
  border: 2px solid #f2f2f2;
  border-color: #f7f7f7;
  border-radius: 3px;
  outline: none !important;
  background: none;
  background-color: #f7f7f7;

  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 36px;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  backface-visibility: hidden;
`;

const PlusButton = styled.button`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;

  display: inherit;
  overflow: hidden;

  box-sizing: border-box;
  width: 40px;
  height: 40px;
  margin: 0;
  padding: 0;

  list-style: none;

  cursor: pointer;
  user-select: none;
  transition: all 0.3s ease;
  text-align: center;
  vertical-align: middle;
  white-space: normal;
  text-decoration: none;
  letter-spacing: 0;
  text-transform: initial;

  color: #212528;
  border: 2px solid #f2f2f2;
  border-color: #f7f7f7;
  border-radius: 3px;
  outline: none !important;
  background: none;
  background-color: #f7f7f7;

  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 36px;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  backface-visibility: hidden;
`;

const AddToCart = styled.button`
  display: inline-block;
  overflow: visible;
  flex: 100%;

  box-sizing: border-box;
  width: auto;
  margin: 0;
  margin-bottom: 16px;
  padding: 16px 24px;

  list-style: none;

  cursor: pointer;
  user-select: none;
  transition: all 0.3s ease;
  text-align: center;
  vertical-align: middle;
  white-space: normal;
  text-decoration: none;
  letter-spacing: 0.5px;
  text-transform: uppercase;

  color: #fff;
  border: 2px solid #f2f2f2;
  border-color: #212528;
  border-radius: 3px;
  outline: none !important;
  background: none;
  background-color: #212528;

  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
`;

const ButtonText = styled.span`
  box-sizing: border-box;

  list-style: none;

  cursor: pointer;
  user-select: none;
  text-align: center;
  white-space: normal;
  letter-spacing: 0.5px;
  text-transform: uppercase;

  color: #fff;

  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
`;

const ButtonShoppingBag = styled.span`
  display: inherit !important;

  box-sizing: border-box;

  list-style: none;

  cursor: pointer;
  user-select: none;
  text-align: center;
  white-space: normal;
  letter-spacing: 0.5px;
  text-transform: uppercase;

  color: #fff;

  font-family: "Font Awesome 5 Free";
  font-size: 16px;
  font-weight: 900;
  font-style: normal;
  font-variant: normal;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  text-rendering: auto;
`;

const ButtonAddToCartText = styled.span`
  box-sizing: border-box;

  list-style: none;

  cursor: pointer;
  user-select: none;
  text-align: center;
  white-space: normal;
  letter-spacing: 0.5px;
  text-transform: uppercase;

  color: #fff;

  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
`;

const ButtonMain = styled.div`
  display: inline-flex;
  align-items: flex-start;
  flex-wrap: wrap;

  box-sizing: border-box;
  width: 100%;

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

const TrustBadge = styled.div`
  box-sizing: border-box;
  padding: 16px;

  list-style: none;

  user-select: none;

  color: #212528;
  border-radius: 3px;
  background-color: #f7f7f7;

  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
`;

const ContainerTrustBadgeTextCenter = styled.div`
  display: flex;
  flex-direction: column;

  box-sizing: border-box;

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

const TextTrustBadge = styled.p`
  order: 1;

  box-sizing: border-box;
  margin-top: 8px;
  margin-bottom: 0;

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

const List = styled.ul`
  box-sizing: border-box;
  margin: 0 0 16px 16px;
  margin-bottom: -8px;
  margin-left: 0;
  padding: 0;

  list-style: none;

  user-select: none;
  text-align: center !important;

  color: #212528;

  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 0;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
`;

const Li = styled.li`
  display: inline-block;

  box-sizing: border-box;
  margin-right: 4px;
  margin-bottom: 8px;

  list-style: none;

  user-select: none;

  color: #212528;

  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 0;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
`;

const Svg = styled.svg`
  overflow: hidden;

  box-sizing: border-box;
  width: 38;
  height: 24;
  margin-bottom: 0;

  list-style: none;

  cursor: default;
  user-select: none;

  color: #212528;

  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 0;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
`;

interface ProductFragment {}

interface OffersProp {
  productOptions: ProductFragment[];
  onChangeColor: (value: number) => void;
  // value: number; // 初始的数量
  // onChange: (value: number) => void; // 数量改变
}

export const Offers: FC<OffersProp> = ({ productOptions, onChangeColor }) => {
  const [number, setNumber] = useState(1);

  const onChange = (value: number) => {
    if (value > 0) {
      setNumber(value);
    }
  };

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    onChange(parseInt(e.target.value));
  }
  return (
    <OffersMain>
      <PriceWrapper>
        <PriceA11y></PriceA11y>
        <ProductSinglePriceWrapperHide>
          <ComparePrice></ComparePrice>
        </ProductSinglePriceWrapperHide>
        <ComparePriceA11y>Sale price</ComparePriceA11y>
        <ProductPrice aria-hidden="false">¥8,200</ProductPrice>
      </PriceWrapper>
      <InventoryQuantityMain>
        <InventoryQuantity>
          <Symbol></Symbol>
          <QuantityText>Only</QuantityText>
          <QuantityItemTemp>5</QuantityItemTemp>
          <QuantityText>left in stock</QuantityText>
        </InventoryQuantity>
      </InventoryQuantityMain>
      <LiveViewMain>
        <LiveView>
          <TextWrapperLiveView>
            <Eye></Eye>

            <span></span>
            <NumberLiveView>10</NumberLiveView>
            <Strong>People</Strong>
            <TextLiveView>are viewing this right now</TextLiveView>
          </TextWrapperLiveView>
        </LiveView>
      </LiveViewMain>
      <DeliveryTimeMain>
        <DeliveryTime>
          <ShippingFast></ShippingFast>

          <Span>Get it between</Span>

          <FromTextDeliveryTime>Aug 30</FromTextDeliveryTime>
          <span>-</span>
          <ToTextDeliveryTime>Sep 06</ToTextDeliveryTime>
          <span></span>
        </DeliveryTime>
      </DeliveryTimeMain>
      <SwatchClearfixWrapper>
        <SwatchClearfix data-option-index="0">
          <Header>Color</Header>

          {productOptions.map((newProductOptions: any) => {
            if (newProductOptions.name == "Color") {
              return newProductOptions.values.map(
                (newProductOptionValues: any, index: number) => {
                  return (
                    <SwatchElement>
                      <SwatchLabel
                        background={newProductOptionValues}
                        onClick={() => {
                          onChangeColor(index);
                        }}
                      ></SwatchLabel>
                    </SwatchElement>
                  );
                }
              );
            }
          })}
        </SwatchClearfix>
      </SwatchClearfixWrapper>

      <SizeBigWrapper>
        <SizeWrapper>
          <LabelSize>Size</LabelSize>

          <Select>
            {productOptions.map((newProductOption: any) => {
              if (newProductOption.name == "Size") {
                return newProductOption.values.map(
                  (newProductOptionValues: any) => {
                    return (
                      <option
                        key={newProductOptionValues}
                        value={newProductOptionValues}
                      >
                        {newProductOptionValues}
                      </option>
                    );
                  }
                );
              }
            })}
          </Select>
        </SizeWrapper>
      </SizeBigWrapper>

      <QuantityWrapper>
        <LabelQuantity>Quantity</LabelQuantity>
        <QuantityContainer>
          <MinusButton onClick={() => onChange(number - 1)}>-</MinusButton>
          <Input type="number" value={number} onChange={handleChange} />
          <PlusButton onClick={() => onChange(number + 1)}>+</PlusButton>
        </QuantityContainer>
      </QuantityWrapper>
      <ButtonMain>
        <AddToCart>
          <ButtonText>
            <ButtonShoppingBag></ButtonShoppingBag>

            <ButtonAddToCartText>Add to Cart</ButtonAddToCartText>
          </ButtonText>
        </AddToCart>
      </ButtonMain>

      <TrustBadge>
        <ContainerTrustBadgeTextCenter>
          <TextTrustBadge>Guaranteed safe & secure checkout</TextTrustBadge>
          <List>
            <Li>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 38 24"
                width="38"
                height="24"
                aria-labelledby="pi-american_express"
              >
                <title id="pi-american_express">American Express</title>
                <g fill="none">
                  <path
                    fill="#000"
                    d="M35,0 L3,0 C1.3,0 0,1.3 0,3 L0,21 C0,22.7 1.4,24 3,24 L35,24 C36.7,24 38,22.7 38,21 L38,3 C38,1.3 36.6,0 35,0 Z"
                    opacity=".07"
                  ></path>
                  <path
                    fill="#006FCF"
                    d="M35,1 C36.1,1 37,1.9 37,3 L37,21 C37,22.1 36.1,23 35,23 L3,23 C1.9,23 1,22.1 1,21 L1,3 C1,1.9 1.9,1 3,1 L35,1"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M8.971,10.268 L9.745,12.144 L8.203,12.144 L8.971,10.268 Z M25.046,10.346 L22.069,10.346 L22.069,11.173 L24.998,11.173 L24.998,12.412 L22.075,12.412 L22.075,13.334 L25.052,13.334 L25.052,14.073 L27.129,11.828 L25.052,9.488 L25.046,10.346 L25.046,10.346 Z M10.983,8.006 L14.978,8.006 L15.865,9.941 L16.687,8 L27.057,8 L28.135,9.19 L29.25,8 L34.013,8 L30.494,11.852 L33.977,15.68 L29.143,15.68 L28.065,14.49 L26.94,15.68 L10.03,15.68 L9.536,14.49 L8.406,14.49 L7.911,15.68 L4,15.68 L7.286,8 L10.716,8 L10.983,8.006 Z M19.646,9.084 L17.407,9.084 L15.907,12.62 L14.282,9.084 L12.06,9.084 L12.06,13.894 L10,9.084 L8.007,9.084 L5.625,14.596 L7.18,14.596 L7.674,13.406 L10.27,13.406 L10.764,14.596 L13.484,14.596 L13.484,10.661 L15.235,14.602 L16.425,14.602 L18.165,10.673 L18.165,14.603 L19.623,14.603 L19.647,9.083 L19.646,9.084 Z M28.986,11.852 L31.517,9.084 L29.695,9.084 L28.094,10.81 L26.546,9.084 L20.652,9.084 L20.652,14.602 L26.462,14.602 L28.076,12.864 L29.624,14.602 L31.499,14.602 L28.987,11.852 L28.986,11.852 Z"
                  ></path>
                </g>
              </Svg>
            </Li>

            <Li>
              <Svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                x="0"
                y="0"
                width="38"
                height="24"
                viewBox="0 0 165.521 105.965"
                aria-labelledby="pi-apple_pay"
              >
                <title id="pi-apple_pay">Apple Pay</title>
                <path
                  fill="#000"
                  d="M150.698 0H14.823c-.566 0-1.133 0-1.698.003-.477.004-.953.009-1.43.022-1.039.028-2.087.09-3.113.274a10.51 10.51 0 0 0-2.958.975 9.932 9.932 0 0 0-4.35 4.35 10.463 10.463 0 0 0-.975 2.96C.113 9.611.052 10.658.024 11.696a70.22 70.22 0 0 0-.022 1.43C0 13.69 0 14.256 0 14.823v76.318c0 .567 0 1.132.002 1.699.003.476.009.953.022 1.43.028 1.036.09 2.084.275 3.11a10.46 10.46 0 0 0 .974 2.96 9.897 9.897 0 0 0 1.83 2.52 9.874 9.874 0 0 0 2.52 1.83c.947.483 1.917.79 2.96.977 1.025.183 2.073.245 3.112.273.477.011.953.017 1.43.02.565.004 1.132.004 1.698.004h135.875c.565 0 1.132 0 1.697-.004.476-.002.952-.009 1.431-.02 1.037-.028 2.085-.09 3.113-.273a10.478 10.478 0 0 0 2.958-.977 9.955 9.955 0 0 0 4.35-4.35c.483-.947.789-1.917.974-2.96.186-1.026.246-2.074.274-3.11.013-.477.02-.954.022-1.43.004-.567.004-1.132.004-1.699V14.824c0-.567 0-1.133-.004-1.699a63.067 63.067 0 0 0-.022-1.429c-.028-1.038-.088-2.085-.274-3.112a10.4 10.4 0 0 0-.974-2.96 9.94 9.94 0 0 0-4.35-4.35A10.52 10.52 0 0 0 156.939.3c-1.028-.185-2.076-.246-3.113-.274a71.417 71.417 0 0 0-1.431-.022C151.83 0 151.263 0 150.698 0z"
                ></path>
                <path
                  fill="#FFF"
                  d="M150.698 3.532l1.672.003c.452.003.905.008 1.36.02.793.022 1.719.065 2.583.22.75.135 1.38.34 1.984.648a6.392 6.392 0 0 1 2.804 2.807c.306.6.51 1.226.645 1.983.154.854.197 1.783.218 2.58.013.45.019.9.02 1.36.005.557.005 1.113.005 1.671v76.318c0 .558 0 1.114-.004 1.682-.002.45-.008.9-.02 1.35-.022.796-.065 1.725-.221 2.589a6.855 6.855 0 0 1-.645 1.975 6.397 6.397 0 0 1-2.808 2.807c-.6.306-1.228.511-1.971.645-.881.157-1.847.2-2.574.22-.457.01-.912.017-1.379.019-.555.004-1.113.004-1.669.004H14.801c-.55 0-1.1 0-1.66-.004a74.993 74.993 0 0 1-1.35-.018c-.744-.02-1.71-.064-2.584-.22a6.938 6.938 0 0 1-1.986-.65 6.337 6.337 0 0 1-1.622-1.18 6.355 6.355 0 0 1-1.178-1.623 6.935 6.935 0 0 1-.646-1.985c-.156-.863-.2-1.788-.22-2.578a66.088 66.088 0 0 1-.02-1.355l-.003-1.327V14.474l.002-1.325a66.7 66.7 0 0 1 .02-1.357c.022-.792.065-1.717.222-2.587a6.924 6.924 0 0 1 .646-1.981c.304-.598.7-1.144 1.18-1.623a6.386 6.386 0 0 1 1.624-1.18 6.96 6.96 0 0 1 1.98-.646c.865-.155 1.792-.198 2.586-.22.452-.012.905-.017 1.354-.02l1.677-.003h135.875"
                ></path>
                <g>
                  <g>
                    <path
                      fill="#000"
                      d="M43.508 35.77c1.404-1.755 2.356-4.112 2.105-6.52-2.054.102-4.56 1.355-6.012 3.112-1.303 1.504-2.456 3.959-2.156 6.266 2.306.2 4.61-1.152 6.063-2.858"
                    ></path>
                    <path
                      fill="#000"
                      d="M45.587 39.079c-3.35-.2-6.196 1.9-7.795 1.9-1.6 0-4.049-1.8-6.698-1.751-3.447.05-6.645 2-8.395 5.1-3.598 6.2-.95 15.4 2.55 20.45 1.699 2.5 3.747 5.25 6.445 5.151 2.55-.1 3.549-1.65 6.647-1.65 3.097 0 3.997 1.65 6.696 1.6 2.798-.05 4.548-2.5 6.247-5 1.95-2.85 2.747-5.6 2.797-5.75-.05-.05-5.396-2.101-5.446-8.251-.05-5.15 4.198-7.6 4.398-7.751-2.399-3.548-6.147-3.948-7.447-4.048"
                    ></path>
                  </g>
                  <g>
                    <path
                      fill="#000"
                      d="M78.973 32.11c7.278 0 12.347 5.017 12.347 12.321 0 7.33-5.173 12.373-12.529 12.373h-8.058V69.62h-5.822V32.11h14.062zm-8.24 19.807h6.68c5.07 0 7.954-2.729 7.954-7.46 0-4.73-2.885-7.434-7.928-7.434h-6.706v14.894z"
                    ></path>
                    <path
                      fill="#000"
                      d="M92.764 61.847c0-4.809 3.665-7.564 10.423-7.98l7.252-.442v-2.08c0-3.04-2.001-4.704-5.562-4.704-2.938 0-5.07 1.507-5.51 3.82h-5.252c.157-4.86 4.731-8.395 10.918-8.395 6.654 0 10.995 3.483 10.995 8.89v18.663h-5.38v-4.497h-.13c-1.534 2.937-4.914 4.782-8.579 4.782-5.406 0-9.175-3.222-9.175-8.057zm17.675-2.417v-2.106l-6.472.416c-3.64.234-5.536 1.585-5.536 3.95 0 2.288 1.975 3.77 5.068 3.77 3.95 0 6.94-2.522 6.94-6.03z"
                    ></path>
                    <path
                      fill="#000"
                      d="M120.975 79.652v-4.496c.364.051 1.247.103 1.715.103 2.573 0 4.029-1.09 4.913-3.899l.52-1.663-9.852-27.293h6.082l6.863 22.146h.13l6.862-22.146h5.927l-10.216 28.67c-2.34 6.577-5.017 8.735-10.683 8.735-.442 0-1.872-.052-2.261-.157z"
                    ></path>
                  </g>
                </g>
              </Svg>
            </Li>

            <Li>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 38 24"
                width="38"
                height="24"
                aria-labelledby="pi-google_pay"
              >
                <title id="pi-google_pay">Google Pay</title>
                <path
                  d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                  fill="#000"
                  opacity=".07"
                ></path>
                <path
                  d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                  fill="#FFF"
                ></path>
                <path
                  d="M18.093 11.976v3.2h-1.018v-7.9h2.691a2.447 2.447 0 0 1 1.747.692 2.28 2.28 0 0 1 .11 3.224l-.11.116c-.47.447-1.098.69-1.747.674l-1.673-.006zm0-3.732v2.788h1.698c.377.012.741-.135 1.005-.404a1.391 1.391 0 0 0-1.005-2.354l-1.698-.03zm6.484 1.348c.65-.03 1.286.188 1.778.613.445.43.682 1.03.65 1.649v3.334h-.969v-.766h-.049a1.93 1.93 0 0 1-1.673.931 2.17 2.17 0 0 1-1.496-.533 1.667 1.667 0 0 1-.613-1.324 1.606 1.606 0 0 1 .613-1.336 2.746 2.746 0 0 1 1.698-.515c.517-.02 1.03.093 1.49.331v-.208a1.134 1.134 0 0 0-.417-.901 1.416 1.416 0 0 0-.98-.368 1.545 1.545 0 0 0-1.319.717l-.895-.564a2.488 2.488 0 0 1 2.182-1.06zM23.29 13.52a.79.79 0 0 0 .337.662c.223.176.5.269.785.263.429-.001.84-.17 1.146-.472.305-.286.478-.685.478-1.103a2.047 2.047 0 0 0-1.324-.374 1.716 1.716 0 0 0-1.03.294.883.883 0 0 0-.392.73zm9.286-3.75l-3.39 7.79h-1.048l1.281-2.728-2.224-5.062h1.103l1.612 3.885 1.569-3.885h1.097z"
                  fill="#5F6368"
                ></path>
                <path
                  d="M13.986 11.284c0-.308-.024-.616-.073-.92h-4.29v1.747h2.451a2.096 2.096 0 0 1-.9 1.373v1.134h1.464a4.433 4.433 0 0 0 1.348-3.334z"
                  fill="#4285F4"
                ></path>
                <path
                  d="M9.629 15.721a4.352 4.352 0 0 0 3.01-1.097l-1.466-1.14a2.752 2.752 0 0 1-4.094-1.44H5.577v1.17a4.53 4.53 0 0 0 4.052 2.507z"
                  fill="#34A853"
                ></path>
                <path
                  d="M7.079 12.05a2.709 2.709 0 0 1 0-1.735v-1.17H5.577a4.505 4.505 0 0 0 0 4.075l1.502-1.17z"
                  fill="#FBBC04"
                ></path>
                <path
                  d="M9.629 8.44a2.452 2.452 0 0 1 1.74.68l1.3-1.293a4.37 4.37 0 0 0-3.065-1.183 4.53 4.53 0 0 0-4.027 2.5l1.502 1.171a2.715 2.715 0 0 1 2.55-1.875z"
                  fill="#EA4335"
                ></path>
              </Svg>
            </Li>

            <Li>
              <Svg
                viewBox="0 0 38 24"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                width="38"
                height="24"
                aria-labelledby="pi-master"
              >
                <title id="pi-master">Mastercard</title>
                <path
                  opacity=".07"
                  d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                ></path>
                <path
                  fill="#fff"
                  d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                ></path>
                <circle fill="#EB001B" cx="15" cy="12" r="7"></circle>
                <circle fill="#F79E1B" cx="23" cy="12" r="7"></circle>
                <path
                  fill="#FF5F00"
                  d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"
                ></path>
              </Svg>
            </Li>

            <Li>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 38 24"
                width="38"
                height="24"
                aria-labelledby="pi-shopify_pay"
              >
                <title id="pi-shopify_pay">Shop Pay</title>
                <rect
                  x=".5"
                  y=".5"
                  width="37"
                  height="23"
                  rx="2"
                  fill="#5A31F4"
                  stroke="#3F22AB"
                ></rect>
                <path
                  d="M21.382 9.713c0 1.668-1.177 2.858-2.821 2.858h-1.549a.133.133 0 00-.092.038.128.128 0 00-.038.091v2.192a.129.129 0 01-.08.119.13.13 0 01-.05.01h-1.084a.13.13 0 01-.12-.08.127.127 0 01-.01-.05V6.986a.129.129 0 01.13-.13h2.9c1.637 0 2.814 1.19 2.814 2.858zm-1.352 0c0-.958-.658-1.658-1.55-1.658h-1.468a.13.13 0 00-.13.13v3.05a.129.129 0 00.13.13h1.468c.892.005 1.55-.695 1.55-1.652zM21.704 13.504a1.527 1.527 0 01.647-1.317c.423-.316 1.084-.48 2.055-.514l1.033-.036v-.303c0-.607-.41-.863-1.068-.863-.658 0-1.075.231-1.17.61a.127.127 0 01-.125.09h-1.022a.13.13 0 01-.126-.092.126.126 0 01-.004-.055c.152-.898.904-1.58 2.494-1.58 1.692 0 2.303.783 2.303 2.276v3.172a.13.13 0 01-.132.129h-1.03a.13.13 0 01-.13-.13v-.236a.096.096 0 00-.061-.091.099.099 0 00-.107.022c-.31.334-.808.575-1.607.575-1.175 0-1.95-.607-1.95-1.657zm3.735-.687v-.246l-1.339.07c-.705.036-1.115.326-1.115.816 0 .444.376.69 1.034.69.893 0 1.42-.48 1.42-1.33zM27.755 17.417v-.919a.131.131 0 01.157-.127c.158.029.318.044.479.044a1.229 1.229 0 001.245-.876l.067-.211a.133.133 0 000-.088l-2.145-5.471a.13.13 0 01.122-.18h1.04a.132.132 0 01.123.085l1.456 3.859a.131.131 0 00.125.088.133.133 0 00.125-.088l1.265-3.848a.13.13 0 01.126-.09h1.076a.134.134 0 01.132.116.133.133 0 01-.008.063l-2.295 6.076c-.528 1.413-1.433 1.773-2.43 1.773a1.96 1.96 0 01-.561-.066.132.132 0 01-.1-.14zM8.57 6.4a5.363 5.363 0 00-3.683 1.427.231.231 0 00-.029.31l.618.839a.236.236 0 00.276.084.237.237 0 00.086-.056 3.823 3.823 0 012.738-1.11c2.12 0 3.227 1.584 3.227 3.15 0 1.7-1.163 2.898-2.835 2.921-1.292 0-2.266-.85-2.266-1.974a1.908 1.908 0 01.713-1.48.231.231 0 00.033-.324l-.65-.815a.236.236 0 00-.339-.034c-.399.32-.72.724-.942 1.183a3.39 3.39 0 00-.337 1.47c0 1.935 1.655 3.452 3.775 3.464h.03c2.517-.032 4.337-1.884 4.337-4.415 0-2.247-1.667-4.64-4.752-4.64z"
                  fill="#fff"
                ></path>
              </Svg>
            </Li>

            <Li>
              <Svg
                viewBox="0 0 38 24"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                width="38"
                height="24"
                aria-labelledby="pi-visa"
              >
                <title id="pi-visa">Visa</title>
                <path
                  opacity=".07"
                  d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                ></path>
                <path
                  fill="#fff"
                  d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                ></path>
                <path
                  d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z"
                  fill="#142688"
                ></path>
              </Svg>
            </Li>
          </List>
        </ContainerTrustBadgeTextCenter>
      </TrustBadge>
    </OffersMain>
  );
};
