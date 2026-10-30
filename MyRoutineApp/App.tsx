import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import CustomButton from './components/CustomButton';

export default function App() {

  function handleOnPressPrimaryButton() {
    console.log("Imprimiendo desde boton 1");
  }

  function handleOnPressSecondaryButton() {
    console.log("Imprimiendo desde boton 2");
  }
  
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <View style={styles.buttonsContainer}>
        <CustomButton title="My App Button" onPressButton={handleOnPressPrimaryButton}/>
        <CustomButton title="My App Button #2" onPressButton={handleOnPressSecondaryButton}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    padding: 15,
    backgroundColor: 'pink',
  }
});
