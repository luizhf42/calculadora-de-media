function calcula() {
	// Pegando o valor dos inputs com as notas
	var primeiraNota = parseFloat(document.getElementById("primeira-nota").value);
	var segundaNota = parseFloat(document.getElementById("segunda-nota").value);
	var terceiraNota = parseFloat(document.getElementById("terceira-nota").value);
	
	// Calculando a média e corrigindo-a
	var media = (primeiraNota + segundaNota + terceiraNota) / 3;
	var mediaCorrigida = media.toFixed(1);
	
	
	var textoResultado = `Sua média anual, considerando três trimestres, foi ${mediaCorrigida}. Portanto, você está `;
	
	document.getElementById("resultado").style.display = "block";
	if (mediaCorrigida >= 6 && mediaCorrigida <= 10) {
		document.getElementById("resultado").innerHTML = `${textoResultado} aprovado (a)! Parabéns! :)`;
	} else {
		document.getElementById("resultado").innerHTML = `${textoResultado} reprovado (a)... Que feio! >:[`;
	}}
	
	
	