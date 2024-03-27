import { ReactNode } from "react";
import Head from "next/head";

import { Navbar } from "@/components/Navbar";
import { StyledMain } from "./style";

export const Layout = ({
  title = "Pokémons",
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <StyledMain>
        <Navbar />
        <div className="container">{children}</div>
      </StyledMain>
    </>
  );
};
