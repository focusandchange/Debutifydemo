import { FC } from "react";
import React from "react";
import styled from "styled-components";

const SocialSharingMain = styled.div`
  box-sizing: border-box;
  margin-top: 16px;
  margin-bottom: 0 !important;
  margin-left: 0;

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

const ShareOnFacebook = styled.a`
  display: inline-block;

  box-sizing: border-box;
  width: auto;
  margin: 0;
  margin-right: 4px;
  margin-bottom: 0 !important;
  padding: 6px 10px;

  list-style: none;

  cursor: pointer;
  user-select: none;
  transition: all 0.3s ease;
  text-align: center;
  vertical-align: middle;
  white-space: normal;
  text-decoration: none;
  letter-spacing: 0.5px;
  text-transform: initial;

  color: #212528;
  border: 2px solid #f2f2f2;
  border-color: #f7f7f7;
  border-radius: 3px;
  outline: none !important;
  background: transparent;
  background-color: #f7f7f7;

  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
`;

const Symbol = styled.span`
  display: inline-block;

  box-sizing: border-box;

  list-style: none;

  cursor: pointer;
  user-select: none;
  text-align: center;
  white-space: normal;
  letter-spacing: 0.5px;
  text-transform: initial;

  color: #212528;

  font-family: "Font Awesome 5 Brands";
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  font-variant: normal;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  text-rendering: auto;
`;

const ShareTitle = styled.span`
  box-sizing: border-box;

  list-style: none;

  cursor: pointer;
  user-select: none;
  text-align: center;
  white-space: normal;
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

export const SocialSharing: FC = () => {
  return (
    <SocialSharingMain>
      <ShareOnFacebook>
        <Symbol></Symbol>
        <ShareTitle>Share</ShareTitle>
      </ShareOnFacebook>

      <ShareOnFacebook>
        <Symbol></Symbol>
        <ShareTitle>Tweet</ShareTitle>
      </ShareOnFacebook>
      <ShareOnFacebook>
        <Symbol></Symbol>
        <ShareTitle>Pin it</ShareTitle>
      </ShareOnFacebook>
    </SocialSharingMain>
  );
};
