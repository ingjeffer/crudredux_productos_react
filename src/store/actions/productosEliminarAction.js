import Swal from "sweetalert2";
import clienteAxios from "../../config/axios";

export const ELIMINAR_PRODUCTO_TYPE = {
  ELIMINAR: 'OBTENER_PRODUCTO_ELIMINAR',
  EXITO: 'PRODUCTO_ELIMINAR_EXITO',
  ERROR: 'PRODUCTO_ELIMINAR_ERROR',
}

export function borrarProductoAction(id) {
  return async (dispatch) => {
    dispatch(obtenerProductoEliminar(id))

    try {
      await clienteAxios.delete(`/productos/${id}`);
      dispatch(eliminarProductoExito())

      Swal.fire(
        'Producto Eliminado',
        'Producto eliminado exitosamente',
        'success'
      );

    } catch (error) {
      dispatch(eliminarProductoError())
    }
  }
}

export const obtenerProductoEliminar = id => ({
  type: ELIMINAR_PRODUCTO_TYPE.ELIMINAR,
  payload: id,
});

export const eliminarProductoExito = () => ({
  type: ELIMINAR_PRODUCTO_TYPE.EXITO,
});

export const eliminarProductoError = (estado) => ({
  type: ELIMINAR_PRODUCTO_TYPE.ERROR,
  payload: estado,
});