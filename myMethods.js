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
    if (func == undefined) {
        var tmp = '';
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
        for (i = 0; i < this.length; i++) {
            if (typeof (this[i] - 1) == "number" && !(isNaN(this[i])) && this[i] != '') {
                this[i] = this[i] - 1 + 1;
            }
        }
    }
    else {
        for (i = 0; i < this.length; i++) {
            for (j = 0; j < this.length - 1 - i; j++) {
                if (func(this[j], this[j + 1]) > 0) {
                    tmp = this[j + 1];
                    this[j + 1] = this[j];
                    this[j] = tmp;
                }
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

var scores = [1, 6, 10, 200, 0];

function compareNumbers(a, b) {
    //return b - a;
    return a - b;
}
console.log('mySort: ' + ['filter', '', 'абрикос', 'GURU', 'Tree', 'Яблоко'].mySort() + '\n');
console.log('  sort: ' + ['filter', '', 'абрикос', 'GURU', 'Tree', 'Яблоко'].sort() +'\n');
console.log('mySort: ' + [1, 6, 10, 200, 0].mySort() + '\n');
console.log('  sort: ' + [1, 6, 10, 200, 0].sort() +'\n');
console.log('mySort with function: ' + [1, 6, 10, 200, 0].mySort(compareNumbers) + '\n');
console.log('  sort with function: ' + [1, 6, 10, 200, 0].sort(compareNumbers) +'\n');