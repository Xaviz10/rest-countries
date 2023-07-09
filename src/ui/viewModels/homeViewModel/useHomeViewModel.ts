import { countriesHomeDataService } from "@/data/services";
import { CountryCardEntity } from "@/domain/entities";
import { useCaseCountriesHome } from "@/domain/useCases";
import { SelectChangeEvent } from "@mui/material";
import { useRouter } from "next/navigation";
import {
  ChangeEvent,
  ChangeEventHandler,
  SetStateAction,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

export function useHomeViewModel() {
  const { push } = useRouter();
  const { get } = useCaseCountriesHome(countriesHomeDataService());

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const [totalPages, setTotalPages] = useState(0);
  const [allCountriesData, setAllCountriesData] = useState<
    CountryCardEntity[] | []
  >([]);
  const [currentCountries, setCurrentCountries] = useState<
    CountryCardEntity[] | []
  >([]);

  const [searchVal, setSearchVal] = useState("");
  const [region, setRegion] = useState("");

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;

  const regionsOptions = [
    { id: "none", name: "Filter by Region" },
    { id: 1, name: "Africa" },
    { id: 2, name: "America" },
    { id: 3, name: "Asia" },
    { id: 4, name: "Europe" },
    { id: 5, name: "Oceania" },
  ];

  function handleSearchChange(
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    setSearchVal(e.target.value);
  }

  function handleRegionChange(e: SelectChangeEvent<any>) {
    const regionSelected = regionsOptions.find(
      (region) => region.id == e.target.value
    )?.name;
    if (regionSelected) {
      setRegion(regionSelected);
    }
  }

  function handleCurrentCountriesToShow(
    searchedCountry: string,
    filteredRegion: string
  ) {
    const filteredByRegion = allCountriesData.filter((country) =>
      country.region.includes(filteredRegion)
    );

    const filteredByName = filteredByRegion.filter((country) =>
      country.name.toLowerCase().includes(searchedCountry.toLowerCase())
    );

    const finalCountries = filteredByName.slice(firstIndex, lastIndex);
    setTotalPages(Math.round(filteredByName.length / itemsPerPage));
    setCurrentCountries(finalCountries);
  }

  function handleCountriesDataSuccess(data: CountryCardEntity[]) {
    setAllCountriesData(data);
  }

  /**Pagination**/

  function handlePageChange(event: ChangeEvent<unknown>, page: number) {
    setCurrentPage(page);
  }

  /**On card Clicked */

  function handleRedirectToCountry(country: string) {
    push(`/country?name=${country}`);
  }

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  useEffect(() => {
    allCountriesData?.length && handleCurrentCountriesToShow(searchVal, region);
  }, [allCountriesData, searchVal, region, lastIndex, firstIndex]);

  useEffect(() => {
    get({ success: handleCountriesDataSuccess });
  }, []);

  return {
    currentCountries,
    handleSearchChange,
    handleRegionChange,
    handlePageChange,
    currentPage,
    itemsPerPage,
    totalPages,
    regionsOptions,
    handleRedirectToCountry,
  };
}
