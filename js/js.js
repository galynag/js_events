function fDBL(){
	//ondblclick - двойной клик мышью
	alert('work');
}
function fOMO(){
	//onmouseover - наведение мыши
	document.getElementsByClassName('two')[0].style.background='yellow';
}

function fOMout() {
	//onmouseout - уведение мыши
		document.getElementsByClassName('two')[0].style.background='blue';
}

function fOMD(){
	//onmousedown - нажатие, но не отпускаем мышь
	document.getElementsByClassName('three')[0].style.background='blue';
}

function fOMU(){
	//onmouseup - отпускаем клавишу мыши
		document.getElementsByClassName('three')[0].style.background='green';
}

var w=100;
function fOMM(){
	//onmousemove - движение мышью
	w = w+0.5;
	document.getElementsByClassName('four')[0].style.width=w + 'px';
}

function fOCM(){
	alert('dfsfsf');
	return false;
}

var w1=100;
function fOCK() {
  w1=w1+5;
  document.getElementsByClassName('six')[0].style.width=w1 + 'px';
}

var op=1;
function fOCK1() {
  op=op-0.1;
  document.getElementsByClassName('seven')[0].style.opacity=op;
}

var op1=1;
function fOMM1() {
  op1=op1-0.01;
  document.getElementsByClassName('eight')[0].style.opacity=op1;
}
var w9=100;
var h9=100;
function fOMO2() {
  w9=200;
  h9=200;
  document.getElementsByClassName('nine')[0].style.width=w9;
  document.getElementsByClassName('nine')[0].style.height=h9;
  document.getElementsByClassName('nine')[0].style.backgroundColor='pink';
  document.getElementById('img').src='img/img_2.png';
}
function fOMout2() {
  w9=100;
  h9=100;
  document.getElementsByClassName('nine')[0].style.width=w9;
  document.getElementsByClassName('nine')[0].style.height=h9;
  document.getElementsByClassName('nine')[0].style.backgroundColor='grey';
  document.getElementById('img').src='img/img_3.png';
}

function fOCK10() {
    document.getElementById('img1').classList.add('img-absolute');
    document.getElementsByClassName('grey')[0].classList.add('img-fix');

}

function fOCK10_1() {
    document.getElementById('img1').classList.remove('img-absolute');
    document.getElementsByClassName('grey')[0].classList.remove('img-fix');

}
