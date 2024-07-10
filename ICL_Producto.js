export default class ICL_Producto{
    leerCod(){
        return prompt("ingrese el còdigo");
    }
    leerCost(){
        return prompt("ingrese el costo");
    }
    leerTip(){
        return prompt("ingrese el tipo: 1=dama, 2=caballero, 3=niño");
    }
    reporteProducto(cod,p,d,pf){
        return `
        <br> Còdigo: ${cod}
        <br> Precio base:$ ${p}
        <br> Descuento:$ ${d}
        <br> Precio final:$ ${pf}`
        
    }
}