# P1
type BotonAccionProps = {
    apariencia?: "principal" | "alternativa" | "destructiva" | "enlace",
    tamano?: "pequeno" | "mediano" | "grande",
    ancho?: "todo" | "contenido",
    inhabilitado: boolean,
    enProceso: boolean,
    onPress: () => void,
}

Los props apariencia, tamano, y ancho son opcionales porque tienen valores por defecto. Por lo tanto, si no especifican siempre tendrán un valor implícito. En el archivo BotonAccion.tsx, linea 15, se pasa la variable de tipo booleana al atributo "disabled" por lo que si la variable es verdadera el boton de deshabilitará. No basta con bajar la opacidad, porque el botón permanecerá activo en el documento HTML y podrá generar una acción si se logra hacer clic en él.

# P2


