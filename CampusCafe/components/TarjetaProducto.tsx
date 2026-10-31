import {Alert, StyleSheet, Text, View} from 'react-native';
import {Producto} from "../App";
import BotonAccion from "./BotonAccion";

type TarjetaProductoProps = {
    producto: Producto,
    precioDescuento?: number,
    isNuevo?: boolean,
    onPress: () => void,
}

export default function TarjetaProducto({producto, precioDescuento, isNuevo, onPress}: TarjetaProductoProps) {
    return (
        <View style={styles.container}>
            <Text>{producto.nombre}</Text>
            <Text>{producto.categoria}</Text>
            <Text>{(producto.precio).toFixed(2)}</Text>
            <BotonAccion title="Agregar" inhabilitado={false} enProceso={false} onPress={onPress} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 12,
    }
})
