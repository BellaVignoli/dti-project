"use client"

import styled from "styled-components"
import Image from 'next/image';
import { PrimaryInputWSearchIcon } from "../components/primary-input"

interface FirstSectionProps {

}

const FirstSectionContainer = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/ricky.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 10%;
`


const Title = styled.h1`
    color: #FFFFFF;
    font-size: 50px;
    position: absolute;
    width: 722px;
    height: 238px;
    left: 228px;
    top: 300px;
    justify-content: space-between;
    align-items: center;
`
const Subtitle = styled.p`
    color: #FFFFFF;
    font-size: 25px;
    position: absolute;
    justify-content: space-between;
    align-items: center;
`


export function FirstSection(props: FirstSectionProps) {
    return (
        <FirstSectionContainer>
                {/* <Image
                    className="linear-gradient(90deg, rgba(0, 0, 0, 0.6) 46.09%, rgba(0, 0, 0, 0.2) 64.27%)"
                    src="/ricky.png"
                    alt="Next.js Logo"
                    width={1920}
                    height={200}
                    priority
                /> */}
                <Title>
                    Filtro de Personagens
                    <Subtitle>
                        Confira os principais dados dos personagens de Rick and Morty, como seu nome, seu status e muito mais abaixo!
                    </Subtitle>
                </Title>
        </FirstSectionContainer>
    )
}