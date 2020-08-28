import { storiesOf } from "@storybook/react";
import React, { useState } from "react";
import { Offers } from "./Offers";
import data from "../../data";

const stories = storiesOf("Offers", module);

stories.addParameters({
  info: {
    inline: true,
    header: false,
  },
  options: {
    panelPosition: "right", // 操作面板在右边
  },
});

stories.add("默认", () => {
  const [productOptions, setProductOptions] = useState(data.product.options);

  return <Offers productOptions={productOptions} onChangeColor={() => {}} />;
});
