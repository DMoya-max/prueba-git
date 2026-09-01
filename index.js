console.log("=== Servidor de prueba iniciado ===");

function home() {
    console.log("Ruta principal: ¡Bienvenido al proyecto!");
}

home();

function obtenerTareas() {
    return ["Aprender Git", "Crear ramas", "Resolver conflictos"];
}

console.log("Tareas pendientes:", obtenerTareas());
