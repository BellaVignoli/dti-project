"use client"

import styled from "styled-components"
import Image from 'next/image';
import Link from 'next/link';
import { useCharacter } from "../hooks/useCharacter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface CharacterProps{

}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
`

const NameHeader = styled.div`
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #404040;
    width: 75%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 10%;
`

const ImageContainer = styled.div`
    widht: 25%;
    display: flex;
    justify-content: flex-end;
    height: 200px;
`

const Button = styled.button`
    display: flex;
    align-items: center;
    top: 237px
    left: 128px

`
const queryClient = new QueryClient();

export default function Character({ searchParams }: { searchParams: { id: string }}) {
    const { data } = useCharacter(searchParams.id);
    console.log(data)
    return (
        <QueryClientProvider client={queryClient}>
        <NameHeader>
            <Container>
                <Button>
                <Link href="/">
                <Image
                    src="/button.png"
                    alt="Voltar"
                    width={48}
                    height={48}
                />
                </Link>
                </Button>
            </Container>
        </NameHeader>
        </QueryClientProvider>
    )
}