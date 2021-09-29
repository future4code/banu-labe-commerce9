import React from 'react';
import styled from 'styled-components';

const ProdutosContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
`

const Produto = styled.div`
    box-shadow: 1px 1px darkgray;
    text-align: center;
    
`
const ImagemProduto = styled.img`
    width: 100%;
    height: 70%;
`
const NomeProduto = styled.h3`
    text-align: center;
`

const ValorProduto = styled.p`
    text-align: center;
`
const BotaoAdicionar = styled.button` 
    background-color: white;
    color: black;
    border: none;
    border: 1px solid black;
    
`

class Roupas  extends React.Component {
    state = {
        produtos: [
            {
                id:20,
                nome: `Roupa Espacial Normal`,
                preco: 1500,
                imagem: `https://ichef.bbci.co.uk/news/224/amz/worldservice/live/assets/images/2014/05/02/140502075522_nasa_z1_spacesuit_224x280_nasa.jpg`
            },
            {
                id:21,
                nome: `Roupa Espacial Versão Premium`,
                preco: 1800,
                imagem: `https://w7.pngwing.com/pngs/424/49/png-transparent-astronaut-space-suit-outer-space-space-exploration-astronaut-chemical-space-mitsubishi.png`
            },
            {
                id:22,
                nome: `Roupa Espacial Laranja`,
                preco: 1600,
                imagem: `https://i.pinimg.com/originals/d9/45/21/d94521ee32233b8ad3a3befe7d85242a.jpg`
            },
            {
                id:23,
                nome: `Roupa Espacial Com detalhes Laranjas`,
                preco: 2500,
                imagem: `https://media.istockphoto.com/photos/astronaut-in-a-space-suit-picture-id155378758`
            }
        ]
    }
    render() {
        return (
            <ProdutosContainer>
                {this.state.produtos.map((produto)=> 
                    <Produto>
                        <ImagemProduto src={produto.imagem}/>
                        <NomeProduto>{produto.nome}</NomeProduto>
                        <ValorProduto>{produto.preco}</ValorProduto>
                        <BotaoAdicionar value={produto.id}>Adicionar ao carrinho</BotaoAdicionar>
                    </Produto>)} 
            </ProdutosContainer>
        )
    }
}

export default Roupas