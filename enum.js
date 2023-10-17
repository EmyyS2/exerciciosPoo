"use strict";
var DiasDaSemana;
(function (DiasDaSemana) {
    DiasDaSemana["Segunda"] = "Segunda-feira";
    DiasDaSemana["Ter\u00E7a"] = "Ter\u00E7a-feira";
    DiasDaSemana["Quarta"] = "Quarta-feira";
    DiasDaSemana["Quinta"] = "Quinta-feira";
    DiasDaSemana["Sexta"] = "Sexta-feira";
    DiasDaSemana["S\u00E1bado"] = "S\u00E1bado";
    DiasDaSemana["Domingo"] = "Domingo";
})(DiasDaSemana || (DiasDaSemana = {}));
let diaHoje = DiasDaSemana.Sexta;
//console.log("Hoje é "+ DiasDaSemana[diaHoje]);
console.log("Hoje é " + diaHoje);
