export default class CL_Producto{
    constructor(cod,cost,tip){
        this.cod=cod;
        this.cost= parseInt(cost);
        this.tip=tip;   
    }
    setCod(c){
        this._cod=c;
    }
    setCost(ct){
        this._cost= +ct;
    }
    setTip(t){
        this._tip=+t;
    }
    getCod(){
        return this._cod;
    }
    getCost(){
        return this._cost;
    }
    getTip(){
        return this._tip;
    }
    precioBasedeVentas(){
        return this.cost + (this.cost*0.3);
    }
    descuento(){
        if(this.tip==3)
            return this.precioBasedeVentas()*0.10; 
        else
             return 0; 
           
    }
    precioFinal(){
        return this.precioBasedeVentas() - this.descuento();
    }

}