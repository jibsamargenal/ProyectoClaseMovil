import {View} from 'react-native';
import {Producto} from "../App";
import BotonAccion from "./BotonAccion";

type TarjetaProductoProps = {
    producto: Producto,
    precioDescuento?: number,
    isNuevo?: boolean,
}

export default function TarjetaProducto({producto, precioDescuento, isNuevo}: TarjetaProductoProps) {
    <View>
        <BotonAccion title="Agregar" inhabilitado={false} enProceso={false} onPress={() => {}} />
    </View>
}
