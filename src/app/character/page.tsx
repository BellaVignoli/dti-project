"use client"
import styled from "styled-components"
import Image from 'next/image';
import Link from 'next/link';
import { useCharacter } from "../hooks/useCharacter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useCharacters } from "../hooks/useCharacters";

interface CharacterProps{

}

const Container = styled.div`
    width: Fill (280px);
    height: Hug (52px);
    justify: space-between;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 8px;
    margin-top: 250px;
    margin-left: 50px;
    margin-right: 100px;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr; /* Altera para uma única coluna */
        gap:200px;
    }

`

const IndividualContainer = styled.div`
    width: Hug (200px)
    height: Hug (245px)
    gap: 24px
    font-family: Noto Sans;
    font-size: 32px;
    font-weight: 700;
    line-height: 44px;
    letter-spacing: 0em;
    text-align: center;
`
const IconContainer = styled.div`
    width: Hug (200px)
    height: Hug (245px)
    gap: 24px
    text-align: center;
    margin-left: 120px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        align-items: center;
    }
`

const Subtitle = styled.p`
    font-family: Noto Sans;
    font-size: 24px;
    font-weight: 700;
    line-height: 33px;
    letter-spacing: 0em;
    text-align: center;
    color: #A8C700;
`

const NameHeader = styled.div`
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #404040;
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 10%;
    padding-right: 25%;
    position: relative;
`

const ImageContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    height: 400px;
    padding-left: 10%;
    padding-right: 10%;
    position: absolute;
    right: 0%;
    top: 0%;
    overflow: visible;

    @media (max-width: 768px) {
        position: relative;
    }
`

const Button = styled.button`
    display: flex;
    align-items: center;
    margin-right: 20px;
    cursor: pointer;
    z-index: 1;
`

const Title = styled.h1`
    width: 385px
    height: 82px
    font-family: Noto Sans;
    font-size: 60px;
    font-weight: 700;
    line-height: 82px;
    letter-spacing: 0em;
    text-align: center;
    color: #FFFFFF;
    position: absolute;
    top: 50%; 
    left: 35%;
    transform: translate(-50%, -50%);
`

const Grid = styled.div`
    display: grid;
    grid-template-colums: 2fr 1fr;
    grid-gap: 20px;
    width: 100%;
`

export default function Character({ searchParams }: { searchParams: { id: string }}) {
    const {data} = useCharacter(searchParams.id);
    const client = new QueryClient();
    return (
        <QueryClientProvider client={client}>
            <Grid>
            <NameHeader>
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
            <Title>{data?.name}</Title>
            <ImageContainer>
                <img src={data?.image_url}/>
            </ImageContainer>
            </NameHeader>
            </Grid>
            <Container>
                <IndividualContainer>
                <IconContainer>
                    <Image
                        src="/person.png"
                        alt="Status"
                        width={48}
                        height={48}
                    />
                </IconContainer>
                <Subtitle>Status</Subtitle>
                {data?.status}
                </IndividualContainer>
                <IndividualContainer>
                <IconContainer>
                    <Image
                        src="/digital.png"
                        alt="Status"
                        width={48}
                        height={48}
                    />
                </IconContainer>
                <Subtitle>Species</Subtitle>
                {data?.especie}
                </IndividualContainer>
                <IndividualContainer>
                <IconContainer>
                    <Image
                        src="/face.png"
                        alt="Status"
                        width={48}
                        height={48}
                    />
                </IconContainer>
                <Subtitle>Gender</Subtitle>
                {data?.genero}
                </IndividualContainer>
                <IndividualContainer>
                <IconContainer>
                    <Image
                        src="/world.png"
                        alt="Status"
                        width={48}
                        height={48}
                    />
                </IconContainer>
                <Subtitle>Origin</Subtitle>
                {data?.origem}
                </IndividualContainer>
                <IndividualContainer>
                <IconContainer>
                    <Image
                        src="/location.png"
                        alt="Status"
                        width={48}
                        height={48}
                    />
                </IconContainer>
                <Subtitle>Location</Subtitle>
                {data?.localidade}
                </IndividualContainer>
            </Container>
        </QueryClientProvider>
    )
}