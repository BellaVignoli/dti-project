"use client"

import styled from "styled-components"
import Image from 'next/image';

interface HeaderProps {

}

const TagHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 24px;
    background-color: #CFE071;

    @media (min-width: 768px) {
        padding: 20px 100px;
    }
`

const Logo = styled.a`
    display: flex;
    align-items: center;
`

export function Header(props: HeaderProps) {
    return (
        <TagHeader>
            <Logo>
                <Image
                    src="/logofinal.png"
                    alt="Logo Header"
                    width={180}
                    height={180}
                    priority
                />
            </Logo>
            <div></div>
        </TagHeader>
    )
}