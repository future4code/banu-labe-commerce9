import React from 'react';
import styled from 'styled-components';
import Naves from './Componentes/Naves/Naves';
import ViagensEspaciais from './Componentes/PaginaViagens/viagensEspaciais';
import Roupas from './Componentes/Roupas/roupas';
import ImgBackground from './imagens/galaxia.jpeg';



const Header = styled.header `
  grid-column: 1/3;
  grid-row: 1/2;
 /*   background: #696969;  */

  color: white;
 
  header{
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0 20px;
   
  
    >button {
      height:30px;
      align-self: center;
    }
  } 
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 2fr;
  grid-template-rows: 0.5fr 5fr 0.5fr;
  height:100%;
  max-height: 100vh;
  max-width: 100vw;
`

const Footer = styled.footer `
  grid-column: 1/3;
  grid-row: 3/4;
  background:#696969;
  color: white;
  padding:  0 10px ;
  text-align: center;
  font-weight: 700;
  `

const Main = styled.div`
  grid-column: 2/3;
  grid-row:2/3;
  margin: 10px;

`
const Opcoes = styled.div ` 
  display: flex;
  justify-content: space-between;
  font-size: 30px;
  
  >a {
    margin: 15px;
    text-decoration: none;

    :visited {
      color:black;
    }
  }
 
`
const Menu = styled.div` 
  display: flex;
  justify-content: space-between;
  width: 100%;

  select {
    height:50%;
    align-self:center;

  }
`

const Filtros = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
  background: #A9A9A9;
  height:100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  
  .ElementoFiltro{
    display: flex;
    flex-direction: column;
    margin: 10px;  
  }

  button {
    width: 100px;
    align-self: center;
  }


`


class App extends React.Component {
  state = {
    pageViagens: true,
    pageNaves: false,
    pageRoupas: false, 
    // pageSelecionada: '',
  }

  header = () => {
    return(
      <header style={{backgroundImage: `url(${ImgBackground})`}}>
        <h2>🚀Galáxia 42</h2>
        <button>Carrinho</button>
      </header>
    )
  }

  filtros = () => {
    return (
      <Filtros>
        <div className="ElementoFiltro">
            <label>Valor Minimo</label>
            <input type="number"></input>
        </div>
        <div className="ElementoFiltro">
            <label>Valor Maximo</label>
            <input type="number"></input>
        </div>
        <div className="ElementoFiltro">
            <label>Nome</label>
            <input type="text"></input>
        </div>
        <button> Buscar </button>
      </Filtros>
    )
  }

  menuOpcoes = () => {
    return(
      <Menu>
        <Opcoes>
          <a value='viagens' onClick={this.onClickViagens}>Viagens</a>
          <a value='naves' onClick={this.onClickNaves}>Naves</a>
          <a value='roupas' onClick={this.onClickRoupas}>Roupas</a>
        </Opcoes>
        <select>
          <option value='crescente'>Crescente</option>
          <option value='decrescente'>Decrescente</option>
        </select>
      </Menu>
    )
  }

  footer = () => {
    return(
      <Footer>
        <p>Todos os direitos reservados. ©</p>
      </Footer>
    )
  }

  paginaRenderizada = () => {
    if (this.state.pageViagens) {
      return <ViagensEspaciais/>
    }
    if (this.state.pageRoupas) {
      return <Roupas /> 
    }
    if (this.state.pageNaves) {
      return <Naves />
    }
  }

  onClickViagens = () => {
    this.setState(
      {
        pageViagens: true,
        pageNaves: false,
        pageRoupas: false
      }
    )
  }

  

   onClickNaves = () => {
    this.setState(
      {
        pageViagens: false,
        pageNaves: true,
        pageRoupas: false
      }
    )
  }
  
  onClickRoupas = () => {
    this.setState(
      {
        pageViagens: false,
        pageNaves: false,
        pageRoupas: true
      }
    )

  }

  render(){
      return (
        <Container>
          <Header>
          {this.header()}
          </Header>

          <Filtros>
            {this.filtros()}
          </Filtros>

          <Main>
            <Opcoes>
              {this.menuOpcoes()}
            </Opcoes>
            {this.paginaRenderizada()}
            
                       
          </Main>

          <Footer>
            {this.footer()}
          </Footer>
          

        </Container>
    );
  }
}


export default App;
