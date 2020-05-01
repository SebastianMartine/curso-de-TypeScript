
type Heroe = {

  nombre:string,
  poderes:string[],
  edad:number,
  getNombre:() => string

}



let flash:Heroe = {

  nombre: "barry allen",
  edad: 25,
  poderes:["puede correr rapido","Puede viajar por el tiempo"],

  getNombre(){
    return this.nombre;
  }

};

let superMan:Heroe = {

  nombre: "clark ken",
  edad: 25,
  poderes:["puede volar"],

  getNombre(){
    return this.nombre;
  }

}
