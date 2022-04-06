import { DESCARGA_PRODUCTOS_TYPE } from "../actions/descargarProductosActions";
import { AGREGAR_PRODUCTO_TYPE } from "../actions/productosActions";
import { EDITAR_PRODUCTO_TYPE } from "../actions/productosEditarAction";
import { ELIMINAR_PRODUCTO_TYPE } from "../actions/productosEliminarAction";

const initialState = {
  productos: [],
  error: null,
  loading: false,
  productoEliminar: null,
  productoEditar: null,
};

export default function productosReducer(state = initialState, action) {
  switch (action.type) {
    case DESCARGA_PRODUCTOS_TYPE.START:
    case AGREGAR_PRODUCTO_TYPE.ADD:  
      return {
        ...state,
        loading: action.payload,
      }
    case AGREGAR_PRODUCTO_TYPE.SUCCESS:
      return {
        ...state,
        loading: false,
        productos: [...state.productos, action.payload],
      }
    case DESCARGA_PRODUCTOS_TYPE.ERROR:
    case AGREGAR_PRODUCTO_TYPE.ERROR:
    case ELIMINAR_PRODUCTO_TYPE.ERROR:
    case EDITAR_PRODUCTO_TYPE.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case DESCARGA_PRODUCTOS_TYPE.SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        productos: action.payload,
      }
    case ELIMINAR_PRODUCTO_TYPE.ELIMINAR:
      return {
        ...state,
        productoEliminar: action.payload,
      }
    case ELIMINAR_PRODUCTO_TYPE.EXITO:
      return {
        ...state,
        productos: state.productos.filter(producto => producto.id !== state.productosEliminar),
        productoEliminar: null,
      }
    case EDITAR_PRODUCTO_TYPE.EDITAR:
      return {
        ...state,
        productoEditar: action.payload,
      };
      case EDITAR_PRODUCTO_TYPE.EXITO:
        return {
          ...state,
          productoEditar: null,
          productos: state.productos.map(producto => 
            producto.id === action.payload.productoEditar.id ? action.payload.productoEditar : producto
          )
        }
    default:
      return state;
  }
}
