import { useQuery } from '@tanstack/react-query';
import axios, { AxiosPromise } from 'axios';
import { CharactersFetchResponse } from '../types/characters-response';
import { useFilter } from './useFilter';
import { useDeferredValue } from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (): AxiosPromise<CharactersFetchResponse> => {
    return axios.post(API_URL,
        {
            query: `
                query{
                    allCharacters{
                      id
                      name
                      genero
                      status
                      localidade
                      origem
                      especie
                      image_url
                    }
                }`
        }
    )
}

export function useCharacters(){
    const {search} = useFilter();
    const searchDeferred = useDeferredValue(search);
    const { data } = useQuery({
        queryFn: fetcher,
        queryKey: ['characters']
    })

    const characters = data?.data?.data?.allCharacters
    const filteredCharacters = characters?.filter(character => character.name.toLowerCase().includes(searchDeferred.toLowerCase()))
    return{
        data: filteredCharacters
    }
}