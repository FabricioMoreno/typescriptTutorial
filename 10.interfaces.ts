//interfaces 
interface User{
    name:string
    age:number
    // startTrial:()=>string
    startTrial():string
    getCuppon(name:string,value:number):number

}
//Reopen interface: add value without touch the original interface (imposible do it with type)
interface User{
    githubToken?:string
}

interface Admin extends User{
    role: "admin" | "learner" | "qa"
}

const newUser: User = {
    name:"",
    age:20,
    startTrial:()=>{return""},
    getCuppon:(n:"f",v:80)=>{return 5}
}

newUser.getCuppon("a",9)

export {}