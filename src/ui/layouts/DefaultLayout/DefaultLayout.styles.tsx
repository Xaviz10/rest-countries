"use client";
import styled from "styled-components";
import tw from "twin.macro";

export const StyledDefaultLayout = styled.div.attrs({
  className: "StyledDefaultLayout",
})`
  ${tw`
  bg-lightMode-background dark:bg-darkMode-background
  min-h-screen
`}
`;
