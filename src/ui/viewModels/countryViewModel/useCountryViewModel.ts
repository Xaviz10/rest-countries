import { useRouter } from "next/navigation";

export function useCountryViewModel() {
  const { push } = useRouter();

  function handleRedirect(url: string) {
    push(url);
  }

  return { handleRedirect };
}
