const btnCriptografar = document.querySelector(".btn-criptografar");
const btnDescriptografar = document.querySelector(".btn-descriptografar");
const btnCopy = document.querySelector(".btn-copy");
const inputTexto = document.querySelector("#text-input");
const resultBox = document.querySelector(".result-box");
const resultWindow = document.querySelector(".result");
const resultText = document.querySelector(".result-text");
const warning = document.querySelector(".warning");

const CHAVE_CRIPTOGRAFIA = [
	["e", "enter"],
	["i", "imes"],
	["a", "ai"],
	["o", "ober"],
	["u", "ufat"],
];

const CHAVE_DESCRIPTOGRAFIA = [
	["enter", "e"],
	["imes", "i"],
	["ai", "a"],
	["ober", "o"],
	["ufat", "u"],
];

inputTexto.addEventListener("input", () => {
	const texto = inputTexto.value;
	const regex = /[A-ZÀ-Ú]/;
	const regexAcento = /[À-Ú]/;
	warning.style.color = regex.test(texto) || regexAcento.test(texto) ? "red" : "#495057";
});

btnCriptografar.addEventListener("click", () => {
	const texto = inputTexto.value;
	resultBox.style.display = "none";
	resultWindow.style.display = "flex";
	resultText.textContent = criptografarTexto(texto);
});

btnDescriptografar.addEventListener("click", () => {
	const texto = inputTexto.value;
	resultBox.style.display = "none";
	resultWindow.style.display = "flex";
	resultText.textContent = descriptografarTexto(texto);
});

btnCopy.addEventListener("click", () => {
	const texto = resultText.textContent;
	navigator.clipboard.writeText(texto);
});

function criptografarTexto(texto) {
	let textoCriptografado = texto;
	CHAVE_CRIPTOGRAFIA.forEach(([letra, palavra]) => {
		const regex = new RegExp(letra, "g");
		textoCriptografado = textoCriptografado.replace(regex, palavra);
	});
	return textoCriptografado;
}

function descriptografarTexto(texto) {
	let textoDescriptografado = texto;
	CHAVE_DESCRIPTOGRAFIA.forEach(([palavra, letra]) => {
		const regex = new RegExp(palavra, "g");
		textoDescriptografado = textoDescriptografado.replace(regex, letra);
	});
	return textoDescriptografado;
}
