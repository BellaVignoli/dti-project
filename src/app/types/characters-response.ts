import { Character } from './character';

export interface CharactersFetchResponse {
    data: {
        allCharacters: Character[]
    }
}