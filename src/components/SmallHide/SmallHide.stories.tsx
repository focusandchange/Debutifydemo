import { storiesOf } from "@storybook/react";
import React from "react";
import { SmallHide } from "./SmallHide";
const stories = storiesOf("SmallHide", module);

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
  return <SmallHide />;
});
