// Bienvenida al usuario
alert("¡Bienvenido a tu Garaje!");

// Objeto para almacenar autos
let garaje = {
    deportivos: [],
    familiares: []
};

/**
 * Función para registrar un auto en el garaje.
 */
function registrarAuto() {
    let continuar = true;

    while (continuar) {
        // Solicitar datos del usuario
        let tipo = prompt('¿Qué tipo de auto deseas registrar?\nEscribe "d" para Deportivo o "f" para Familiar.').toLowerCase();
        let auto = {};

        auto.marca = prompt("Ingrese la marca del auto:");
        auto.modelo = prompt("Ingrese el modelo del auto:");
        auto.año = prompt("Ingrese el año del auto:");
        auto.color = prompt("Ingrese el color del auto:");

        // Clasificar el auto en el garaje
        if (tipo === "d") {
            garaje.deportivos.push(auto);
            alert(`🚗 Has agregado un auto deportivo: ${auto.marca} ${auto.modelo}`);
        } else if (tipo === "f") {
            garaje.familiares.push(auto);
            alert(`🚙 Has agregado un auto familiar: ${auto.marca} ${auto.modelo}`);
        } else {
            alert("⚠️ Opción inválida. Por favor, ingresa 'd' o 'f'.");
            continue;
        }

        // Preguntar si desea continuar
        continuar = confirm("¿Quieres registrar otro auto?");
    }

    // Mostrar los autos registrados
    mostrarGaraje();
}

/**
 * Función para mostrar los autos registrados.
 */
function mostrarGaraje() {
    alert("📋 Lista de autos registrados:\n" +
        "🚗 Autos Deportivos:\n" +
        garaje.deportivos.map(auto => `- ${auto.marca} ${auto.modelo} (${auto.año}, ${auto.color})`).join("\n") +
        "\n\n🚙 Autos Familiares:\n" +
        garaje.familiares.map(auto => `- ${auto.marca} ${auto.modelo} (${auto.año}, ${auto.color})`).join("\n")
    );
}

// Ejecutar el simulador al cargar la página
registrarAuto();
