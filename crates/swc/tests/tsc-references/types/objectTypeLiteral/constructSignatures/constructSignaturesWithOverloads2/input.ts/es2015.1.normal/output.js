// No errors expected for basic overloads of construct signatures with merged declarations
// clodules
class C {
    constructor(x){
    }
}
(function(C1) {
    C1.x = 1;
})(C || (C = {
}));
var r1 = new C(1, '');
class C2 {
    constructor(x){
    }
}
(function(C21) {
    C21.x = 1;
})(C2 || (C2 = {
}));
var r2 = new C2(1, '');
var i2;
var r4 = new i2(1, '');
var r5 = new i2(1, 1);
