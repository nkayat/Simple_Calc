
//add new feature - button
 
//add new feature - form

function Solve(val) {
    let v = document.getElementById('res');
    v.value += val;
 }
 function Result() {
    let num1 = document.getElementById('res').value;
    let num2 = eval(num1);
    document.getElementById('res').value = num2;
 }
 function Clear() {
    let inp = document.getElementById('res');
    inp.value = '';
 }
 function Back() {
    let ev = document.getElementById('res');
    ev.value = ev.value.slice(0,-1);
 }