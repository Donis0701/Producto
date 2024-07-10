/**De un producto se conoce su código, costo y tipo(1:dama,2:caballero,3:niño).Se sabe que el precio base de venta del producto resulta de incrementar un 30% al costo del mismo;además,el precio final del producto tiene un 10% de descuento si es para niños.Realice un programa que muestre: el código, el precio base de venta, el descuento y el precio final.**/
import CL_Producto from "./CL_Producto.js";
import ICL_Producto from "./ICL_Producto.js";
let IProd = new ICL_Producto(),
c = IProd.leerCod(),
ct = IProd.leerCost(),
t = IProd.leerTip(),

prod = new CL_Producto(c,ct,t),
  salida = document.getElementById("salida");
 salida.innerHTML = IProd.reporteProducto(prod.cod,prod.precioBasedeVentas(),prod.descuento(),prod.precioFinal());