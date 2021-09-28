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

const Cabecalho = styled.header` 
    max-height: 30vh;
    max-width: 100vw;
    width: 100vw;
    height: 10vh;
    background-color: black;
    color: white;
    text-align: center;
`
const ConteudoPagina = styled.div` 
    display: flex;
    max-width: 100vw;
    width: 100vw;

`
const Carrinho = styled.div`
    max-width: 20%;
    width: 15vw;
    background-color: lightblue;
`

const BotaoAdicionar = styled.button` 
    background-color: white;
    color: black;
    border: none;
    border: 1px solid black;
    
`

const MenuLateral = styled.nav` 
    max-width: 20%;
    width: 15vw;
    background-color: lightblue;
`

const NavesEspaciais = styled.div` 
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: repeat(3, 1fr);
    height: 50%;
    width: 70vw;
`
const ListagemNaves = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1%;
    border: 1px solid black;
`

const ImagensNaves = styled.img `  
    width: 60%;
    height: 60%;
`

export class Naves extends React.Component{
    state = {
        naves: [
        {
            nome: 'Soyuz MS-09',
            imagem: soyuz09,
            preco: 10,
            id: 1,
           
        },
        {
            nome: 'Shenzhou',
            imagem: shenzhou,
            preco: 10,
            id: 2,

        },
        {
            nome: 'New Shepard',
            imagem: newshepard,
            preco: 10,
            id: 3,

        },
        {
            nome: 'SpaceShipTwo',
            imagem: spaceshiptwo,
            preco: 10,
            id: 4,

        },
        {
            nome: 'Orion',
            imagem: orion,
            preco: 10,
            id: 5,

        },
        {
            nome: 'Dragon V2',
            imagem: dragonv2,
            preco: 10,
            id: 6,

        },
        {
            nome: 'Dream Chaser',
            imagem: dreamchaser,
            preco: 10,
            id: 7,

        },
        {
            nome: 'Lynx',
            imagem: lynx,
            preco: 10,
            id: 8,

        },
        {
            nome: 'Starship',
            imagem: starship,
            preco: 10,
            id: 9,

        },
        {
            nome: 'Space Launch System',
            imagem: sls,
            preco: 10,
            id: 10,

        },
        ],

    }


    listaNaves () { //lista naves na página
        const lista = this.state.naves.map((nave) =>{
            return (
            <ListagemNaves key={nave.id}>
                <ImagensNaves src={nave.imagem} />
                <p>{nave.nome}</p>
                <p>R${nave.preco},00</p>
                <BotaoAdicionar value={nave.id} onClick={this.adicionarCarrinho}>Adicionar ao carrinho</BotaoAdicionar>
            </ListagemNaves> )}
        )

        return lista
        
    }


    

    render(){
        return(
            <div>
                <ConteudoPagina>
    
                    <NavesEspaciais>
                        {this.listaNaves()}
                    </NavesEspaciais>

               </ConteudoPagina>


            </div>
        )
    }
}