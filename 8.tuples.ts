//tuples
//Specific an order and length

// const usuario: string[] = ["a","a"]
const usuario : readonly [string,number,boolean] = ["",5,true]

// usuario.push("a") //is usual use readonly in tuples

type User = [number,string]

const newUser:User = [5,""]
// newUser[0]= "nueveo" //Detect the type
newUser[0]= 8
