import React from "react";
import styled from "styled-components";


const ContainerCardCarrinho = styled.div `
    display:flex;

  


` 

const ContainerCardCarrinhoQuantidade = styled.div `
    width: 10%;
    border: 1px solid black;
    padding: 3px;
` 

const ContainerCardCarrinhoNome = styled.div `
    width: 70%;
    border: 1px solid black;
    padding: 3px;
` 

const ContainerCardCarrinhoPreco = styled.div `
    width: 20%;
    border: 1px solid black;
    padding: 3px;

` 

class Carrinho extends React.Component{

    state = {
        carrinhoNaves: [],
        carrinhoViagens: [],
        carrinhoRoupas: [],
        carrinho: [],
    }
    
    componentDidMount(){
        const navesLS = localStorage.getItem('carrinhoNaves')
        this.setState({carrinhoNaves: JSON.parse(navesLS)}) 
        const viagensLS = localStorage.getItem('carrinhoViagens')
        this.setState({carrinhoViagens: JSON.parse(viagensLS)})
        const roupasLS = localStorage.getItem('carrinhoRoupas')
        this.setState({carrinhoRoupas: JSON.parse(roupasLS)}) 
   
    }


    retornaProdutosNaves (){  
        if (this.state.carrinhoNaves !== null){
             const produtosNaves = this.state.carrinhoNaves.map((nave) =>{
                return (
                    <ContainerCardCarrinho>
                        <ContainerCardCarrinhoQuantidade>{nave.quantidade}</ContainerCardCarrinhoQuantidade>
                        <ContainerCardCarrinhoNome>{nave.nome}</ContainerCardCarrinhoNome> 
                        <ContainerCardCarrinhoPreco>R$ {(Math.round(nave.preco * 100) / 100).toFixed(2)}</ContainerCardCarrinhoPreco>
                    </ContainerCardCarrinho>
                )
            })
            return produtosNaves 
            

        } else if (this.state.carrinhoNaves === null || this.state.carrinhoNaves === []){
            return <p></p>
        } 
    }


    retornaProdutosViagens (){
        if (this.state.carrinhoViagens !== null){
            const produtosViagens = this.state.carrinhoViagens.map((viagem) =>{
                return (
              <ContainerCardCarrinho>
                        <ContainerCardCarrinhoQuantidade>{viagem.quantidade}</ContainerCardCarrinhoQuantidade>
                        <ContainerCardCarrinhoNome>{viagem.name}</ContainerCardCarrinhoNome> 
                        <ContainerCardCarrinhoPreco>R$ {(Math.round(viagem.value * 100) / 100).toFixed(2)}</ContainerCardCarrinhoPreco>
                    </ContainerCardCarrinho>
                )
            })
            return produtosViagens
        } else if (this.state.carrinhoViagens === null || this.state.carrinhoViagens === []){
            return <p></p>
        }
    }
    
    retornaProdutosRoupas (){
        if (this.state.carrinhoRoupas !== null){
            const produtosRoupas = this.state.carrinhoRoupas.map((roupa) =>{
                return (
                    <ContainerCardCarrinho>
                    <ContainerCardCarrinhoQuantidade>{roupa.quantidade}</ContainerCardCarrinhoQuantidade>
                    <ContainerCardCarrinhoNome>{roupa.nome}</ContainerCardCarrinhoNome> 
                    <ContainerCardCarrinhoPreco>R$ {(Math.round(roupa.preco * 100) / 100).toFixed(2)}</ContainerCardCarrinhoPreco>
                </ContainerCardCarrinho>
                )
            })

            return produtosRoupas
        } else if (this.state.carrinhoRoupas === null || this.state.carrinhoRoupas === []){
            return <p></p>
        }
    }

    retornaVazio(){
        if (this.state.carrinhoNaves === null || this.state.carrinhoNaves === [] &&
            this.state.carrinhoViagens === null || this.state.carrinhoViagens === [] &&
            this.state.carrinhoRoupas === null || this.state.carrinhoRoupas === []) {
                return <p> O carrinho está vazio </p>
        }
    }
    

    render(){

        return(
            <div>
                <ContainerCardCarrinho>
                    <ContainerCardCarrinhoQuantidade>Quantidade</ContainerCardCarrinhoQuantidade>
                    <ContainerCardCarrinhoNome>Nome</ContainerCardCarrinhoNome>
                    <ContainerCardCarrinhoPreco>Preço</ContainerCardCarrinhoPreco>
                </ContainerCardCarrinho>
                {this.retornaProdutosNaves()}
                {this.retornaProdutosViagens()}
                {this.retornaProdutosRoupas()} 
                {this.retornaVazio()}
            </div> 
        )
    }

}
export default Carrinho