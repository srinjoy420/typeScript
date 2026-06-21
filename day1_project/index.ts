let age:number=21
let userName:string="John Doe"
let big:bigint=5465443464n
let noting:null=null
let notAssigned:undefined=undefined
let isActive:boolean=true
console.log("real age",age);
console.log("real name",userName);

// tuple
let array:[string,number,boolean]=["123",45,true]
// array
let scores:number[]=[1,2,3]

//union
let id:number | string="01001";
// enum
let role:"admin" | "user" | "guest"="admin"

enum Status{
    PENDING,
    SUCCESS,
    FAILED
}
let eCom:Status=Status.PENDING