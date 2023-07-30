//functions

function sumar(num:number):number{
    return num +2
}

//Retorno de dos tipos de variables
//solucion union types
function obtenerValor(val:number){
    if(val>5){
        return true
    }

    return "200"
}

const hola = (s:string):void=>{
    console.log("aqui")
}


const heroes = ["spidi","thor"]
// const heroes = [1,2]
heroes.map((hero:string):string=>{
    return hero+"2"
})

function error():never{
    throw new Error("error")
}



const resultado = sumar(5)
hola(" ")