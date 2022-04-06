import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { obtenerProductoEditar } from '../store/actions/productosEditarAction';
import { borrarProductoAction } from '../store/actions/productosEliminarAction';

const Producto = ({producto}) => {
  const { nombre, precio, id } = producto;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const redireccionar = producto => {
    dispatch(obtenerProductoEditar(producto));
    navigate(`/productos/editar/${producto.id}`);
  }


  const confirmarEliminarProducto = id => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Estás seguro que deseas eliminar el producto?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '',
      cancelButtonColor: '',
      confirmButtonText: 'Si',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.value) {
        dispatch(borrarProductoAction(id));
      }
    })
  }

  return(
    <tr key={id}>
      <td>{ nombre }</td>
      <td> <span className="font-weight-bold">$ { precio }</span> </td>
      <td className="acciones">
        <button type="button" className="btn btn-primary mr-2" onClick={() => redireccionar(producto)}>
          Editar
        </button>
        <button type="button" className="btn btn-danger" onClick={() => confirmarEliminarProducto(id)}>
          Eliminar
        </button>
      </td>
    </tr>
  )
}

export default Producto;