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
    
    
`

class Roupas  extends React.Component {
    state = {
        produtos: [
            {
                id:20,
                nome: `Roupa Espacial Normal`,
                preco: 1500,
                imagem: `https://ichef.bbci.co.uk/news/224/amz/worldservice/live/assets/images/2014/05/02/140502075522_nasa_z1_spacesuit_224x280_nasa.jpg`,
                quantidade: 0,
            },
            {
                id:21,
                nome: `Roupa Espacial Versão Premium`,
                preco: 1800,
                imagem: `https://w7.pngwing.com/pngs/424/49/png-transparent-astronaut-space-suit-outer-space-space-exploration-astronaut-chemical-space-mitsubishi.png`,
                quantidade: 0,
            },
            {
                id:22,
                nome: `Roupa Espacial Laranja`,
                preco: 1600,
                imagem: `https://i.pinimg.com/originals/d9/45/21/d94521ee32233b8ad3a3befe7d85242a.jpg`,
                quantidade: 0,
            },
            {
                id:23,
                nome: `Roupa Espacial Com detalhes Laranjas`,
                preco: 2500,
                imagem: `https://media.istockphoto.com/photos/astronaut-in-a-space-suit-picture-id155378758`,
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
                        <ValorProduto>{produto.preco}</ValorProduto>
                        <BotaoAdicionar onClick={() => this.adicionarCarrinho(produto.id)}>Adicionar ao carrinho</BotaoAdicionar>
                    </Produto>)} 
            </ProdutosContainer>
        )
    }
}

export default Roupas