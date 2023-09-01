var somar = require("./modulos/somar");
var media = require("./modulos/media");
var multi = require("./modulos/somar");
var dividi = require("./modulos/media");
var mensagem = require("./modulos/mensagem");
var nome = "Burin";

console.log("a soma é: " + somar(20,90));
console.log("a média é: " + media(20,90));
console.log("a multiplicação é: " + multi(20,90));
console.log("a divisão é: " + dividi(20,90));
console.log(mensagem(nome));