//union types

let score: number | string
score = 55
score = ""

const show = (n:number|string)=>{

    if(typeof n === "number"){
        console.log(n.toFixed())
    }

    if(typeof n === "string"){
        console.log(n.toUpperCase())
    }
}

const numeros: (string|number)[] = [1,"ad","sd"]

let tipoDeAsiento: "normal" | "premium" | "vip"

tipoDeAsiento = "normal"
tipoDeAsiento = "vip"


