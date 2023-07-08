"use client";
import { FC } from "react";
import { DefaultLayout } from "../../layouts";

// import {

// } from "./components";
import { useHomeViewModel } from "../../viewModels";
import { Select, TextField, Card } from "@/ui/components";
import {
  StyledCountriesContainer,
  StyledFilterContainer,
  StyledHome,
} from "./home.styles";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "next-themes";

export const Home: FC = () => {
  // const { theme } = useHomeViewModel();

  return (
    <DefaultLayout>
      <StyledHome>
        <StyledFilterContainer>
          <TextField
            placeholder="Search for a country..."
            className="w-full max-w-lg min-w-[280px]"
            IconElement={SearchIcon}
          />
          <Select
            className="max-w-[198px]"
            defaultValue={"none"}
            options={[
              { id: "none", name: "Filter by Region" },
              { id: 1, name: "Africa" },
              { id: 2, name: "America" },
              { id: 3, name: "Asia" },
              { id: 4, name: "Europe" },
              { id: 5, name: "Oceania" },
            ]}
          />
        </StyledFilterContainer>
        <StyledCountriesContainer>
          <Card
            image="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg"
            country="Colombia"
            population="52.215.503"
            region="America"
            capital="Bogotá"
          />
          <Card
            image="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg"
            country="Colombia"
            population="52.215.503"
            region="America"
            capital="Bogotá"
          />
          <Card
            image="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg"
            country="Colombia"
            population="52.215.503"
            region="America"
            capital="Bogotá"
          />
          <Card
            image="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg"
            country="Colombia"
            population="52.215.503"
            region="America"
            capital="Bogotá"
          />
          <Card
            image="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg"
            country="Colombia"
            population="52.215.503"
            region="America"
            capital="Bogotá"
          />
          <Card
            image="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg"
            country="Colombia"
            population="52.215.503"
            region="America"
            capital="Bogotá"
          />
          <Card
            image="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg"
            country="Colombia"
            population="52.215.503"
            region="America"
            capital="Bogotá"
          />
          <Card
            image="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg"
            country="Colombia"
            population="52.215.503"
            region="America"
            capital="Bogotá"
          />
          <Card
            image="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg"
            country="Colombia"
            population="52.215.503"
            region="America"
            capital="Bogotá"
          />
        </StyledCountriesContainer>
      </StyledHome>
    </DefaultLayout>
  );
};
