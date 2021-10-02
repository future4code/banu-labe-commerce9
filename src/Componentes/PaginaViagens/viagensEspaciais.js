import React from "react";
import styled from "styled-components";

import mercurio from "./images/mercurio.jpg"
import venus from "./images/venus.jpg"
import terra from "./images/terra.jpg"
import marte from "./images/marte.jpg"
import jupiter from "./images/jupiter.jpg"
import saturno from "./images/saturno.jpg"
import urano from "./images/urano.jpg"
import netuno from "./images/netuno.jpg"
import sistemasolar from "./images/sistemasolar.jpg"

const ProdutosContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
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
    &:active{
        background-color: lightblue;
    }
    
    
`

class ViagensEspaciais extends React.Component {
    state = {
        viagens: [
            {
                id: 1,
                name: "Viagem em volta do Planeta Mercúrio",
                value: 10000.00,
                image: mercurio
            },
            {
                id: 2,
                name: "Viagem em volta do Planeta Vênus",
                value: 15000.00,
                image: venus
            },
            {
                id: 3,
                name: "Viagem em volta do Planeta Terra",
                value: 20000.00,
                image: terra
            },
            {
                id: 4,
                name: "Viagem em volta do Planeta Marte",
                value: 25000.00,
                image: marte
            },
            {
                id: 5,
                name: "Viagem em volta do Planeta Júpiter",
                value: 35000.00,
                image: jupiter
            },
            {
                id: 6,
                name: "Viagem em volta do Planeta Saturno",
                value: 45000.00,
                image: saturno
            },
            {
                id: 7,
                name: "Viagem em volta do Planeta Urano",
                value: 55000.00,
                image: urano
            },
            {
                id: 8,
                name: "Viagem em volta do Planeta Netuno",
                value: 65000.00,
                image: netuno
            },
            {
                id: 9,
                name: "Viagem de Mercúrio até Netuno.",
                value: 250000.00,
                image: sistemasolar
            }
        ],

    }

    adicionarCarrinho (id){
        const produtosEscolhidos = this.state.viagens.filter((viagem) =>{
            if (id === viagem.id){
                return viagem
            }
        })
        
        localStorage.setItem("carrinhoViagens", JSON.stringify(produtosEscolhidos))
    }

    render() {
        return(
            <ProdutosContainer>
                              
                {this.state.viagens.filter((iten)=>{
                    if(iten.name.toLowerCase().includes(this.props.nomeFiltro.toLowerCase())) return true
                    return false
                })
                .filter((iten)=> {
                    return this.props.valorMinimo === "" || iten.value >= this.props.valorMinimo
                })
                .filter((iten) =>{
                    return this.props.valorMaximo === "" || iten.value <= this.props.valorMaximo
                })
                .sort((primeiroIten, segundoIten)=> {
                    switch (this.props.parametroDeOrdenacao){
                        case 'titulo':
                            return this.props.tipoDeOrdenacao * primeiroIten.name.localeCompare(segundoIten.name)    
                        default:
                            return this.props.tipoDeOrdenacao * (primeiroIten.value - segundoIten.value)    
                        
                    }
                })
                .map((iten, indice) => {
                    return (
                        <Produto key= {indice}>
                            <ImagemProduto src={iten.image} alt= "Planeta"/>
                            <NomeProduto>{iten.name}</NomeProduto>
                            <ValorProduto>R$ {iten.value}</ValorProduto>
                            <BotaoAdicionar onClick={() => this.adicionarCarrinho(iten.id)}>Adicionar ao Carrinho</BotaoAdicionar>
                        </Produto>
                    )
                })}
                
                
            </ProdutosContainer>
        )
    }
}

export default ViagensEspaciais