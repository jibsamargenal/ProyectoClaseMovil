import { StatusBar } from 'expo-status-bar';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import BotonAccion from './components/BotonAccion';
import EncabezadoSeccion from './components/EncabezadoSeccion';
import TarjetaProducto from './components/TarjetaProducto';

export type Producto = {
  nombre: string,
  categoria: "bebida" | "comida" | "postre",
  precio: number,
  disponibilidad: "disponible" | "pocas unidades" | "agotado",
  observaciones?: string,
}

const americano: Producto = {
  nombre: "Café americano",
  categoria: "bebida",
  precio: 35,
  disponibilidad: "disponible"
}

const licuado: Producto = {
  nombre: "Licuado de fresa",
  categoria: "bebida",
  precio: 55,
  disponibilidad: "pocas unidades",
  observaciones: "Producto nuevo"
}

const empanada: Producto = {
  nombre: "Empanada de queso",
  categoria: "comida",
  precio: 30,
  disponibilidad: "disponible",
  observaciones: "10% de descuento"
}

const sandwich: Producto = {
  nombre: "Sándwich de pollo",
  categoria: "comida",
  precio: 75,
  disponibilidad: "agotado"
}

const pastel: Producto = {
  nombre: "Pastel de chocolate",
  categoria: "postre",
  precio: 45,
  disponibilidad: "pocas unidades",
  observaciones: "20% de descuento"
}

const galleta: Producto = {
  nombre: "Galleta de avena",
  categoria: "postre",
  precio: 20,
  disponibilidad: "disponible",
  observaciones: "Producto nuevo"
}

export default function App() {
  function handleOnPressMenu(titulo: string, producto: Producto) {
    Alert.alert(
      titulo, `${producto.nombre} agregado al pedido`
    )
  }

  function handleOnPressFavoritos(titulo: string, producto: Producto){
    Alert.alert(
      titulo, `Pedido rápido: ${producto.nombre}`
    )
  }


  function handleOnPressPedido(titulo: string, mensaje: string) {
    Alert.alert(
      titulo, mensaje
    )
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <EncabezadoSeccion title='Menú del día' cantidad={6} mostrarEnlace={true}/>
        <TarjetaProducto producto={americano} onPress={() => handleOnPressMenu('Éxito', americano)} />
        <TarjetaProducto producto={licuado} onPress={() => handleOnPressMenu('Éxito', licuado)} />
        <TarjetaProducto producto={empanada} precioDescuento={27} onPress={() => handleOnPressMenu('Éxito', empanada)} />
        <TarjetaProducto producto={sandwich} onPress={() => handleOnPressMenu('Éxito', sandwich)} />
        <TarjetaProducto producto={pastel} onPress={() => handleOnPressMenu('Éxito', pastel)} />
        <TarjetaProducto producto={galleta} precioDescuento={36} onPress={() => handleOnPressMenu('Éxito', galleta)} />

        <EncabezadoSeccion title='Sus favoritos' cantidad={2} mostrarEnlace={false}/>
        <TarjetaProducto producto={americano} onPress={() => handleOnPressFavoritos('Éxito', americano)} />
        <TarjetaProducto producto={galleta} onPress={() => handleOnPressFavoritos('Éxito', americano)} />

        <EncabezadoSeccion title='Su pedido' mostrarEnlace={false}/>
        <BotonAccion title="Confirmar pedido" ancho={"todo"} inhabilitado={false} enProceso={false} onPress={() => handleOnPressPedido("Éxito", "Pedido confirmado")}/>
        <BotonAccion title="Vaciar pedido" apariencia='destructiva' ancho={"todo"} inhabilitado={false} enProceso={false} onPress={() => handleOnPressPedido("Éxito", "Se vació el pedido")}/>
        <BotonAccion title="Enviando.." ancho={"todo"} inhabilitado={true} enProceso={true} onPress={() => {}}/>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
