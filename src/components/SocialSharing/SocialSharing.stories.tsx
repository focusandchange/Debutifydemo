import { storiesOf } from "@storybook/react";
import React from "react";
import { SocialSharing } from "./SocialSharing";
const stories = storiesOf("SocialSharing", module);

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
  return <SocialSharing />;
});
