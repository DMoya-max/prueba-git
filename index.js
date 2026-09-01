console.log("=== Servidor de prueba iniciado ===");

function home() {
    console.log("Ruta principal: ¡Hola! Qué bueno verte por aquí.");
}

home();

function obtenerTareas() {
    return ["Aprender Git", "Crear ramas", "Resolver conflictos"];
}

console.log("Tareas pendientes:", obtenerTareas());
