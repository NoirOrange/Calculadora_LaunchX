function setResultado(valor) {
    document.getElementById('datos').value = valor;
}

function getResultado() {
    return(document.getElementById('datos').value);
}

function agregarDatos(numero) { 
    var resultado = getResultado();
	if (resultado!='0' || isNaN(numero)) setResultado(resultado + numero);
    else setResultado(numero);
}

function calcularOperaciones() {
    var result = eval(getResultado()); 
    setResultado(result);
	if (result=='Infinity') 
		setResultado('ERROR');
}

function cambiarSigno(){
	var evaluar = getResultado();
	if (evaluar >0)
		evaluar = evaluar*-1;
		setResultado(evaluar);
}

function sqrt(){
	var numero = getResultado();
	var raiz = Math.sqrt(numero);
	setResultado(raiz);
}

function potencia(){
	var cal = getResultado();
	var elevar = eval(cal*cal);
	setResultado(elevar);
}

document.addEventListener('keydown', (event) => {
		var keyValue = event.key;
		var keyCode = event.keyCode;
		if (keyValue==1){
		agregarDatos(keyValue);}
		else if (keyValue==2) {
		agregarDatos(keyValue);}
		else if (keyValue==3) {
		agregarDatos(keyValue);}
		else if (keyValue==4) {
		agregarDatos(keyValue);}
		else if (keyValue==5) {
		agregarDatos(keyValue);}
		else if (keyValue==6) {
		agregarDatos(keyValue);}
		else if (keyValue==7) {
		agregarDatos(keyValue);}
		else if (keyValue==8) {
		agregarDatos(keyValue);}
		else if (keyValue==9) {
		agregarDatos(keyValue);}
		else if (keyValue==0) {
		agregarDatos(keyValue);}
		else if (keyCode=='107'){
		agregarDatos('+');}
		else if (keyCode=='109'){
		agregarDatos('-');}
		else if (keyCode=='106'){
		agregarDatos('*');}
		else if (keyCode=='110'){
		agregarDatos('.');}
		else if (keyCode=='111'){
		agregarDatos('/');}
		else if (keyCode=='13'){
		calcularOperaciones();}
		}, false);
