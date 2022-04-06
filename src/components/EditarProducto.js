import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editarProductoAction } from "../store/actions/productosEditarAction";

const EditarProducto = () => {
  const [producto, guardarProducto] = useState({
    nombre: '',
    precio: 0,
  });

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const productoEditar = useSelector(state => state.productos.productoEditar);

  useEffect(() => {
    guardarProducto(productoEditar);
  }, [productoEditar]);

  const {nombre, precio} = producto;

  const submitEditarProducto = e => {
    e.preventDefault();
    dispatch(editarProductoAction(producto));
    navigate('/');
  }

  const onChangeFormulario = e => {
    guardarProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
    console.log(producto);
  }
  

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Editar Producto
            </h2>

            <form onSubmit={submitEditarProducto}>
              <div className="form-group">
                <label htmlFor="nombre">Nombre Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="nombre"
                  value={nombre}
                  onChange={onChangeFormulario}
                />
              </div>

              <div className="form-group">
                <label htmlFor="precio">Precio Producto</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio Producto"
                  name="precio"
                  value={precio}
                  onChange={onChangeFormulario}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Guardad Cambios
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditarProducto;
