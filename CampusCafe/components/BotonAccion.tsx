import { StyleSheet, Text, TouchableOpacity } from "react-native";

type aparienciaVariant = "principal" | "alternativa" | "destructiva" | "enlace";

type tamanoVariant =  "pequeno" | "mediano" | "grande";

type anchoVariant = "todo" | "contenido";

type BotonAccionProps = {
    title: string,
    apariencia?: aparienciaVariant,
    tamano?: tamanoVariant,
    ancho?: anchoVariant,
    inhabilitado: boolean,
    enProceso: boolean,
    onPress: () => void,
}



export default function BotonAccion({title, apariencia = "principal", tamano = "mediano", ancho = "contenido", inhabilitado, enProceso, onPress}: BotonAccionProps) {
    const buttonStyle = [aparienciaVariants[apariencia]["boton"], anchoVariant[ancho]]
    const textStyle = aparienciaVariants[apariencia]["texto"]

    return(
        <TouchableOpacity disabled={inhabilitado} onPress={onPress} style={[styles.button, buttonStyle]}>
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}

const aparienciaVariants = {
    principal: {
        boton: {
            backgroundColor: 'purple',
        }, 
        texto: {
            color: 'white',
        }
    },
    alternativa: {
        boton: {
            backgroundColor: 'yellow',
        }, 
        texto: {
            color: 'black',
        }
    },
    destructiva: {
        boton: {
            backgroundColor: 'red',
        }, 
        texto: {
            color: 'white',
        }
    },
    enlace: {
        boton: {
            backgroundColor: 'navy',
        }, 
        texto: {
            color: 'white',
        }
    }
}

const anchoVariant = {
    todo: {
        alignSelf: 'stretch',
    },
    contenido: {
        alignSelf: 'flex-start',
    }
}

const styles = StyleSheet.create({
    button: {
        padding: 12,
        marginTop: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontWeight: 200,
    }
})


