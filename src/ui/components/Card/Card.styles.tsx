"use client";
import styled from "styled-components";
import tw from "twin.macro";

export const StyledCard = styled.article.attrs((props) => ({
  className: props.className,
}))`
  ${tw`
  w-80 h-96 sm:(w-64 h-80) 
  bg-lightMode-elements dark:bg-darkMode-elements
  rounded
  cursor-pointer
  `}
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.10);
`;

export const StyledImage = styled.img.attrs((props) => ({
  className: props.className,
}))`
  ${tw`rounded-t`}
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.10);
`;

export const StyledInfoContainer = styled.div.attrs((props) => ({
  className: props.className,
}))`
  ${tw`relative flex flex-col gap-1 p-6 text-lightMode-text dark:text-darkMode-text`}

  > h3 {
    ${tw`pb-2 font-extrabold`}
  }

  > p {
    ${tw`flex gap-2 text-sm`}
    > strong {
      ${tw`font-semibold`}
    }
  }
`;
