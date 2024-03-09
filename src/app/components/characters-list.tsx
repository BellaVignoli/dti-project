"use client"

import { useCharacters } from "../hooks/useCharacters"
import { CharacterCard } from "./character-card";
import {styled } from "styled-components"

const ListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); 
    width: 100%; 
    grid-gap: 10px;
    max-width: 1468px; 
    padding: 0 20px; 
    align-items: center;


@media (max-width: 768px) {
    ListContainer {
        grid-template-columns: 1fr;
    }
}
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