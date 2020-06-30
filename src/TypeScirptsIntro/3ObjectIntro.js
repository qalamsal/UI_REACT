var user = {
    id: 1,
    name: "Sandesh"
};
console.log(user.name);
//Now definng
var Employee = /** @class */ (function () {
    //Constcutor
    function Employee() {
        this.id = 1;
        this.name = "Sandesh";
        this.id = 5;
        this.name = "Milan";
    }
    return Employee;
}());
console.log(Employee.name);
var e1 = new Employee();
console.log(e1.id + e1.name);
