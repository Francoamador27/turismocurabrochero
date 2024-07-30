document.getElementById('whatsappLink').addEventListener('click', function () {
    const form = document.getElementById('viajeForm');
    const nombre = form.nombre.value;
    const pasajeros = form.pasajeros.value;
    const email = form.email.value;
    const telefono = form.telefono.value;
    const origen = form.origen.value;
    const destino = form.destino.value;
    const movimientos = form.movimientos.value;
    const fechaSalida = form.fecha_salida.value;
    const fechaRegreso = form.fecha_regreso.value;

    const mensaje = `Nombre: ${nombre}
Número de pasajeros: ${pasajeros}
Correo electrónico: ${email}
Teléfono: ${telefono}
Origen del viaje: ${origen}
Destino del viaje: ${destino}
Movimientos: ${movimientos}
Fecha de salida: ${fechaSalida}
Fecha de regreso: ${fechaRegreso}`;

    const whatsappURL = `https://wa.me/543512037048?text=${encodeURIComponent(mensaje)}`;
    window.open(whatsappURL, '_blank');
});