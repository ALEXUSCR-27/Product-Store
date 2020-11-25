import React,{Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import PaginaPrincipal from './components/PaginaPrincipal.js';
import ModuloVendedor from './components/ModuloVendedor.js';
class App extends Component {
  render() {
    return(
      <BrowserRouter>
      	<Route exact path="/moduloVendedor" component={ModuloVendedor}/>
        <Route exact path="/paginaPrincipal" component={PaginaPrincipal}/>
       </BrowserRouter>
    );
}
  
}
export default App;
