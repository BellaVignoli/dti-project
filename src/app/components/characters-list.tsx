"use client"

import { useCharacters } from "../hooks/useCharacters"
import { CharacterCard } from "./character-card";
import {styled } from "styled-components"

const ListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 1,468px;
    height: 1,405px;
    grid-gap: 10px;
    max-width: 100%;
`

export function CharactersList() {
    const { data } = useCharacters();
    console.log(data)
    return (
        <ListContainer>
            {data?.map(character => 
            <CharacterCard
                key={character.id}
                name={character.name}
                origem={character.origem}
                status={character.status}
                especie={character.especie}
                genero={character.genero}
                image={character.image_url}
            />
            )}
        </ListContainer>
    )
}