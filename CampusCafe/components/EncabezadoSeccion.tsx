import { Alert, StyleSheet, Text, View } from "react-native"
import BotonAccion from "./BotonAccion"

type EncabezadoSeccionProps = {
    title: string,
    cantidad?: number,
    mostrarEnlace?: boolean,
}

export default function EncabezadoSeccion({title, cantidad, mostrarEnlace = false}: EncabezadoSeccionProps) {
    function handleOnPress() { 
        Alert.alert(
            "Mostrando el menú completo"
        )
    }

    return(
        <View>
            <Text style={styles.text}>{title}</Text>
            {mostrarEnlace && 
                (<BotonAccion title="Ver todo" apariencia="enlace" enProceso={false} inhabilitado={false} onPress={handleOnPress}/>)
            }
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontWeight: 700,
    }
})
