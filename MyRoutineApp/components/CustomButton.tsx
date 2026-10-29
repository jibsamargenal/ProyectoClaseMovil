import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

type CustomButtonProps = {
    title: string;
    onPress: () => void;
}

export default function CustomButton({title}: CustomButtonProps) {

    return(
        <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}
