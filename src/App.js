import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './Pages/TelaLogin';
import TelaInicial from './Pages/TelaPrincipal';
/* import TelaInicial from './Pages/TelaPrincipal'; */
import DetalhesComidas from './Pages/TelaDetalhesComida';
import DetalhesBebidas from './Pages/TelaDetalhesBebida';
import ProcessoComida from './Pages/TelaReceitaProcesso';
import ProcessoBebidas from './Pages/TelaReceitaProcesso';
import Explorar from './Pages/TelaExplorar';
import ExplorarComidas from './Pages/TelaExplorarBebidaComida';
import ExplorarBebidas from './Pages/TelaExplorarBebidaComida';
import ExplorarComidasIngredientes from './Pages/TelaExplorarIngredientes';
import ExplorarBebidasIngredientes from './Pages/TelaExplorarIngredientes';
import ExplorarComidasAreas from './Pages/TelaExplorarLocal';
import Perfil from './Pages/TelaPerfil';
import ReceitasFeitas from './Pages/TelaReceitaFeitas';
import ReceitasFavoritas from './Pages/TelaReceitasFavoritas';

function App() {
  return (
    <Switch>
      <Route path="/comidas" component={TelaInicial} />
      <Route path="/bebidas" component={TelaInicial} />
      <Route path="/comidas/{id-da-receita}" component={DetalhesComidas} />
      <Route path="/bebidas/{id-da-receita}" component={DetalhesBebidas} />
      <Route path="/comidas/{id-da-receita}/in-progress" component={ProcessoComida} />
      <Route path="/bebidas/{id-da-receita}/in-progress" component={ProcessoBebidas} />
      <Route path="/explorar" component={Explorar} />
      <Route path="/explorar/comidas" component={ExplorarComidas} />
      <Route path="/explorar/bebidas" component={ExplorarBebidas} />
      <Route path="/explorar/comidas/ingredientes" component={ExplorarComidasIngredientes} />
      <Route path="/explorar/bebidas/ingredientes" component={ExplorarBebidasIngredientes} />
      <Route path="/explorar/comidas/area" component={ExplorarComidasAreas} />
      <Route path="/receitas-feitas" component={ReceitasFeitas} />
      <Route path="/receitas-favoritas" component={ReceitasFavoritas} />
      <Route path="/perfil" component={Perfil} />
      <Route exact path="/" component={Login} />
      <Route render={() => <h1>Deu Ruim</h1>} />
    </Switch>
  );
}

export default App;
