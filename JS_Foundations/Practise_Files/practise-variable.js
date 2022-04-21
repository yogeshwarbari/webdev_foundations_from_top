// let admin;
// let name = "John";

// admin = name;
// alert(admin);

var name = "Raju";

{
    // var name = "Kaju";
    console.log(name);
    var salary = 100000;
}

alert(name);//redeclaration issue
alert(salary); // scope issue available outside declaration scope


let newName = "Jack";

{
    let newName ="Karan";
    let newSalary = 200000;
    alert(newName); // newName = Karan
}
alert(newName); // newName= Jack
console.log(newSalary); //not defined error
