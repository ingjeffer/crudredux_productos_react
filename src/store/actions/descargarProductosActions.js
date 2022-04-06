import clienteAxios from "../../config/axios";

export const DESCARGA_PRODUCTOS_TYPE = {
  START: 'DESCARGA_PRODUCTOS_COMENZAR',
  SUCCESS: 'DESCARGA_PRODUCTOS_EXITOSO',
  ERROR: 'DESCARGA_PRODUCTOS_ERROR',
}

export function obtenerProductosAction() {
  return async (dispatch) => {
    dispatch(descargaProductos());

    try {
      const response = await clienteAxios.get('/productos');
      const productos = response.data;
      dispatch(descargaProductosExito(productos));
    } catch (error) {
      dispatch(descargaProductosError(true));
    }
  }
}

export const descargaProductos = () => ({
  type: DESCARGA_PRODUCTOS_TYPE.START,
  payload: true,
});

export const descargaProductosExito = productos => ({
  type: DESCARGA_PRODUCTOS_TYPE.SUCCESS,
  payload: productos,
});

export const descargaProductosError = error => ({
  type: DESCARGA_PRODUCTOS_TYPE.ERROR,
  payload: error,
});

