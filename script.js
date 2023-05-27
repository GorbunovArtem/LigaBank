var tbl1 = document.getElementById("tbl1");
var tbl2 = document.getElementById("tbl2");
var tbl3 = document.getElementById("tbl3");
var tbl4 = document.getElementById("tbl4");
var tblbut1 = document.getElementById("tblbut1");
var tblbut2 = document.getElementById("tblbut2");
var tblbut3 = document.getElementById("tblbut3");
var tblbut4 = document.getElementById("tblbut4");

function func1(){
    tbl1.style.display = "block";
    tbl2.style.display = "none";
    tbl3.style.display = "none";
    tbl4.style.display = "none";
    tblbut1.style.backgroundColor = "rgb(246,247,255)";
    tblbut2.style.backgroundColor = "white";
    tblbut3.style.backgroundColor = "white";
    tblbut4.style.backgroundColor = "white";
}
function func2(){
    tbl1.style.display = "none";
    tbl2.style.display = "block";
    tbl3.style.display = "none";
    tbl4.style.display = "none";
    tblbut1.style.backgroundColor = "white";
    tblbut2.style.backgroundColor = "rgb(246,247,255)";
    tblbut3.style.backgroundColor = "white";
    tblbut4.style.backgroundColor = "white";
}
function func3(){
    tbl1.style.display = "none";
    tbl2.style.display = "none";
    tbl3.style.display = "block";
    tbl4.style.display = "none";
    tblbut1.style.backgroundColor = "white";
    tblbut2.style.backgroundColor = "white";
    tblbut3.style.backgroundColor = "rgb(246,247,255)";
    tblbut4.style.backgroundColor = "white";
}
function func4(){
    tbl1.style.display = "none";
    tbl2.style.display = "none";
    tbl3.style.display = "none";
    tbl4.style.display = "block";
    tblbut1.style.backgroundColor = "white";
    tblbut2.style.backgroundColor = "white";
    tblbut3.style.backgroundColor = "white";
    tblbut4.style.backgroundColor = "rgb(246,247,255)";
}

var cost = document.getElementById("cost");
var bet = document.getElementById("bet");
var contribution = document.getElementById("contribution");
var contrng = document.getElementById("contrng");
var ages = document.getElementById("ages");
var agesrng = document.getElementById("agesrng");

var sum = document.getElementById("sum");
var namecred = document.getElementById("namecred");
var monthpay = document.getElementById("monthpay");
var proc = document.getElementById("proc");
var zp = document.getElementById("zp");

var ourst = Math.pow((1+Number(bet.value)/12/100),(Number(ages.value)));

function minus(){
    cost.value = Number(cost.value)-100000;
    contribution.value = (Number(cost.value)*Number(contrng.value))/100;
}
function plus(){
    cost.value = Number(cost.value)+100000;
    contribution.value = (Number(cost.value)*Number(contrng.value))/100;
}
function fcontrng(){
    contribution.value = (Number(cost.value)*Number(contrng.value))/100;
}
function agerng(){
    ages.value = Number(agesrng.value);
    sum.innerHTML = Number(cost.value)-Number(contribution.value);
    monthpay.innerHTML = Number(sum.innerHTML)*Number(bet.value)*Number(ourst)/(Number(ourst)-1);
    proc.innerHTML = Number(bet.value);
    zp.innerHTML = Number(monthpay.innerHTML)*2;
    if((bet.value)==9.6){
        namecred.innerHTML = "Сумма ипотеки";
    }
    if((bet.value)==3.5){
        namecred.innerHTML = "Сумма автокредита";
    }
    if((bet.value)==14.5){
        namecred.innerHTML = "Сумма кредита";
    }
}
