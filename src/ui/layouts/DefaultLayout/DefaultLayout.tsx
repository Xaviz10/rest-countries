"use client";
import { FC, PropsWithChildren } from "react";
import { Header } from "../../components";
import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import { StyledDefaultLayout } from "./DefaultLayout.styles";

export const DefaultLayout: FC<PropsWithChildren> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

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
