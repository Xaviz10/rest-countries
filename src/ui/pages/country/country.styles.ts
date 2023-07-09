import styled from "styled-components";
import tw from "twin.macro";

export const StyledCountrySection = styled.section.attrs((props) => ({
  className: props.className,
}))`
  ${tw`
  px-4 py-6
  flex
  flex-col
  lg:(px-16 py-20 mx-auto)
    `}
`;

export const StyledInnerContainer = styled.div.attrs((props) => ({
  className: props.className,
}))`
  ${tw`
  w-full
  py-6
  flex
  flex-col
  lg:(pt-20 flex-row items-center justify-between max-w-7xl mx-auto)
  xl:(my-auto)
    `}
`;

export const StyledImage = styled.img.attrs((props) => ({
  className: props.className,
}))`
  ${tw`max-w-[540px] `}
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.10);
`;

export const StyledInfoContainer = styled.article.attrs((props) => ({
  className: props.className,
}))`
  ${tw`relative flex flex-col gap-4 pt-12  lg:(p-6) justify-center text-lightMode-text dark:text-darkMode-text`}

  > h1 {
    ${tw`pb-2 text-3xl font-extrabold`}
  }
  }
`;

export const StyledInfoList = styled.ul.attrs((props) => ({
  className: props.className,
}))`
  ${tw`relative flex flex-col flex-wrap  gap-4 lg:(h-40 gap-1) `}

  > li {
    ${tw`flex gap-2 text-base`}
    > strong {
      ${tw`font-semibold`}
    }
  }
`;

export const StyledBorderCountriesContainer = styled.div.attrs((props) => ({
  className: props.className,
}))`
  ${tw`relative pt-6 flex flex-col  gap-2 lg:(items-center flex-row )`}
`;

export const StyledBorderCountriesList = styled.ul.attrs((props) => ({
  className: props.className,
}))`
  ${tw`relative flex flex-wrap items-center gap-2 `}

  > li {
  }
`;
