import { FC, PropsWithChildren } from "react";
import { Header } from "../../components";

export const DefaultLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};
