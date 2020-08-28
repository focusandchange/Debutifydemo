import { FC, useState } from "react";
import React from "react";
import styled from "styled-components";

const ProductPhotoMain = styled.div`
  float: left;

  box-sizing: border-box;
  width: 58.333%;
  min-height: 1px;
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

const SinglePhoto = styled.div`
  position: relative;

  display: block;
  overflow: hidden;

  box-sizing: border-box;

  list-style: none;

  user-select: none;

  color: #212528;
  border-radius: 3px;

  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  touch-action: pan-y;
  -webkit-tap-highlight-color: transparent;
  overflow-anchor: none;
`;

const Thumbnails = styled.div`
  position: relative;

  display: block;
  overflow: hidden;

  box-sizing: border-box;
  margin: 0;
  margin-top: 16px;
  margin-left: 0;
  padding: 0;

  list-style: none;

  user-select: none;

  color: #212528;
  border-radius: 3px;

  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  touch-action: pan-y;
  -webkit-tap-highlight-color: transparent;
`;

const SlickListDraggable = styled.div`
  position: relative;

  display: block;
  overflow: hidden;

  box-sizing: border-box;
  margin: 0;
  margin-right: -8px;
  margin-left: -8px;
  padding: 0;

  list-style: none;

  cursor: default !important;
  user-select: none;
  transform: translate3d(0, 0, 0);

  color: #212528;

  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -webkit-tap-highlight-color: transparent;
`;

const SlickTrack = styled.div`
  position: relative;
  top: 0;
  left: 0;

  display: block;

  box-sizing: border-box;
  width: 384px;

  list-style: none;

  cursor: default !important;
  user-select: none;
  transform: translate3d(0, 0, 0) !important;

  opacity: 1;
  color: #212528;

  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -webkit-tap-highlight-color: transparent;
`;

const GridItem = styled.div`
  display: flex;
  float: left;
  clear: inherit !important;

  box-sizing: border-box;
  width: 112px;
  height: 100%;
  min-height: 1px;
  margin-right: 8px;
  margin-left: 8px;
  padding: 0;

  list-style: none;

  cursor: default !important;
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
  -webkit-tap-highlight-color: transparent;
`;

const ProductSingleThumbnail = styled.a`
  display: block;
  overflow: hidden;

  box-sizing: border-box;

  list-style: none;

  cursor: pointer;
  user-select: none;
  transition: all 0.3s ease;
  text-decoration: none;

  color: #212528;
  border: 2px solid #f2f2f2;
  border-color: transparent;
  border-radius: 3px;
  outline: none !important;
  background: transparent;

  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -webkit-tap-highlight-color: transparent;
`;

const ProductSingleThumb = styled.img`
  display: block;

  box-sizing: border-box;
  width: 100%;
  max-width: 100%;

  list-style: none;

  cursor: pointer;
  user-select: none;
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
  -webkit-tap-highlight-color: transparent;
`;

const BigImageWrapper = styled.div`
  position: relative;

  display: block;
  overflow: hidden;

  box-sizing: border-box;
  height: 623px;
  margin: 0;
  margin-right: -8px;
  margin-left: -8px;
  padding: 0;

  list-style: none;

  cursor: -webkit-grab;
  user-select: none;
  transform: translate3d(0, 0, 0);

  color: #212528;

  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -webkit-tap-highlight-color: transparent;
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

  cursor: -webkit-grab;
  user-select: none;

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
  -webkit-tap-highlight-color: transparent;
`;

interface ProductImagesFragment {
  [x: string]: any;
}

interface ProductPhotoProp {
  productImages: ProductImagesFragment[];
  src: string;
  onSetSrc: (value: String) => void;
}

export const ProductPhoto: FC<ProductPhotoProp> = ({
  productImages,
  src,
  onSetSrc,
}) => {
  // const [src, setSrc] = useState(productImages[0].src);

  return (
    <ProductPhotoMain>
      <SinglePhoto>
        <BigImageWrapper>
          <Image src={src}></Image>
        </BigImageWrapper>
      </SinglePhoto>

      <Thumbnails>
        <SlickListDraggable>
          <SlickTrack>
            {productImages.map((newProductImages: any) => {
              return (
                <GridItem>
                  <ProductSingleThumbnail>
                    <ProductSingleThumb
                      onClick={() => {
                        onSetSrc(newProductImages.src);
                      }}
                      src={newProductImages.src}
                    ></ProductSingleThumb>
                  </ProductSingleThumbnail>
                </GridItem>
              );
            })}
          </SlickTrack>
        </SlickListDraggable>
      </Thumbnails>
    </ProductPhotoMain>
  );
};
