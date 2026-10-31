import { Text, View } from "react-native"
import BotonAccion from "./BotonAccion"

type EncabezadoSeccionProps = {
    title: string,
    cantidad: number,
    mostrarEnlace?: boolean,
}

export default function EncabezadoSeccion({title, cantidad, mostrarEnlace = false}: EncabezadoSeccionProps) {
    return(
        <View>
            <Text>title</Text>
            <BotonAccion title={title} inhabilitado={mostrarEnlace} enProceso={false} onPress={() => {}}></BotonAccion>
        </View>
    )
}
