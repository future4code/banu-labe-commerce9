import React from "react";
import styled from "styled-components";




class Carrinho extends React.Component{

    state = {
        carrinhoNaves: [],
        carrinhoViagens: [],
        carrinhoRoupas: [],
    }
    
    componentDidMount(){
        const navesLS = localStorage.getItem('carrinhoNaves')
        this.setState({carrinhoNaves: JSON.parse(navesLS)}) 
        const viagensLS = localStorage.getItem('carrinhoViagens')
        this.setState({carrinhoViagens: JSON.parse(viagensLS)})
        const roupasLS = localStorage.getItem('carrinhoRoupas')
        this.setState({carrinhoRoupas: JSON.parse(roupasLS)})
    
    }

    retornaProdutos (){
        return( 
        <div>
                <div>
{/*                 {this.state.carrinhoNaves.map((produto)=>{
                    return 
                    (<div> 
                        {produto.quantidade}
                        {produto.nome}
                    </div>)
                })          
                } */}

                {this.state.carrinhoViagens.map((produto)=>{
                    return produto.name
                })}

                {this.state.carrinhoRoupas.map((produto)=>{
                    return produto.nome
                })}
                </div>
                
            </div>
        )
    }



    render(){
        return(
            <div>
                {this.retornaProdutos()}
 
            </div> 
        )
    }
}

export default Carrinho