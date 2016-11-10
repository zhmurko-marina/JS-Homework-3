/**
 * Created by Marina on 07.11.2016.
 */

Array.prototype.myForEach = function (func) {
    for (var i = 0; i < this.length; i++) {
        func(this[i], i, this);
    }
};

Array.prototype.myMap = function (func) {
    var out = [];
    for (var i = 0; i < this.length; i++) {
        out[i] = func(this[i], i, this);
    }
    return out;
};

Array.prototype.mySort = function (func) {
    var tmp;
    for (var i = 0; i < this.length; i++) {
        for (var j = 0; j < this.length - 1 - i; j++) {
            this[j] += '';
            this[j + 1] += '';
            if (this[j] > this[j + 1]) {
                tmp = this[j + 1];
                this[j + 1] = this[j];
                this[j] = tmp;
            }
        }
    }
    return this;
};


/* Test for myForEach*/

function logArrayElements(element, index, array) {
    console.log('a[' + index + '] = ' + element);
}

var arr = [2, undefined, 5, 9];
console.log('MyForEach: ');
arr.myForEach(logArrayElements);
console.log(arr);
console.log('forEach: ');
arr.forEach(logArrayElements);


/* Test for myMap*/
function double(element, index, array) {
    return element * 2;
}
var numbers = [1, 4, 9];
var doubles = numbers.myMap(double);
var doubles2 = numbers.map(double);

console.log('myMap: ' + doubles + '\n');
console.log('  map: ' + doubles2 + '\n');


/* Test for mySort */

/*
 [1, 6, 10, 200, 0]
 ['filter', '', 'абрикос', 'GURU', 'Tree', 'Яблоко']
 ['слово', 'Слово', '1 Слово', '2 Слова']
 */

var scores = ['filter', '', 'абрикос', 'GURU', 'Tree', 'Яблоко'];
console.log(scores.mySort());
