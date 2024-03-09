import { useQuery } from '@tanstack/react-query';
import axios, { AxiosPromise } from 'axios';
import { CharacterFetchResponse } from '../types/character';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (id: string): AxiosPromise<CharacterFetchResponse> => {
    return axios.post(API_URL,
        {
            query: `
                query{
                    Character(id: "${id}"){
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

export function useCharacter(id: string){
    const {data} = useQuery({
        queryFn: () => fetcher(id),
        queryKey: ['character', id],
        enabled: !!id
    });

    return{
        data: data?.data?.data?.Character
    }
}

