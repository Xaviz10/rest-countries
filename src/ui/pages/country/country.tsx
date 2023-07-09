"use client";
import { FC } from "react";
import { DefaultLayout } from "../../layouts";

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
import { useCountryViewModel } from "@/ui/viewModels";

export const Country: FC = () => {
  const { countryData, handleRedirect } = useCountryViewModel();

  return (
    <DefaultLayout>
      <StyledCountrySection>
        <Button className="px-8 w-32" onClick={() => handleRedirect("/")}>
          <ArrowBackIcon />
          Back
        </Button>
        {countryData ? (
          <StyledInnerContainer>
            <div>
              <StyledImage
                src={countryData?.flags.svg}
                alt={`${countryData.name} Flag`}
                title={`${countryData.name} Flag`}
              />
            </div>
            <StyledInfoContainer>
              <h1>{countryData.name}</h1>
              <div className="flex flex-col gap-2 sm:gap-16 md:gap-2 sm:flex-row">
                <StyledInfoList>
                  <li>
                    <strong>Native Name:</strong>{" "}
                    <span>{countryData.nativeName}</span>
                  </li>
                  <li>
                    <strong>Population:</strong>{" "}
                    <span>{countryData.population}</span>
                  </li>
                  <li>
                    <strong>Region:</strong> <span>{countryData.region}</span>
                  </li>
                  <li>
                    <strong>Sub Region:</strong>{" "}
                    <span>{countryData.subregion}</span>
                  </li>
                  <li>
                    <strong>Capital:</strong> <span>{countryData.capital}</span>
                  </li>
                </StyledInfoList>
                <StyledInfoList>
                  <li className="pt-4 lg:pt-0">
                    <strong>Top Level Domain:</strong>{" "}
                    <span>{countryData.topLevelDomain[0]}</span>
                  </li>
                  <li className="word-wrap">
                    <strong>Currencies:</strong>{" "}
                    <span>
                      {countryData.currencies
                        .map((currency) => currency.name)
                        .join(", ")}
                    </span>
                  </li>
                  <li>
                    <strong>Languages:</strong>{" "}
                    <span>
                      {countryData.languages
                        .map((language) => language.name)
                        .join(", ")}
                    </span>
                  </li>
                </StyledInfoList>
              </div>
              <StyledBorderCountriesContainer>
                <p>Border Countries: </p>{" "}
                <StyledBorderCountriesList>
                  {countryData.borders.map((border) => (
                    <li className="w-16" key={`border-${border}`}>
                      <Button
                        className="w-16"
                        onClick={() =>
                          handleRedirect(`/country?alpha=${border}`)
                        }
                      >
                        {border}
                      </Button>
                    </li>
                  ))}
                </StyledBorderCountriesList>
              </StyledBorderCountriesContainer>
            </StyledInfoContainer>
          </StyledInnerContainer>
        ) : (
          <StyledInnerContainer></StyledInnerContainer>
        )}
      </StyledCountrySection>
    </DefaultLayout>
  );
};
