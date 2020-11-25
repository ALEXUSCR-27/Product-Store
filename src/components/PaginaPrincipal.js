import React,{Component} from 'react';
import {Button,Modal} from 'react-bootstrap';
class PaginaPrincipal extends Component {
	constructor(props){
		super(props);
		this.state= {
			show:false
		}
		this.handleShow = this.handleShow.bind(this);
		this.handleHide = this.handleHide.bind(this);
	}
	handleShow=()=> {
		this.setState({show:true});
	}
	handleHide=()=>{
		this.setState({show:false});
	}
	render() {
		return(
			<div>
				<Modal centerd size="md" show={this.state.show} animation={true} onHide={this.handleHide}>
					<Modal.Header className="Modal.Header bg-dark text-white">
						<Modal.Title>Ingrese su nombre de usuario y contraseña</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<div className="container-lg width=100">
							<div className="row">
								<form className="col-md-12">
									<div className="form-group">
										<legend>Usuario</legend>
										<input type="text"  className="form-control" id="NombreUsuario"/>
									</div>
									<div className="form-group">
										<legend>Contraseña</legend>
										<input type="password"  className="form-control" id="Contraseña"/>
									</div>
									<div>
										<button type="button" className="btn btn-outline-primary offset-5" style={{'font-size':'17px'}}>Login</button>
									</div>
								</form>
							</div>
						</div>
					</Modal.Body>
					<Modal.Footer className="bg-dark">
						<button type="button" onClick={this.handleHide} className="btn btn-primary bg-dark" style={{border:0}}>Cerrar</button>
					</Modal.Footer>
				</Modal>
				<h1 className="card text-white bg-dark col-md-12">
				<h6 className="col-md-12 text-center">Tienda online de productos de excelente calidad</h6>
					<div className="card-header">Product Store</div>
						<nav className="navbar navbar-expand-lg navbar-dark bg-dark col-md-12">
						  <button type="button" onClick={this.handleShow} className="btn btn-primary bg-dark" style={{border:0,'font-size':'17px'}}>Login</button>
								<form className="form-inline">
						  		<div className="form-group offset-2">
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
						<div class="form-group col-md-4">
						  <legend>Busqueda por Nombre</legend>
						  <input type="text" className="form-control col-md-8" id="BusquedaNombre"/>
						</div>
						<div class="form-group col-md-4">
						  <legend>Busqueda por Categoría</legend>
						  <input type="text" className="form-control col-md-8" id="BusquedaCategoria"/>
						</div>
					<div className=" col-md-2">
						<br/>
						<Button type="submit" className="btn btn-secondary btn-block">Realizar Consulta</Button>
					</div>
					<div className=" col-md-2">
						<br/>
						<Button type="submit" className="btn btn-secondary btn-block">Ver Productos en Inventario</Button>
					</div>
					</div>
					<table className="table table-hover text-center">
					    <thead>
					    	<tr className="table-dark text-dark">
						      <td>Nombre del Producto</td>
							  <td>Grupo</td>
							  <td>Cantidad en Inventario</td>
							  </tr>
						</thead>
						<tbody>
							<tr scope="row">
							<input type="checkbox"></input>
								<td>hola</td>
								<td>hola</td>
								<td>hola</td>
							</tr>

						</tbody>
					</table>

					
				</form>
			</div>
		)
	}
};
export default PaginaPrincipal;