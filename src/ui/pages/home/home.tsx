"use client";
import { FC } from "react";
import { DefaultLayout } from "../../layouts";

// import {

// } from "./components";
import { useHomeViewModel } from "../../viewModels";
import { Select, TextField, Card, PaginationCustom } from "@/ui/components";
import {
  StyledCountriesContainer,
  StyledFilterContainer,
  StyledHome,
} from "./home.styles";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "next-themes";
import { Pagination } from "@mui/material";

export const Home: FC = () => {
  const {
    currentCountries,
    handleSearchChange,
    handleRegionChange,
    handlePageChange,
    currentPage,
    totalPages,
    regionsOptions,
    handleRedirectToCountry,
  } = useHomeViewModel();

  return (
    <DefaultLayout>
      <StyledHome>
        <StyledFilterContainer>
          <TextField
            type="search"
            onChange={handleSearchChange}
            placeholder="Search for a country..."
            className="w-full max-w-lg min-w-[280px]"
            IconElement={SearchIcon}
          />
          <Select
            className="max-w-[198px]"
            onChange={handleRegionChange}
            defaultValue={"none"}
            options={regionsOptions}
          />
        </StyledFilterContainer>
        <StyledCountriesContainer>
          {currentCountries.map((country, key) => (
            <Card
              key={`${country}-${key}`}
              image={country.flags.png}
              country={country.name}
              population={country.population}
              region={country.region}
              capital={country.capital}
              onClick={() => handleRedirectToCountry(country.name)}
            />
          ))}
        </StyledCountriesContainer>
        {!!totalPages && (
          <div className="mx-auto w-fit">
            <PaginationCustom
              className=""
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
            />
          </div>
        )}
      </StyledHome>
    </DefaultLayout>
  );
};
