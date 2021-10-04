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
    :hover {
        cursor: pointer;   
    
`

class ViagensEspaciais extends React.Component {
    state = {
        viagens: [
            {
                id: 1,
                name: "Viagem em volta do Planeta Mercúrio",
                value: 10000,
                image: mercurio,
                quantidade: 0,
            },
            {
                id: 2,
                name: "Viagem em volta do Planeta Vênus",
                value: 15000,
                image: venus,
                quantidade: 0,
            },
            {
                id: 3,
                name: "Viagem em volta do Planeta Terra",
                value: 20000,
                image: terra,
                quantidade: 0,
            },
            {
                id: 4,
                name: "Viagem em volta do Planeta Marte",
                value: 25000,
                image: marte,
                quantidade: 0,
            },
            {
                id: 5,
                name: "Viagem em volta do Planeta Júpiter",
                value: 35000,
                image: jupiter,
                quantidade: 0,
            },
            {
                id: 6,
                name: "Viagem em volta do Planeta Saturno",
                value: 45000,
                image: saturno,
                quantidade: 0,
            },
            {
                id: 7,
                name: "Viagem em volta do Planeta Urano",
                value: 55000,
                image: urano,
                quantidade: 0,
            },
            {
                id: 8,
                name: "Viagem em volta do Planeta Netuno",
                value: 65000,
                image: netuno,
                quantidade: 0,
            },
            {
                id: 9,
                name: "Viagem de Mercúrio até Netuno.",
                value: 250000,
                image: sistemasolar,
                quantidade: 0,
            }
        ],

        carrinhoViagens: [],
    }


    adicionarCarrinho (id){
        this.state.viagens.map((viagem) => {
            if (id === viagem.id){
                viagem.quantidade = viagem.quantidade+1
                alert("Produto adicionado com sucesso")
            }
        })
        
        this.state.viagens.filter((viagem) =>{
            if (id === viagem.id){
                if(this.state.carrinhoViagens.includes(viagem)){
                    const n = [...this.state.carrinhoViagens]
                    n.splice(n.indexOf(viagem),1, viagem)
                    this.setState({carrinhoViagens: n})
                } else {
                    this.setState({carrinhoViagens: [...this.state.carrinhoViagens, viagem]})
                }   
            }
        })
        
    }

    componentDidUpdate(){        
        localStorage.setItem("carrinhoViagens", JSON.stringify(this.state.carrinhoViagens))
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
                            <ValorProduto>R$ {(Math.round(iten.value * 100) / 100).toFixed(2)}</ValorProduto>
                            <BotaoAdicionar onClick={() => this.adicionarCarrinho(iten.id)}>Adicionar ao Carrinho</BotaoAdicionar>
                        </Produto>
                    )
                })}
                
                
            </ProdutosContainer>
        )
    }
}

export default ViagensEspaciais