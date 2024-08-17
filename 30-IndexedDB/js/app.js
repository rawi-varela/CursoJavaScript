// IndexedDB
// API de JS para almacenar grandes cantidades de datos estructurados (como una BD)
// Diferente a localStorage puede almacenar strings, booleans, archivos, cualquier tipo de dato en JS
// Tampoco tiene límite como LS, pero pregunta por lso archivos de más de 50MB
// Buen soporte en navegadores

// Se utilizan transacciones para las operaciones CRUD

let DB;

document.addEventListener('DOMContentLoaded', () => {
    crmDB();

    setTimeout(() => {
        crearCliente();
    }, 5000);
});

function crmDB() {
    // Crear BD versión 1.0
    let crmDB = window.indexedDB.open('crm', 1);

    // Si hay un error
    crmDB.onerror = function () {
        console.log('Hubo un error al crear la BD');
    }

    // si se creó bien
    crmDB.onsuccess = function() {
        console.log('BD creada');

        DB = crmDB.result; // Resultado de la creacion
    }

    // Configuración de la base de datos (Se ejecuta una sola vez)
    crmDB.onupgradeneeded = function(e) {
        const db = e.target.result; // Para tener la referencia de la BD

        // Este nos permite crear las columnas de la BD
        const objectStore = db.createObjectStore('crm', {
            keyPath: 'crm',
            autoIncrement: true
        });

        // Definir columnas     (columna, keyPath)
        objectStore.createIndex('nombre', 'nombre', { unique: false });
        objectStore.createIndex('email', 'email', { unique: true });
        objectStore.createIndex('telefono', 'telefono', { unique: false });

        console.log('Columnas Creadas');
    }
}

function crearCliente() {
    //                                 BD,  Modo (lectura,escritura)
    let transaction = DB.transaction(['crm'], 'readwrite');

    transaction.oncomplete = function() {
        console.log('Transacción completada');
    }

    transaction.onerror = function() {
        console.log('Hubo un error en la Transacción');
    }

    const objectStore = transaction.objectStore('crm');

    const nuevoCliente = {
        telefono: 343243324,
        nombre: 'alejandro',
        email: 'correo@correo.com'
    }

    const peticion = objectStore.add(nuevoCliente);
    // put actualiza, delete elimina,

    console.log(peticion);
}

