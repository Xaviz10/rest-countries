import styled from "styled-components";
import tw from "twin.macro";

export const StyledCountrySection = styled.section.attrs((props) => ({
  className: props.className,
}))`
  ${tw`
  px-4 py-6
  flex
  flex-col
  h-full
  lg:(px-16 py-20 mx-auto)
    `}
`;

export const StyledInnerContainer = styled.div.attrs((props) => ({
  className: props.className,
}))`
  ${tw`
  w-full
  h-full
  py-6
  flex
  flex-col
  md:(pt-20 flex-row items-center justify-center max-w-7xl mx-auto)
  xl:(my-auto)
    `}
  gap: 16px calc(35px + 5vw);
`;

export const StyledImage = styled.img.attrs((props) => ({
  className: props.className,
}))`
  ${tw`w-full md:(max-w-[420px]) lg:(max-w-[540px]) `}
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.10);
`;

export const StyledInfoContainer = styled.article.attrs((props) => ({
  className: props.className,
}))`
  ${tw`relative flex flex-col gap-4 lg:(py-6 h-40) justify-center text-lightMode-text dark:text-darkMode-text`}
  flex: 1 1;
  overflow-wrap: anywhere;
  > h1 {
    ${tw`pb-2 text-3xl font-extrabold`}
  }
  }
`;

export const StyledInfoList = styled.ul.attrs((props) => ({
  className: props.className,
}))`
  ${tw`relative flex flex-col gap-2 lg:(gap-1 gap-x-4) `}
  overflow-wrap: anywhere;
  > li {
    > strong {
      ${tw`font-semibold text-lightMode-text dark:text-darkMode-text`}
    }
    > span {
      ${tw`font-light`}
    }
  }
`;

export const StyledBorderCountriesContainer = styled.div.attrs((props) => ({
  className: props.className,
}))`
  ${tw`relative pt-6 flex flex-col  gap-2 lg:( grid )`}
  grid-template-columns: 130px auto;
`;

export const StyledBorderCountriesList = styled.ul.attrs((props) => ({
  className: props.className,
}))`
  ${tw`relative flex flex-wrap items-center gap-2 `}

  > li {
  }
`;
