import Swal from "sweetalert2";
import clienteAxios from "../../config/axios";

export const AGREGAR_PRODUCTO_TYPE = {
  ADD: 'AGREGAR_PRODUCTO',
  SUCCESS: 'AGREGAR_PRODUCTO_EXITO',
  ERROR: 'AGREGAR_PRODUCTO_ERROR',
}

export const agregarProducto = () => ({
  type: AGREGAR_PRODUCTO_TYPE.ADD,
  payload: true,
});

export const agregarProductoExito = producto => ({
  type: AGREGAR_PRODUCTO_TYPE.SUCCESS,
  payload: producto,
});

// export const agregarProductoExito = producto => {
//   return (dispatch) => {
//     console.log(dispatch);
//     return{
//       type: AGREGAR_PRODUCTO_TYPE.SUCCESS,
//       payload: producto,
//     }
//   }
// };

export const agregarProductoError = estado => ({
  type: AGREGAR_PRODUCTO_TYPE.ERROR,
  payload: estado,
});

export function crearNuevoProductoAction(producto) {
  return async (dispatch) => {
    dispatch(agregarProducto());
    try {
      await clienteAxios.post('/productos', producto);
      dispatch(agregarProductoExito(producto));
      Swal.fire(
        'Correcto',
        'El producto se agregó correctamente',
        'success'
      )
    } catch (error) {
      dispatch(agregarProductoError(true));
      Swal.fire({
        icon: 'error',
        title: 'Hubo un error',
        text: 'Hubo un error, intenta de nuevo',
      })
    }
  }
}
