"use client"

import { InputHTMLAttributes } from "react";
import { styled } from "styled-components";
import { SearchIcon } from "../../../public/search-icon";

export const PrimaryInput = styled.input`
    width: 352px;
    border-radius: 8px;
    border: none;
    padding: 10px 16px;

    background-color: var(--bg-secondary);

    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: var(--text-dark);
`

const InputContainer = styled.div`
    position: relative;
    width: 352px;
    padding: 20px;
    padding-left: 20px;

    svg {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }
`
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    value: string,
    handleChange: (value: string ) => void
}

export function PrimaryInputWSearchIcon({ handleChange, value, ...props }: InputProps){
    return (
        <InputContainer>
            <PrimaryInput 
                onChange={(event) => handleChange(event.target.value)} 
                value = {value}
                {...props}
            />
            <SearchIcon/>
        </InputContainer>
    )
}
