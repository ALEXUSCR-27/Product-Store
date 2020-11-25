import React,{Component} from 'react';
import {Button} from 'react-bootstrap';
class ModuloVendedor extends Component {
	render() {
		return(
			<div>
				<h1 className="card text-white bg-dark col-md-12">
				<h6 className="col-md-12 text-center">Tienda online de productos de excelente calidad</h6>
				<h6 className="col-md-12 text-center">Perfil de Vendedor</h6>
				<div className="card-header">Product Store</div>
						<nav className="navbar navbar-expand-lg navbar-dark bg-dark col-md-12">
						  <a className="navbar-brand" href="#">Cerrar Sesión</a>
						  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
						    <span class="navbar-toggler-icon"></span>
						  </button>
						  <form className="form-inline">
						  		<div className="form-group">
						  			<label style={{'font-size':'17px'}} for="Sucursal">Sucursal:</label>
										<select className="custom-select bg-dark text-white" style={{border:0,'font-size':'17px'}} id="Sucursal offset-2">
								      <option selected="Limón">Limón</option>
								      <option value="Cartago">Cartago</option>
							    	</select>
							    </div>
						  	</form>
						</nav>
				</h1>
				<form className="col-md-12">
					<div className="row">
						<div className="form-group col-md-4">
						  <legend>Busqueda por Nombre</legend>
						  <input type="text" className="form-control col-md-8" id="BusquedaNombre"/>
						</div>
						<div class="form-group col-md-4">
						  <legend>Agregar Categoría</legend>
						  <input type="text" className="form-control col-md-8" id="AgregarCategoria"/>
						</div>
					<div className=" col-md-2">
						<br/>
						<Button type="submit" className="btn btn-secondary btn-block">Realizar Cambios</Button>
					</div>
					<div className=" col-md-2">
						<br/>
						<Button type="submit" className="btn btn-secondary btn-block">Ver Compras Facturadas</Button>
					</div>
					</div>
					</form>
			</div>
		);
	}
}
export default ModuloVendedor;