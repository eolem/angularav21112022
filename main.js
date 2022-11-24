const a = [10,20,30,40,50]
const [b,c,...d] = a 

console.log(b,c,d)

const obj = {firstName:"Fred",lastName:"Gaurat",age:46}
const {lastName,...leReste} = obj;
console.log(lastName)
console.log(leReste)

const obj1 = {...obj,age:22}
console.log(obj)
console.log(obj1)


