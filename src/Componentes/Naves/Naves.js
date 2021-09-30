import React from "react";
import styled, { ThemeConsumer } from "styled-components";
import soyuz09 from './imagens/soyuzms09.jpg';
import shenzhou from './imagens/shenzhou.jpeg';
import newshepard from './imagens/newshepard.jpg';
import spaceshiptwo from './imagens/spaceshiptwo.jpg';
import orion from './imagens/orion.jpg';
import dragonv2 from './imagens/dragonv2.jpg';
import dreamchaser from './imagens/dreamchaser.jpg';
import lynx from './imagens/lynx.jpg';
import starship from './imagens/starship.jpg';
import sls from './imagens/sls.jpg';

const ProdutosContainer = styled.div` 
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;

`
const Produto = styled.div` 
    box-shadow: 1px 1px darkgray;
    text-align: center;
`
const ImagemProduto = styled.img `  
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

class Naves extends React.Component{
    state = {
        naves: [
        {
            nome: 'Soyuz MS-09',
            imagem: soyuz09,
            preco: 10,
            id: 10,
           
        },
        {
            nome: 'Shenzhou',
            imagem: shenzhou,
            preco: 10,
            id: 11,

        },
        {
            nome: 'New Shepard',
            imagem: newshepard,
            preco: 10,
            id: 12,

        },
        {
            nome: 'SpaceShipTwo',
            imagem: spaceshiptwo,
            preco: 10,
            id: 13,

        },
        {
            nome: 'Orion',
            imagem: orion,
            preco: 10,
            id: 14,

        },
        {
            nome: 'Dragon V2',
            imagem: dragonv2,
            preco: 10,
            id: 15,

        },
        {
            nome: 'Dream Chaser',
            imagem: dreamchaser,
            preco: 10,
            id: 16,

        },
        {
            nome: 'Lynx',
            imagem: lynx,
            preco: 10,
            id: 17,

        },
        {
            nome: 'Starship',
            imagem: starship,
            preco: 10,
            id: 18,

        },
        {
            nome: 'Space Launch System',
            imagem: sls,
            preco: 10,
            id: 19,

        },
        ],

        carrinho: [],

    }


    adicionarCarrinho (id){
        const produtosEscolhidos = this.state.naves.filter((nave) =>{
            if (id === nave.id){
                return nave
            }
        })

        this.setState({carrinho: [
            ...this.state.carrinho,
            produtosEscolhidos
        ]})
        
        localStorage.setItem("carrinho", JSON.stringify(this.state.carrinho))
    }
    

    render(){
        
        return(
            <ProdutosContainer>   

                {this.state.naves.map((nave) =>{
                    return (
                        <Produto key={nave.id}>
                            <ImagemProduto src={nave.imagem} />
                            <NomeProduto>{nave.nome}</NomeProduto>
                            <ValorProduto>R${nave.preco},00</ValorProduto>
                            <BotaoAdicionar onClick={() => this.adicionarCarrinho(nave.id)}>Adicionar ao carrinho</BotaoAdicionar>
                        </Produto> 
                    )
                })}
            )

            </ProdutosContainer>
            
        )
    }
}

export default Naves