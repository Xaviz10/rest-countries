"use client";
import { FC, PropsWithChildren } from "react";
import { Header } from "../../components";
import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import { StyledDefaultLayout } from "./DefaultLayout.styles";
import axios, { InternalAxiosRequestConfig } from "axios";

export const DefaultLayout: FC<PropsWithChildren> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  axios.defaults.baseURL = "https://restcountries.com/v2/";

  const handleRequestSuccess = (
    request: InternalAxiosRequestConfig<any>
  ): InternalAxiosRequestConfig<any> => {
    const { headers } = request;
    if (headers) {
      headers["Content-Type"] = "application/json";
      headers.accept = "application/json";
    }
    return request;
  };

  const handleRequestError = (error: any) => {
    console.log(`REQUEST ERROR! => ${error}`);
    return error;
  };

  axios.interceptors.request.use(handleRequestSuccess, handleRequestError);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <StyledDefaultLayout>
      <ThemeProvider attribute="class">
        <Header />
        <main>{children}</main>
      </ThemeProvider>
    </StyledDefaultLayout>
  );
};
