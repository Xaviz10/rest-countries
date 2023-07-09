import { countryDataService } from "@/data/services/country.data.service";
import { CountryEntity } from "@/domain/entities";
import { useCaseCountry } from "@/domain/useCases";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";

export function useCountryViewModel() {
  const { push } = useRouter();
  const { get, getByAlpha } = useCaseCountry(countryDataService());
  const searchParams = useSearchParams();

  const [countryData, setCountryData] = useState<CountryEntity | null>(null);

  const alpha = searchParams.get("alpha");

  function handleRedirect(url: string) {
    push(url);
  }

  function handleCountryDataSuccess(data: CountryEntity) {
    setCountryData(data);
  }

  useEffect(() => {
    alpha &&
      getByAlpha({ alphaCode: alpha, success: handleCountryDataSuccess });
  }, [alpha]);

  useLayoutEffect(() => {
    const name = searchParams.get("name");
    name && get({ name, success: handleCountryDataSuccess });
  }, []);

  return { countryData, handleRedirect };
}
