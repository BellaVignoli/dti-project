import styled from "styled-components"

interface CharacterCardProps{
    image: string, 
    name: string,
    origem: string,
    status: string,
    especie: string,
    genero: string,
}

const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 320px;
    height: 600px;
    top: 351px;
    left: 20px;
    border-radius: 0px, 0px, 20px, 20px;
    background: #F5F5F5;
    animation-timing-function: ease-out;
    animation-duration: 300ms;
    gap: 20px;
    box-sizing: border;
    margin-top: 32px;
    margin-left: 32px;
    margin-right: 32px;
    margin-bottom: 32px;

    img{
        width: 320px;
        height: 320px;
    }

    h1{
        width: Fixed (320px);
        height: Hug (247px);
        padding: 0px, 20px, 40px, 20px;
        gap: 10px;

    }

    h2{
        width: 280px;
        height: 31px;
        font-family: Noto Sans;
        font-size: 24px;
        font-weight: 500;
        line-height: 31px;
        letter-spacing: 0em;
        text-align: left;
        color: #474747;
    }

    h3{
        width: 280px;
        height: 19px;
        font-family: Noto Sans;
        font-size: 15px;
        font-style: italic;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: left;
        color: #717171;
    }

    p{
        width: 57px;
        height: 52px;
        gap: 8px
        background: #474747;
        font-family: Noto Sans;
        font-size: 16px;
        font-weight: 300;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;


    }

    h4{
        width: Fill (280px)
        height: Hug (52px)
        justify: space-between

    }

    div{
        width: Fill (280px);
        height: Hug (52px);
        justify: space-between;

    }

    button{
        width: 60%;
        height: 50px;
        padding: 0 20px; 
        border-radius: 25px;
        background: #33B4C4;
        color: white;
        font-size: 16px;
        font-weight: bold;
        border: none; 
        cursor: pointer; 

    }
`

export function CharacterCard(props: CharacterCardProps){
    return(
        <Card>
            <img src={props.image}/>
            <h1>
            <h2>{props.name}</h2>
            <h3>{props.origem}</h3>
            <h4>
            <div>
            <p>Status {props.status}</p> <p>Specie {props.especie}</p> <p>Gender {props.genero}</p>
            </div>
            </h4>
            </h1>
            <button onClick={() => { /* Adicione sua lógica de redirecionamento aqui */ }}>Ver mais sobre</button>
        </Card>
    )
}