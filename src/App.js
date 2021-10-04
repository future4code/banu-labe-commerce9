import React from 'react';
import styled from 'styled-components';
import Naves from './Componentes/Naves/Naves';
import ViagensEspaciais from './Componentes/PaginaViagens/viagensEspaciais';
import Roupas from './Componentes/Roupas/roupas';
import ImgBackground from './imagens/galaxia.jpeg';
import Carrinho from './Componentes/Carrinho/Carrinho';



const TipoDeOrdenacao = styled.div`
  display: flex;
  justify-content: center;

  select{
    width: 100px;
  }
`

const Ordenacao = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  select{
    width: 100px;
  }
  label{
    font-size: 20px;
  }
`

const Header = styled.header `
  grid-column: 1/3;
  grid-row: 1/2;

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
    pageRender: 'viagens', 
    carrinho: [],
    valorMaximo: '',
    valorMinimo:'',
    nomeFiltro: '',
    parametroDeOrdenacao: "preco",
    tipoDeOrdenacao: 1,
  
  }

  header = () => {
    return(
      <header style={{backgroundImage: `url(${ImgBackground})`}}>
        <h2>🚀Galáxia 42</h2>
        <button value={'carrinho'} onClick={this.onClickAdicionarCarrinho}>Carrinho</button>
      </header>
    )
  }

  filtros = () => {
    return (
      <Filtros>
        <div className="ElementoFiltro">
            <label>Valor Minimo</label>
            <input
              placeholder= "Valor Mínimo" 
              type="number"
              value= {this.state.valorMinimo}
              onChange={this.onChangeValorMinimo}/>
        </div>
        <div className="ElementoFiltro">
            <label>Valor Maximo</label>
            <input 
              placeholder= "Valor Máximo"
              type="number"
              value= {this.state.valorMaximo}
              onChange= {this.onChangeValorMaximo}/>
        </div>
        <div className="ElementoFiltro">
            <label>Nome</label>
            <input
              placeholder= "Pesquisa" 
              value= {this.state.nomeFiltro} 
              onChange={this.onChangeNomeFiltro} 
              type="text"/>
        </div>
        <button> Buscar </button>
      </Filtros>
    )
  }

  onChangeValorMaximo = (e) => {
    this.setState({valorMaximo: e.target.value})
  }

  onChangeValorMinimo = (e) => {
    this.setState({valorMinimo: e.target.value})
  }

  onChangeNomeFiltro = (e) => {
    this.setState({nomeFiltro: e.target.value})
  }

  atualizaParametroOrdenacao = (e) => {
    this.setState({parametroDeOrdenacao: e.target.value})
  }

  atualizaTipoDeOrdenacao = (e) => {
    this.setState({tipoDeOrdenacao: e.target.value})
  }

  menuOpcoes = () => {
    return(
      <Menu>
        <Opcoes>
          <a value='viagens'  onClick={this.onClickViagens}>Viagens</a>
          <a value='naves' onClick={this.onClickNaves}>Naves</a>
          <a value='roupas' onClick={this.onClickRoupas}>Roupas</a>
        </Opcoes>
        <Ordenacao>
          <label>Ordenação:</label>
          <select
            value= {this.state.parametroDeOrdenacao}
            onChange={this.atualizaParametroOrdenacao}  
          >
            <option value='preco'>Preço</option>
            <option value='titulo'>Título</option>
          </select>
        </Ordenacao>
        <TipoDeOrdenacao>
          <select
            value={this.state.tipoDeOrdenacao}
            onChange={this.atualizaTipoDeOrdenacao}
          >
            <option value={1}>Crescente</option>
            <option value={-1}>Decrescente</option>
          </select>
        </TipoDeOrdenacao>
      </Menu>
    )
  }

  footer = () => {
    return(
      <Footer style={{backgroundImage: `url(${ImgBackground})`}}>
        <p>Todos os direitos reservados. ©</p>
      </Footer>
    )
  }

  paginaRenderizada = () => {
    switch (this.state.pageRender){
      case 'naves' :
        return <Naves 
                  valorMaximo={this.state.valorMaximo} 
                  valorMinimo={this.state.valorMinimo} 
                  nomeFiltro= {this.state.nomeFiltro}
                  parametroDeOrdenacao= {this.state.parametroDeOrdenacao}
                  tipoDeOrdenacao= {this.state.tipoDeOrdenacao}/>
      case 'roupas':
        return <Roupas 
                  valorMaximo={this.state.valorMaximo} 
                  valorMinimo={this.state.valorMinimo} 
                  nomeFiltro= {this.state.nomeFiltro}
                  parametroDeOrdenacao= {this.state.parametroDeOrdenacao}
                  tipoDeOrdenacao= {this.state.tipoDeOrdenacao}/>
      case 'carrinho':
        return <Carrinho />
      default:
        return <ViagensEspaciais 
                  valorMaximo={this.state.valorMaximo} 
                  valorMinimo={this.state.valorMinimo} 
                  nomeFiltro= {this.state.nomeFiltro}
                  parametroDeOrdenacao= {this.state.parametroDeOrdenacao}
                  tipoDeOrdenacao= {this.state.tipoDeOrdenacao}/>
    }
  }
  
  onClickViagens = () => {
    this.setState(
      {
        pageRender: 'viagens'
      }
    )
  }
 

   onClickNaves = () => {
    this.setState(
      {
        pageRender: 'naves'
      }
    )
  }
  
  onClickRoupas = () => {
    this.setState(
      {
        pageRender: 'roupas'
      }
    )

  }

   onClickAdicionarCarrinho = () => {
    this.setState(
      {
        pageRender: 'carrinho'
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

          <Footer style={{backgroundImage: `url(${ImgBackground})`}}>
            {this.footer()}
          </Footer>
          
        </Container>
    );
  }
}


export default App;
