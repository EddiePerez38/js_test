/*
Arrays
*/
//  var names = ['John', 'Mark', 'Jane'];
//  var years = new Array(1990, 1969, 1948);

//  console.log(names[0]);
//  console.log(names.length);

//  names[1] = 'Ben';
//  names[5] = 'Mary';

//  console.log(names);

//   //Different Data Types
//   var john = ['John', 'Smith', 1990, 'teacher', 'false'];

//   john.push('blue');
//   john.unshift('Mr.')
//   console.log(john);

//   john.pop()
//   john.pop()
//   john.shift()
//   console.log(john);

//   console.log(john.indexOf(1990));


function tipCalculator(bill) {
    var percentage;
    if (bill < 50 ){
        percentage = .2;
    }
    else if (bill >= 50 && bill < 200){
        percentage = .15;
    }
    else {
        percentage = .1;
    }
    return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]), 
            tipCalculator(bills[1]), 
            tipCalculator(bills[2])];
var findValues = [bills[0] + tips[0], bills[1] + tips[1], bills[0] + tips[0]]

console.log(tips);
