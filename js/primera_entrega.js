
let opcion = 0;
// Array de productos en el inventario
let inventario = [ 
    { nombre:"Producto 1", precio: 20, cantidad: 10 },
    { nombre:"Producto 2", precio: 30, cantidad: 5 },

];
do{
    opcion=Number(prompt(`Bienvenido \n
    1. Mostrar inventario \n
    2. Registrar producto al inventario \n
    3. Eliminar un producto del inventario \n
    4. Cantidad de productos \n
    0. Salir`))
    switch (opcion) {
        case 1:
            mostrarInventario();
    break;
        case 2:
            agregarNuevoProducto();
        break
        case 3:
            eliminarUnProducto();
            break
        case 4:
            calculartotal();
            break
        case 0:
            alert("Adios.")
            break
    }
}
while(opcion!=0)



function agregarNuevoProducto(){
    const nombre = prompt("ingrese el nombre del producto");
    const precio = parseFloat(prompt("ingrese el precio del producto"));
    const cantidad = parseInt(prompt("ingrese la cantidad del producto"));
    const nuevoProducto  = { nombre, precio, cantidad};
    inventario.push(nuevoProducto);
    alert("Producto agregado con exito")
    if (window.confirm("¿Deseas agregar otro producto?")) {
        agregarNuevoProducto();
      }
    
}   

function eliminarUnProducto(){
    
    if (inventario.length === 0) {
       alert("El inventario esta vacio por lo tanto no puedes borrar mas.")
      } else {
        inventario.pop();
        alert("Ha eliminado un producto")
        mostrarInventario();
      }
    
}
function mostrarInventario(){
    //inventario[0].forEach(elemento =>{
       //alert(JSON.stringify(elemento))
        //alert(JSON.stringify(inventario[0,1]))
    //})
    if (inventario.length === 0) {
        alert("el inventario esta vacio")
    }

    let mensaje = "";
    for(let i = 0; i < inventario.length; i++){
        mensaje += "Producto: " + inventario[i].nombre + "\n";
        mensaje += "Precio: " + inventario[i].precio + "\n";
        mensaje += "Cantidad: " + inventario[i].cantidad + "\n";
        mensaje += "----------------------------------------\n"
        
    }
    alert(mensaje);
}
function calculartotal() {
    let mensaje = "Detalle de iventario: \n";
    let total ="";
    for(let i = 0; i < inventario.length; i++){
        mensaje += "Producto: " +  inventario[i].nombre + ", " + "Cantidad: " +  inventario[i].cantidad + "\n";
        total += inventario[i].cantidad;
        
    }
    mensaje += "total de productos " + total;
    alert(mensaje);
}






