import { TouchableOpacity } from "react-native"

type BotonAccionProps = {
    apariencia?: "principal" | "alternativa" | "destructiva" | "enlace",
    tamano?: "pequeno" | "mediano" | "grande",
    ancho?: "todo" | "contenido",
    inhabilitado: boolean,
    enProceso: boolean,
    onPress: () => void,
}

export default function BotonAccion({apariencia = "principal", tamano = "mediano", ancho = "contenido", inhabilitado, enProceso, onPress}: BotonAccionProps) {

    return(
        <TouchableOpacity disabled={inhabilitado} onPress={onPress}>

        </TouchableOpacity>
    )
}
