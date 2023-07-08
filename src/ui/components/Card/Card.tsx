"use client";
import { FC, MouseEventHandler } from "react";
import { StyledCard, StyledImage, StyledInfoContainer } from "./Card.styles";

interface CardProps {
  image: string;
  country: string;
  population: string;
  region: string;
  capital: string;
  onClick?: MouseEventHandler<HTMLElement>;
}

export const Card: FC<CardProps> = ({
  image,
  country,
  population,
  region,
  capital,
  onClick,
}) => {
  return (
    <StyledCard onClick={onClick}>
      <StyledImage
        src={image}
        alt={`${country} Flag`}
        title={`${country} Flag`}
      />
      <StyledInfoContainer>
        <h3>{country}</h3>
        <p>
          <strong>Population:</strong>
          {population}
        </p>
        <p>
          <strong>Region:</strong>
          {region}
        </p>
        <p>
          <strong>Capital:</strong>
          {capital}
        </p>
      </StyledInfoContainer>
    </StyledCard>
  );
};
