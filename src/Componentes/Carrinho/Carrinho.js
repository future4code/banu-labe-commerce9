import React from "react";
import styled from "styled-components";




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
        
        const produtosNaves = this.state.carrinhoNaves.map((nave) =>{
            return (
            <div>
                <p>{nave.quantidade} x {nave.nome} - {nave.preco}</p>
            </div>
            )
        })

        return produtosNaves
    }

    retornaProdutosViagens (){
        
        const produtosViagens = this.state.carrinhoViagens.map((viagem) =>{
            return (
            <div>
                <p>{viagem.quantidade} x {viagem.nome} - {viagem.preco}</p>
            </div>
            )
        })

        return produtosViagens
    }
    
    retornaProdutosRoupas (){
        
        const produtosRoupas = this.state.carrinhoRoupas.map((roupa) =>{
            return (
            <div>
                <p>{roupa.quantidade} x {roupa.nome} - {roupa.preco}</p>
            </div>
            )
        })

        return produtosRoupas
    }
        
    
 


    render(){

        return(
            <div>
                {this.retornaProdutosNaves()}
                {this.retornaProdutosViagens()}
                {this.retornaProdutosRoupas()}
 
            </div> 
        )
    }

}
export default Carrinho