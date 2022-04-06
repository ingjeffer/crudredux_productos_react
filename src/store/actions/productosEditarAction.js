import clienteAxios from "../../config/axios";

export const EDITAR_PRODUCTO_TYPE = {
  EDITAR: 'OBTENER_PRODUCTO_EDITAR',
  EXITO: 'PRODUCTO_EDITAR_EXITO',
  ERROR: 'PRODUCTO_EDITAR_ERROR',
  COMENZAR: 'COMENZAR_EDICION_PRODUCTO',
}

export function obtenerProductoEditar(producto) {
  return (dispatch) => {
    dispatch(obtenerProductosAction(producto));
  }
}

export const obtenerProductosAction = producto => ({
  type: EDITAR_PRODUCTO_TYPE.EDITAR,
  payload: producto,
});

export function editarProductoAction(producto) {
  return  async(dispatch) => {
    dispatch(editarProducto());
    try {
      await clienteAxios.put(`/productos/${producto.id}`, producto);
      dispatch(editarProductoExito(producto));
    } catch (error) {
      dispatch(editarProductoError(true));
    }
  }
}

export const editarProducto = () => ({
  type: EDITAR_PRODUCTO_TYPE.COMENZAR,
});

export const editarProductoExito = producto => ({
  type: EDITAR_PRODUCTO_TYPE.EXITO,
  payload: producto,
});

export const editarProductoError = estado => ({
  type: EDITAR_PRODUCTO_TYPE.ERROR,
  payload: estado,
})

