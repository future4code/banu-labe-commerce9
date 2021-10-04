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
    
    &:active{
        background-color: lightblue;
        
    }
    :hover {
        cursor: pointer; 
`

class Roupas  extends React.Component {
    state = {
        produtos: [
            {
                id:20,
                nome: `Roupa Espacial Normal`,
                preco: 1500,
                imagem: `https://extra.globo.com/incoming/4656823-a00-bed/w533h800/spacesuitglobo.jpg`,
                quantidade: 0,
            },
            {
                id:21,
                nome: `Roupa Espacial Versão Premium`,
                preco: 1800,
                imagem: `https://img.ibxk.com.br/2012/2/materias/2380944129112039.jpg`,
                quantidade: 0,
            },
            {
                id:22,
                nome: `Roupa Espacial Laranja`,
                preco: 1600,
                imagem: `https://media.gazetadopovo.com.br/2019/10/17122621/48905248553_c0a868bbb4_c.jpg`,
                quantidade: 0,
            },
            {
                id:23,
                nome: `Roupa Espacial e Especial , com Buttons`,
                preco: 2500,
                imagem: `https://ids.si.edu/ids/deliveryService?id=NASM-A19730040000-NASM2018-02096&max=900`,
                quantidade: 0,
            }
        ],
        carrinhoRoupas: [],

    }

    
    adicionarCarrinho (id){

        this.state.produtos.map((produto) => {
            if (id === produto.id){
                produto.quantidade = produto.quantidade+1
              
            }
        })
        
        this.state.produtos.filter((produto) =>{
            if (id === produto.id){
                if(this.state.carrinhoRoupas.includes(produto)){
                    const n = [...this.state.carrinhoRoupas]
                    n.splice(n.indexOf(produto),1, produto)
                    this.setState({carrinhoRoupas: n})
                } else {
                    this.setState({carrinhoRoupas: [...this.state.carrinhoRoupas, produto]})
                }   
            }
        })

    }  

    componentDidUpdate(){        
        localStorage.setItem("carrinhoRoupas", JSON.stringify(this.state.carrinhoRoupas))
    }

    render() {
        return (
            <ProdutosContainer>
                {this.state.produtos.filter((produto)=>{
                    if(produto.nome.toLowerCase().includes(this.props.nomeFiltro.toLowerCase())) return true
                    return false
                })
                .filter((iten) => {
                    return this.props.valorMinimo === "" || iten.preco >= this.props.valorMinimo
                })
                .filter((iten)=>{
                    return this.props.valorMaximo === "" || iten.preco <= this.props.valorMaximo
                })
                .sort((primeiroIten, segundoIten)=> {
                    switch (this.props.parametroDeOrdenacao){
                        case 'titulo':
                            return this.props.tipoDeOrdenacao * primeiroIten.nome.localeCompare(segundoIten.nome)    
                        default:
                            return this.props.tipoDeOrdenacao * (primeiroIten.preco - segundoIten.preco)    
                        
                    }
                })
                .map((produto)=> 
                    <Produto key={produto.id}>
                        <ImagemProduto src={produto.imagem}/>
                        <NomeProduto>{produto.nome}</NomeProduto>
                        <ValorProduto>R$ {(Math.round(produto.preco * 100) / 100).toFixed(2)}</ValorProduto>
                        <BotaoAdicionar onClick={() => this.adicionarCarrinho(produto.id)}>Adicionar ao carrinho</BotaoAdicionar>
                    </Produto>)} 
            </ProdutosContainer>
        )
    }
}

export default Roupas