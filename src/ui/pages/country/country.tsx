"use client";
import { FC } from "react";
import { DefaultLayout } from "../../layouts";

import { Select, TextField, Card } from "@/ui/components";
import {
  StyledBorderCountriesContainer,
  StyledBorderCountriesList,
  StyledCountrySection,
  StyledImage,
  StyledInfoContainer,
  StyledInfoList,
  StyledInnerContainer,
} from "./country.styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@/ui/components/Button";
import { useRouter } from "next/navigation";
import { useCountryViewModel } from "@/ui/viewModels";

export const Country: FC = () => {
  const { handleRedirect } = useCountryViewModel();
  const countryData = {
    flag: "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg",
    country: "Colombia",
    nativeName: "Colombia",
    domain: ".co",
    population: "52.215.503",
    currency: "COP",
    region: "America",
    languages: "Spanish",
    subRegion: "South America",
    capital: "Bogotá",
  };

  return (
    <DefaultLayout>
      <StyledCountrySection>
        <Button className="px-8" onClick={() => handleRedirect("/")}>
          <ArrowBackIcon />
          Back
        </Button>
        <StyledInnerContainer>
          <StyledImage
            src={countryData.flag}
            alt={`${countryData.country} Flag`}
            title={`${countryData.country} Flag`}
          />
          <StyledInfoContainer>
            <h1>{countryData.country}</h1>
            <StyledInfoList>
              <li>
                <strong>Native Name:</strong>
                {countryData.nativeName}
              </li>
              <li>
                <strong>Population:</strong>
                {countryData.population}
              </li>
              <li>
                <strong>Region:</strong>
                {countryData.region}
              </li>
              <li>
                <strong>Sub Region:</strong>
                {countryData.subRegion}
              </li>
              <li>
                <strong>Capital:</strong>
                {countryData.capital}
              </li>
              <li className="pt-4 lg:pt-0">
                <strong>Top Level Domain:</strong>
                {countryData.domain}
              </li>
              <li>
                <strong>Currencies:</strong>
                {countryData.currency}
              </li>
              <li>
                <strong>Languages:</strong>
                {countryData.languages}
              </li>
            </StyledInfoList>
            <StyledBorderCountriesContainer>
              <p>Border Countries: </p>
              <StyledBorderCountriesList>
                <li>
                  <Button>Venezuela</Button>
                </li>
                <li>
                  <Button>Peru</Button>
                </li>
                <li>
                  <Button>Ecuador</Button>
                </li>
              </StyledBorderCountriesList>
            </StyledBorderCountriesContainer>
          </StyledInfoContainer>
        </StyledInnerContainer>
      </StyledCountrySection>
    </DefaultLayout>
  );
};
