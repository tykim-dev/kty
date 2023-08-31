"use client";
import "@/app/globals.css";
import { darkTheme } from "@/app/style/theme";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { StyledEngineProvider } from "@mui/material";
// import SideVav from "@/app/widgets/layout/sidenav"

type Props = ({
  children: React.ReactNode;
  });

export default function AuthSession({ children }: Props) {
  // return <SessionProvider>{children}</SessionProvider>;
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        {/* <Header></Header> */}
        {/* <SideVav /> */}
        <SessionProvider>
            {children}
        </SessionProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}