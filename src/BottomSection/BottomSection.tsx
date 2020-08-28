import { FC, useState, ChangeEvent } from "react";
import React from "react";
import styled from "styled-components";

const BottomSectionMain = styled.div`
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

const SectionHeaderMediumTextLeft = styled.div`
  box-sizing: border-box;
  margin-bottom: 16px;

  text-align: left;

  color: #212528;

  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
`;

const SectionHeaderTitle = styled.h2`
  display: block;

  box-sizing: border-box;
  margin-top: 0;
  margin-bottom: 12px;

  text-align: left;
  letter-spacing: 0;
  text-transform: initial;

  color: #212528;

  font-family: Oswald, sans-serif;
  font-size: 27px;
  font-weight: 700;
  font-style: normal;
  line-height: 1.2;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
`;

const SectionHeaderSubtitle = styled.p`
  box-sizing: border-box;
  margin-top: 0;
  margin-bottom: 16px;

  text-align: left;

  color: #212528;

  font-family: Roboto, sans-serif;
  font-size: 19px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
`;

const ImageBigWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  box-sizing: border-box;
  margin: 0;
  margin-bottom: -30px;
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

const ImageMiddleWrapper = styled.div`
  float: left;
  clear: both;

  box-sizing: border-box;
  width: 16.666%;
  min-height: 1px;
  margin-bottom: 30px;
  padding-left: 30px;

  list-style: none;

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

const ImageATag = styled.a`
  position: relative;

  display: block;

  box-sizing: border-box;
  width: 100%;

  list-style: none;

  transition: all 0.3s ease;
  text-decoration: none;

  opacity: 1;
  color: #212528;
  border-radius: 3px;
  outline: none !important;
  background: transparent;
  background-color: initial;

  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
`;

const ImageSmallWrapper = styled.div`
  position: relative;

  overflow: hidden;

  box-sizing: border-box;

  list-style: none;

  color: #212528;
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
  box-sizing: border-box;
  padding-top: 100%;

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

  transition: all 0.3s ease;

  color: #212528;
  border: 0 none;
  border-radius: 3px;
  background-color: initial;

  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
`;

const TotalPriceWrapper = styled.div`
  float: left;

  box-sizing: border-box;
  width: auto;
  min-height: 1px;
  margin-bottom: 30px;
  padding-left: 30px;

  list-style: none;

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

const P = styled.p`
  box-sizing: border-box;
  margin-top: 0;
  margin-bottom: 16px;

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

const TotalUpSellBundles = styled.span`
  box-sizing: border-box;

  list-style: none;

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

const AddSelectedItems = styled.button`
  display: inline-block;
  overflow: visible;

  box-sizing: border-box;
  width: auto;
  margin: 0;
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

const ButtonText = styled.div`
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

const CartPlus = styled.div`
  display: inline-block;

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

const FormWrapperUpSellBundles = styled.div`
  box-sizing: border-box;
  margin-top: 16px;

  color: #212528;

  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
`;

const ThisItem = styled.div`
  display: flex;
  align-items: center;

  box-sizing: border-box;
  margin-top: 8px;

  color: #212528;

  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
`;

const LabelUpSellBundles = styled.label`
  overflow: hidden;
  flex-shrink: 0;

  box-sizing: border-box;
  max-width: 50%;

  cursor: default;
  transition: all 0.3s ease;
  white-space: nowrap;
  text-overflow: ellipsis;

  color: #212528;

  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
`;

const CheckboxUpSellBundles = styled.input`
  display: inline-block;

  box-sizing: border-box;
  width: auto;
  max-width: 100%;
  height: initial;
  margin: 0 10px 0 0;
  padding: 0;

  transition: all 0.3s ease;
  white-space: nowrap;

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

const Strong = styled.strong`
  box-sizing: border-box;

  cursor: default;
  white-space: nowrap;

  color: #212528;

  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
`;

const TitleUpSellBundles = styled.span`
  box-sizing: border-box;

  cursor: default;
  white-space: nowrap;

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
  max-width: 100%;
  margin-left: 5px;
  padding: 6px 30px 6px 10px !important;

  cursor: pointer;
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

interface VariantFragment {
  [x: string]: any;
  id: number;
  title: string;
  src: string;
}

interface BottomSectionProp {
  product: VariantFragment[];
  // onChange: (value: string) => void;
}

export const BottomSection: FC<BottomSectionProp> = ({ product }) => {
  const [newVariantFirst, setNewVariantFirst] = useState(product[0]);
  const [newVariantSecond, setNewVariantSecond] = useState(product[1]);
  const [newVariantThird, setNewVariantThird] = useState(product[2]);

  const [imageFirst, setImageFirst] = useState(product[0].images[0].src);
  const [imageSecond, setImageSecond] = useState(product[1].images[0].src);
  const [imageThird, setImageThird] = useState(product[2].images[0].src);

  const [priceFirst, setPriceFirst] = useState(product[0].variants[0].price);
  const [priceSecond, setPriceSecond] = useState(product[1].variants[0].price);
  const [priceThird, setPriceThird] = useState(product[2].variants[0].price);

  function handleChangeOptionFirst(e: ChangeEvent<HTMLSelectElement>) {
    localStorage.setItem("currentIdFirst", newVariantFirst.id.toString());

    onChangeFirst(e.target.value);
  }

  function handleChangeOptionSecond(e: ChangeEvent<HTMLSelectElement>) {
    localStorage.setItem("currentIdSecond", newVariantSecond.id.toString());

    onChangeSecond(e.target.value);
  }

  function handleChangeOptionThird(e: ChangeEvent<HTMLSelectElement>) {
    localStorage.setItem("currentIdThird", newVariantThird.id.toString());
    onChangeThird(e.target.value);
  }
  // console.log(imageFirst);

  const onChangeFirst = (target: string) => {
    const currentId = localStorage.getItem("currentIdFirst");
    if (currentId == null) {
    } else {
      for (let j = 0; j < product.length; j++) {
        if (product[j].id == parseInt(currentId)) {
          for (let i = 0; i < product[j].variants.length; i++) {
            if (product[j].variants[i].id == target) {
              setImageFirst(product[j].images[i].src);
              setPriceFirst(product[j].variants[i].price);
            }
          }
        }
      }
    }
  };

  const onChangeSecond = (target: string) => {
    const currentId = localStorage.getItem("currentIdSecond");
    if (currentId == null) {
    } else {
      for (let j = 0; j < product.length; j++) {
        if (product[j].id == parseInt(currentId)) {
          for (let i = 0; i < product[j].variants.length; i++) {
            if (product[j].variants[i].id == target) {
              setImageSecond(product[j].images[i].src);
              setPriceSecond(product[j].variants[i].price);
            }
          }
        }
      }
    }
  };
  const onChangeThird = (target: string) => {
    const currentId = localStorage.getItem("currentIdThird");
    if (currentId == null) {
    } else {
      for (let j = 0; j < product.length; j++) {
        if (product[j].id == parseInt(currentId)) {
          for (let i = 0; i < product[j].variants.length; i++) {
            if (product[j].variants[i].id == target) {
              setImageThird(product[j].images[i].src);
              setPriceThird(product[j].variants[i].price);
            }
          }
        }
      }
    }
  };
  return (
    <BottomSectionMain>
      <SectionHeaderMediumTextLeft>
        <SectionHeaderTitle>Frequently bought togheter</SectionHeaderTitle>
        <SectionHeaderSubtitle></SectionHeaderSubtitle>
      </SectionHeaderMediumTextLeft>
      <ImageBigWrapper>
        <ImageMiddleWrapper>
          <ImageATag>
            <ImageSmallWrapper>
              <ImageWrapper>
                <Image src={imageFirst}></Image>
              </ImageWrapper>
            </ImageSmallWrapper>
          </ImageATag>
        </ImageMiddleWrapper>
        <ImageMiddleWrapper>
          <ImageATag>
            <ImageSmallWrapper>
              <ImageWrapper>
                <Image src={imageSecond}></Image>
              </ImageWrapper>
            </ImageSmallWrapper>
          </ImageATag>
        </ImageMiddleWrapper>
        <ImageMiddleWrapper>
          <ImageATag>
            <ImageSmallWrapper>
              <ImageWrapper>
                <Image src={imageThird}></Image>
              </ImageWrapper>
            </ImageSmallWrapper>
          </ImageATag>
        </ImageMiddleWrapper>
        <TotalPriceWrapper>
          <P>
            Total price:{" "}
            <TotalUpSellBundles>
              ¥
              {parseInt(priceFirst) +
                parseInt(priceSecond) +
                parseInt(priceThird)}
            </TotalUpSellBundles>
          </P>
          <AddSelectedItems>
            <ButtonText>
              <CartPlus></CartPlus>
              Add selected items
            </ButtonText>
          </AddSelectedItems>
        </TotalPriceWrapper>
      </ImageBigWrapper>
      <FormWrapperUpSellBundles>
        <ThisItem>
          <LabelUpSellBundles>
            <CheckboxUpSellBundles type="checkbox"></CheckboxUpSellBundles>

            <Strong>This item:</Strong>

            <TitleUpSellBundles>Mx.0</TitleUpSellBundles>
          </LabelUpSellBundles>
          <Select onChange={handleChangeOptionFirst}>
            {newVariantFirst.variants.map((newVariants: any) => {
              return (
                <option key={newVariants.id} value={newVariants.id}>
                  {newVariants.title + "-¥" + newVariants.price}
                </option>
              );
            })}
          </Select>
        </ThisItem>
        <ThisItem>
          <LabelUpSellBundles>
            <CheckboxUpSellBundles type="checkbox"></CheckboxUpSellBundles>

            <TitleUpSellBundles>This item:</TitleUpSellBundles>
          </LabelUpSellBundles>
          <Select onChange={handleChangeOptionSecond}>
            {newVariantSecond.variants.map((newVariants: any) => {
              return (
                <option key={newVariants.id} value={newVariants.id}>
                  {newVariants.title + "-¥" + newVariants.price}
                </option>
              );
            })}
          </Select>
        </ThisItem>
        <ThisItem>
          <LabelUpSellBundles>
            <CheckboxUpSellBundles type="checkbox"></CheckboxUpSellBundles>

            <TitleUpSellBundles>This item:</TitleUpSellBundles>
          </LabelUpSellBundles>
          <Select onChange={handleChangeOptionThird}>
            {newVariantThird.variants.map((newVariants: any) => {
              return (
                <option key={newVariants.id} value={newVariants.id}>
                  {newVariants.title + "-¥" + newVariants.price}
                </option>
              );
            })}
          </Select>
        </ThisItem>
      </FormWrapperUpSellBundles>
    </BottomSectionMain>
  );
};
