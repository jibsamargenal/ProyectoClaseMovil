import {Text, View} from 'react-native';
import {Producto} from "../App";
import BotonAccion from "./BotonAccion";

type TarjetaProductoProps = {
    producto: Producto,
    precioDescuento?: number,
    isNuevo?: boolean,
}

export default function TarjetaProducto({producto, precioDescuento, isNuevo}: TarjetaProductoProps) {
    return (
        <View>
            <Text>{producto.nombre}</Text>
            <Text>{producto.categoria}</Text>
            <Text>{(producto.precio).toFixed(2)}</Text>
            <BotonAccion title="Agregar" inhabilitado={false} enProceso={false} onPress={() => {}} />
        </View>
    )
}
