"use client";
import "./globals.css";
import { darkTheme } from "./style/theme";
import SessionProvider from "@/app/context/SessionProvider";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { StyledEngineProvider } from "@mui/material";
import Header from "./components/global/header";
// import SideVav from "@/app/widgets/layout/sidenav"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
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
      </body>
    </html>
  )
}
