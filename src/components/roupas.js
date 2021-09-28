import React from 'react';
import styled from 'styled-components';
const produtos = [
    {
        id:1,
        nome: `Roupa Espacial Normal`,
        preco: 1500,
        imagem: `https://ichef.bbci.co.uk/news/224/amz/worldservice/live/assets/images/2014/05/02/140502075522_nasa_z1_spacesuit_224x280_nasa.jpg`
    },
    {
        id:2,
        nome: `Roupa Espacial Versão Premium`,
        preco: 1800,
        imagem: `https://w7.pngwing.com/pngs/424/49/png-transparent-astronaut-space-suit-outer-space-space-exploration-astronaut-chemical-space-mitsubishi.png`
    },
    {
        id:3,
        nome: `Roupa Espacial Laranja`,
        preco: 1600,
        imagem: `https://i.pinimg.com/originals/d9/45/21/d94521ee32233b8ad3a3befe7d85242a.jpg`
    },
    {
        id:4,
        nome: `Roupa Espacial Com detalhes Laranjas`,
        preco: 2500,
        imagem: `https://media.istockphoto.com/photos/astronaut-in-a-space-suit-picture-id155378758`
    }
]

const ProductContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px 20px;
`

const ProductCard = styled.div`
    display: flex;
    flex-direction: column;
    background: lightblue;
    height:340px;
    align-items: center;
    border: 1px solid black;
    border-radius: 5px;
    margin: 5px;
    button{
        width:40%;
        margin-bottom:20px;
    }
    
`

const ImageCard = styled.img`
    width:200px;
    height: 200px;
    margin: 5px auto 0 auto;
`

class Roupas  extends React.Component {
    render() {
        return (
            <ProductContainer>
                {produtos.map((produto)=> 
                    <ProductCard>
                        <ImageCard src={produto.imagem}/>
                        <p>{produto.nome}</p>
                        <p>{produto.preco}</p>
                        <button>Adicionar ao carrinho</button>
                    </ProductCard>)} 
            </ProductContainer>
        )
    }
}

export default Roupas