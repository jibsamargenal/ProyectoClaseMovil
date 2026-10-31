import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
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
  return (
    <ScrollView>
      <EncabezadoSeccion title='Menú del día' cantidad={6} mostrarEnlace={false}/>
      <TarjetaProducto producto={americano} />
      <TarjetaProducto producto={licuado} />
      <TarjetaProducto producto={empanada} />
      <TarjetaProducto producto={sandwich} />
      <TarjetaProducto producto={pastel} />
      <TarjetaProducto producto={galleta} />

      <EncabezadoSeccion title='Sus favoritos' cantidad={2} mostrarEnlace={false}/>
      <TarjetaProducto producto={americano} />
      <TarjetaProducto producto={galleta} />

      <EncabezadoSeccion title='Su pedido' mostrarEnlace={false}/>
      <BotonAccion title="Confirmar pedido" ancho={"todo"} inhabilitado={false} enProceso={false} onPress={() => {}}/>
      <BotonAccion title="Vaciar pedido" ancho={"todo"} inhabilitado={false} enProceso={false} onPress={() => {}}/>
      <BotonAccion title="Enviando.." ancho={"todo"} inhabilitado={false} enProceso={true} onPress={() => {}}/>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
