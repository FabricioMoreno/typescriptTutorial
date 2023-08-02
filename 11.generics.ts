//generics
//Allow generalize functionalites

const print1 = (value:number)=>{
    return value
}
const print2 = (value:String)=>{
    return value
}

const print = <T>(value:T):T =>{
    return value
}

interface constraints{
    length: number
}

const see = <T extends constraints>(value:T):T=>{
    return value
}
see("adsfs")
see(["5,8"])
// see(true) error

interface Person<T,U>{
    (firstname: T, age: U ) : void;
    (firs: string, age: number ) : void;
};
 
function introducePerson<T, U>(firstname: T, age: U): void{
    console.log('Hey! My name is ' + firstname + ',and I am ' + age);
}
 
let person1: Person<string, number> = introducePerson;
person1("Amara", 12); // Output: Hey! My name is Amara, and I am 12



export {}