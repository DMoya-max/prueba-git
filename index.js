console.log("=== Servidor de prueba iniciado ===");

function home() {
    console.log("Ruta principal: ¡Hola! Estimado usuario, bienvenido al sistema.");
}

home();

function obtenerTareas() {
    console.log("Obteniendo tareas")
    return ["Aprender Git", "Crear ramas", "Resolver conflictos"];
}

console.log("Tareas pendientes:", obtenerTareas());
