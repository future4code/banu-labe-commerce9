import React from "react";
import styled from "styled-components";

const CarrinhoContainer = styled.div `
    height: 63vh
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
                    <div>
                        <p>{nave.quantidade} x {nave.nome} - {nave.preco}</p>
                    </div>
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
                <div>
                    <p>{viagem.quantidade} x {viagem.name} - {viagem.value}</p>
                </div>
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
                <div>
                    <p>{roupa.quantidade} x {roupa.nome} - {roupa.preco}</p>
                </div>
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
            <CarrinhoContainer>
            
                {this.retornaProdutosNaves()}
                {this.retornaProdutosViagens()}
                {this.retornaProdutosRoupas()} 
                {this.retornaVazio()}
            </CarrinhoContainer> 
        )
    }

}
export default Carrinho