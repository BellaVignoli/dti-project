"use client"

import Image from "next/image";
import styles from "../../public/styles/Navbar.module.css"
import backgroundImage from "../../public/ricky.png"
import { CharactersList } from "./components/characters-list";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FirstSection } from '../app/components/first-section';
import { PrimaryInputWSearchIcon } from '../app/components/primary-input';
import { FilterContextProvider } from '../app/contexts/filter-context';
import {useFilter} from '../app/hooks/useFilter';

export default function Home() {
  const {setSearch, search} = useFilter();
  const client = new QueryClient();
  return(
    <QueryClientProvider client={client}>
    <main className={styles.main}>
      <FirstSection />
      <FilterContextProvider>
      <PrimaryInputWSearchIcon 
        value={search}
        handleChange={setSearch}
        placeholder="Buscar personagem"
      />
      <CharactersList />
      </FilterContextProvider>
    </main>
    </QueryClientProvider>
  )
}