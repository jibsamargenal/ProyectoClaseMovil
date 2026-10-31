# P1
type BotonAccionProps = {
    apariencia?: "principal" | "alternativa" | "destructiva" | "enlace",
    tamano?: "pequeno" | "mediano" | "grande",
    ancho?: "todo" | "contenido",
    inhabilitado: boolean,
    enProceso: boolean,
    onPress: () => void,
}

Los props apariencia, tamano, y ancho son opcionales porque tienen valores por defecto. Por lo tanto, si no especifican siempre tendrán un valor implícito. En el archivo BotonAccion.tsx, linea 14, se pasa la variable de tipo booleana al atributo "disabled" por lo que si la variable es verdadera el boton de deshabilitará. No basta con bajar la opacidad, porque el botón permanecerá activo en el documento HTML y podrá generar una acción si se logra hacer clic en él.

# P2
En App.tsx, se define la función handleOnPressFavoritos en la línea 68. La función se envía como prop a TarjetaProducto en la línea 93. En TarjetaProducto.tsx, se recibe como prop en la línea 12, para luego enviarla al BotonAccion en la línea 24. BotonAccion.tsx recibe el prop en línea 21 y finalmente lo pasa al atributo onPress de TouchableOpacity en la línea 26.


# P3


# P4
En la linea 7 de EncabezadoSeccion.tsx, se define el prop mostrarEnlace de tipo booleano, que luego en la línea 20, la condicional true && tomará para validar si se debe mostrar el BotonAccion o no.

# P5
En App.tsx, se define la función handleOnPressMenu en línea 62 de tipo vacía que recibe el título de alerta y el producto. Se definió en esta pantalla para especificar el comportamiento cuando se debe añadir un producto al pedido.

En la línea 68, se define la función handleOnPressFavoritos, de tipo vacía que recibe el título de alerta y el producto. Se definió en esta pantalla para que el mensaje sea concreto con el de un pedido rápido.

En la línea 75, se define la función handleOnPressPedido, de tipo vacía que recibo el título de alerta y el mensaje. Se definió en esta pantalla porque los componentes BotonAccion que reciben esta función se encuentran directamente instanciados en App.tsx.

# P6
Para agregar la sección Promociones, se modificaría App.tsx, para añadir un Encabezado que diga "Promociones" y el BotonAccion. Las funciones manejadoras de eventos se definen directamente en App.tsx y pasan al botón por medio de props.

# E1
Type '"bebidas"' is not assignable to type '"bebida" | "comida" | "postre"'. Did you mean '"bebida"'?ts(2820)
App.tsx(9, 3): The expected type comes from property 'categoria' which is declared here on type 'Producto'
(property) categoria: "bebida" | "comida" | "postre"

En la línea 24 aparece este error, por que se espera que el parametro se uno de los tres literales definidos y "bebidas" es un literal distinto a "bebida".

# E2
Property 'categoria' is missing in type '{ nombre: string; precio: number; disponibilidad: "disponible"; observaciones: string; }' but required in type 'Producto'.ts(2741)

Los campos opcionales no son requeridos por el tipo definido, además se declararon valores por defecto en caso que el parametro no esté definido.

# E3
 ERROR  SyntaxError: /Users/jibsam/projects/ProyectoClaseMovil/CampusCafe/App.tsx: JSX attributes must only be assigned a non-empty expression. (89:51)

  87 |         <TarjetaProducto producto={empanada} precioDescuento={27} onPress={() => handleOnPressMenu('Éxito', empanada)} />
  88 |         <TarjetaProducto producto={sandwich} onPress={() => handleOnPressMenu('Éxito', sandwich)} />
> 89 |         <TarjetaProducto producto={pastel} onPress={} />
     |                                                    ^
  90 |         <TarjetaProducto producto={galleta} precioDescuento={36} onPress={() => handleOnPressMenu('Éxito', galleta)} />
  91 |
  92 |         <EncabezadoSeccion title='Sus favoritos' cantidad={2} mostrarEnlace={false}/>

Esta prop es obligatoria porque se necesita definir la lógica del manejador de evento para que el botón pueda tener una utilidad.
