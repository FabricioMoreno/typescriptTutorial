//aliases
//is like to create a reserve word as string,number

// const User = {
//     name:"Fabricio",
//     email:"e@email.com",
//     status:true
// }

//readonly not enable to change its value
//example of mongodb query
type User = {
    readonly _id?: string;
    name:string;
    email:string;
    status:boolean
    credidCard?:number
}

const createUser = (user:User):User=>{
    return {
        name:"",
        email:"",
        status:false
    }
}

createUser({
    name:"",
    email:"",
    status:true 
})


//Inserction of aliases
type numberCard = {
    number:number
}

type ownerCard = {
    name:string
}

type detailsCard = numberCard & ownerCard & {
    cvv:number
}

const card: detailsCard = {
    cvv:533,
    number:48809841980,
    name:""
}

export {}