const user = {
    id:1,
    name:"Sandesh"
};
console.log(user.name);


//Now definng class, mostly like Java structure
class Employee {
    id=1;
    name="Sandesh";
    //Constcutor
    constructor(){
        this.id=5;
        this.name="Milan";
    }
}
console.log(Employee.name);
let e1 =new Employee();
console.log(e1.id + e1.name);

