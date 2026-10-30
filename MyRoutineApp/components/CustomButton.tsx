import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

type CustomButtonProps = {
    //Tipo de dato: Cadena
    title: string;
    //Tipo de dato: Función vacía o método
    onPressButton: () => void;
    //Tipo de dato: Unión de literales
    variant?: "primary" | "secondary" | "tertiary"

    //Tipo de dato: Literal
    //variant: primary
}

export default function CustomButton({title, onPressButton, variant}: CustomButtonProps) {

    return(
        <TouchableOpacity style={styles.button} onPress={onPressButton}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create ({
    button: {
        backgroundColor: 'navy',
        padding: 12,
        marginTop: 10,
        width: 180,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: '500',
    }
})

