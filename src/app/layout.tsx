import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
// import { Header } from '../app/components/header';
import { Header } from '../app/components/header';
import { FirstSection } from '../app/components/first-section';
import { PrimaryInputWSearchIcon } from '../app/components/primary-input';
import { FilterContextProvider } from '../app/contexts/filter-context';

const inter = Noto_Sans({ subsets: ["latin"], weight: ['400', '700']});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <FilterContextProvider> */}
        <Header/>
        {/* <FirstSection/>
        <PrimaryInputWSearchIcon/> */}
        {children}
        {/* </FilterContextProvider> */}
      </body>
    </html>
  );
}
