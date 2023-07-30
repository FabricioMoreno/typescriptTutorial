const User = {
    name:"Fabricio",
    email:"e@email.com",
    status:true
}

const createUser = ({user,isActive}:{ user: string; isActive: boolean })=>{}
const newUser = {user:"ana",isActive:false,isPaid:true}

createUser(newUser)

// createUser({user:"ana",isActive:false,isPaid:true}) //Aqui da error y en el de arriba no
//Existe mejor manera de tratarlo y es con interfaces

const createCourse = ():{name:string,price:number}=>{
    return{
        name:"react",
        price:30
    }
}

export {}