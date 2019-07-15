//Object Literal
// var john = {
//     firstName: 'john', 
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ["jane", "Mark", "Bob", "Emily"],
//     job: 'teacher',
//     isMarried: false
// };
// console.log(john.firstName);
// console.log(john['lastName']);
// var x = 'birthYear';
// console.log(john[x]);

// john.job = 'designer';
// john['isMarried'] = true;
// console.log(john);

// //New object Syntax
// var jane = new Object();
// jane.firstName = 'Jane';
// jane.birthYear = 1969;
// jane['lastName'] = 'Smith';
// console.log(jane);

/*
Methods
*/

// var john = {
//     firstName: 'john', 
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ["jane", "Mark", "Bob", "Emily"],
//     job: 'teacher',
//     isMarried: false,
//     calcAge: function() {
//         this.age =  2018 - this.birthYear; 
//     }
// };

// john.calcAge();
// console.log(john);

var mark = {
    name: 'mark',
    height: 20,
    mass: 800,
    calcBMI: function(){
        this.BMI = (this.mass/(this.height * this.height));
        return this.BMI;
    }
};

var john = {
    name: 'john',
    height: 20,
    mass: 800,
    calcBMI: function(){
        this.BMI = (this.mass/(this.height * this.height));
        return this.BMI;
    }
};

mark.calcBMI();
john.calcBMI();
console.log(john.BMI, mark.BMI)

function highestBMI(){
    if (mark.BMI > john.BMI){
        console.log("Mark's BMI is higher at: " + mark.BMI + "vs John's BMI at: " + john.BMI);
    }
    else if (mark.BMI === john.BMI){
        console.log("Mark and John's BMI are the same at: " + john.BMI);
    }
    else {
        console.log("John's BMI is higher at: " + john.BMI + "vs Mark's BMI at: " + mark.BMI)
    }
}

console.log(highestBMI())
