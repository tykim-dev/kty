import SessionProvider from "@/app/context/SessionProvider";
import { ThemeProvider } from "@material-tailwind/react";
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
        <ThemeProvider>
          <Header></Header>
          {/* <SideVav /> */}
          <SessionProvider>
            <main style={{margin: '50px'}}>
              {children}
            </main>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
