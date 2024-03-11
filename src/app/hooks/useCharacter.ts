"use client"

import { useQuery } from '@tanstack/react-query';
import axios, { AxiosPromise } from 'axios';
import { CharacterFetchResponse } from '../types/character';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, useEffect } from 'react';
import { Character } from '../types/character';

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (id: string): AxiosPromise<CharacterFetchResponse> => {
    //console.log(id)
    return axios.post(API_URL,
        {
            query: `
            query{
                Character(id: "${id}"){
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
    console.log(id)
    
    // const {data} = useQuery({
    //     queryFn: () => fetcher(id),
    //     queryKey: ['Character', id],
    //     enabled: !!id,
    // });
    const [result, setResult] = useState<Character | null>(null);
    useEffect(() => {
        const data = fetcher(id);
        data.then((response) => {
            setResult(response.data.data.Character);
        }).catch((error) => {
            console.error(error);
        });
        
    }, [id]);
    return{
        data: result
        //data: data?.data?.data?.Character
    }
}

