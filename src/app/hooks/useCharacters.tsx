import { useQuery } from '@tanstack/react-query';
import axios, { AxiosPromise } from 'axios';
import { CharactersFetchResponse } from '../types/characters-response';

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
    const { data } = useQuery({
        queryFn: fetcher,
        queryKey: ['characters']
    })

    return{
        data: data?.data?.data?.allCharacters
    }
}