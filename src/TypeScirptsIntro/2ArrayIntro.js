var arrInt = ["one", "two", "Three"];
console.log(arrInt[2]); //prints Three being in 3rd value. 2nd index
for (var i = 0; i < arrInt.length; i++) {
    console.log(arrInt[i]);// for out of bound will print undefined
}
