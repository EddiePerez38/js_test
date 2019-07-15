// for (var i = 0; i < 20; i += 2) {
//     console.log(i);
// }

/*
//For Loop
var john = ['John', 'Smith', 1990, 'teacher', false];

for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

//While Loop
var i = 0
while(i < john.length){
    console.log(john[i]);
    i++;
}
*/

// var john = ['John', 'Smith', 1990, 'teacher', false];


//Continue or skipping an index in an array
// for (var i = 0; i < john.length; i++) {
//     if (typeof john[i] !== 'string') continue;
//     console.log(john[i]);
// }

//Breaking a Loop
// for (var i = 0; i < john.length; i++) {
//     if (typeof john[i] !== 'string') break;
//     console.log(john[i]);
// }


//Looping Backwards
// for (var i = john.length - 1; i >= 0; i--){
//     console.log(john[i]);
// }

// function tipCalculator(bill) {
//     var percentage;
//     if (bill < 50 ){
//         percentage = .2;
//     }
//     else if (bill >= 50 && bill < 200){
//         percentage = .15;
//     }
//     else {
//         percentage = .1;
//     }
//     return percentage * bill;
// }

// var bills = [124, 48, 268];
// var tips = [tipCalculator(bills[0]), 
//             tipCalculator(bills[1]), 
//             tipCalculator(bills[2])];
// var finalValues = [bills[0] + tips[0], bills[1] + tips[1], bills[0] + tips[0]]

// console.log(tips, finalValues);

var john = {
    fullName: 'John SMith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function(){
        this.tips = [];
        this.finalValue = [];

        for (var i = 0; i < this.bills.length; i++){
            var percentage;
            var bill = this.bills[i];

            if (bill < 50) {
                percentage = .2;
            }
            else if (bill >= 50 && bill < 200){
                percentage = .15;
            }
            else {
                percentage = .1;
            }
            this.tips[i] = bill * percentage;
            this.finalValue[i] = bill + bill * percentage;
        }
    }
}
var mark = {
    fullName: 'Mark Miller',
    bills: [77, 475, 110, 45],
    calcTips: function(){
        this.tips = [];
        this.finalValue = [];

        for (var i = 0; i < this.bills.length; i++){
            var percentage;
            var bill = this.bills[i];

            if (bill < 100) {
                percentage = .2;
            }
            else if (bill >= 100 && bill < 300){
                percentage = .1;
            }
            else {
                percentage = .25;
            }
            this.tips[i] = bill * percentage;
            this.finalValue[i] = bill + bill * percentage;
        }
    }
}

function calcAverage(tips) {
    var sum = 0;
    for (var i =0; i< tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}


john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);

console.log(john, mark);