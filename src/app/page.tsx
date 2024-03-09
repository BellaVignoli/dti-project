"use client"

import Image from "next/image";
import styles from "../../public/styles/Navbar.module.css"
import backgroundImage from "../../public/ricky.png"
import { CharactersList } from "./components/characters-list";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FirstSection } from '../app/components/first-section';
import { PrimaryInputWSearchIcon } from '../app/components/primary-input';

export default function Home() {
  const client = new QueryClient();
  return(
    <QueryClientProvider client={client}>
    <main className={styles.main}>
      <FirstSection />
      <PrimaryInputWSearchIcon />
      <CharactersList />
    </main>
    </QueryClientProvider>
  )
}