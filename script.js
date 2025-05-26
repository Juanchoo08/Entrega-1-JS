const iva = 1.21;
let totalCarrito = 0;
const totalConIva = (precio) => precio * iva;

let prod1 = { nombre: "Netbook"};
let prod2 = { nombre: "Teclado"};
let prod3 = { nombre: "Mouse"};

prod1.precio = 25000;
prod2.precio = 10000;
prod3.precio = 5000;

let carrito = [];

let condition = true;
do { 
    let opcion = prompt(
        "Hola, elija la opción que desee:\n" +
        "1 - Agregar Producto\n" +
        "2 - Sacar\n" +
        "3 - Valor Total\n" +
        "4 - Salir"
    );
    switch (opcion) {
        case "1":
            let producto = prompt(
                "¿Qué producto desea agregar?\n" +
                "1 - " + prod1.nombre + " $" + prod1.precio + "\n" +
                "2 - " + prod2.nombre + " $" + prod2.precio + "\n" +
                "3 - " + prod3.nombre + " $" + prod3.precio
            );
            switch (producto) {
                case "1": carrito.push(prod1); break;
                case "2": carrito.push(prod2); break;
                case "3": carrito.push(prod3); break;
                default: alert("Opción no válida.");
            }
            break;
        case "2":
            carrito.pop();
            break;
        case "3":
            for (let producto of carrito) {
                totalCarrito += producto.precio;
            }
            alert("Subtotal: $" + totalCarrito + " y Total con Iva " + totalConIva(totalCarrito));
            condition = false;
            break;
        case "4":
            condition = false;
            break;
        default:
            alert("Opción no válida.");
    }
} while(condition);