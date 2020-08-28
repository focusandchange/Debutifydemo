import { storiesOf } from "@storybook/react";
import React, { useState } from "react";
import { ProductPhoto } from "./ProductPhoto";
import data from "../../data";
const stories = storiesOf("ProductPhoto", module);

stories.addParameters({
  info: {
    inline: true,
    header: false,
  },
  options: {
    panelPosition: "right", // 操作面板在右边
  },
});

// stories.add("默认", () => {
//   const [productImages, setProductImages] = useState(data.product.images);

//   return <ProductPhoto productImages={productImages} />;
// });
