function mostrarFechaActual() {
    const fechaElement = document.getElementById('fecha-actual');
    const fechaActual = new Date();
    const opcionesFecha = { year: 'numeric', month: 'long', day: 'numeric' };
    fechaElement.textContent = fechaActual.toLocaleDateString('es-ES', opcionesFecha);
}

window.onload = mostrarFechaActual;
