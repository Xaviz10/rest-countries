import tw from "twin.macro";
import { styled } from "styled-components";

export const Button = styled.button.attrs((props) => ({
  className: props.className,
}))`
  ${tw`
  p-2
  flex 
  items-center
  gap-1 
  w-fit
  text-xs
  lg:(text-base p-4 gap-2)
  `}
`;
