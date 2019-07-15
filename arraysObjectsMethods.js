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


function tipCalculator(bill1, bill2, bill3) {
    if (bill1 >= 50 && bill1 <= 199){
        console.log('The tip is ' + bill1 * .20 + ' and the bills is ' + bill1 * 1.20 );
    }
}
