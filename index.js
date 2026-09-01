console.log("=== Servidor de prueba iniciado ===");

function home() {
    console.log("Ruta principal: Estimado usuario, bienvenido a la plataforma.");
}
home();

function obtenerTareas() {
    return ["Aprender Git", "Crear ramas", "Resolver conflictos"];
}

console.log("Tareas pendientes:", obtenerTareas());
