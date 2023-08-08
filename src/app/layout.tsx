import SessionProvider from "@/app/context/SessionProvider";
import Header from "./components/global/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <Header></Header>
        
        <SessionProvider>
          <main style={{margin: '50px'}}>
            {children}
          </main>
        </SessionProvider>
      </body>
    </html>
  )
}
