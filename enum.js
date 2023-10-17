"use strict";
var DiasdaSemana;
(function (DiasdaSemana) {
    DiasdaSemana["Segunda"] = "Segunda Feira";
    DiasdaSemana["Ter\u00E7a"] = "Ter\u00E7a Feira";
    DiasdaSemana["Quarta"] = "Quarta Feira";
    DiasdaSemana["Quinta"] = "Quinta Feira";
    DiasdaSemana["Sexta"] = "Sexta Feira";
    DiasdaSemana["S\u00E1bado"] = "S\u00E1bado";
    DiasdaSemana["Domingo"] = "Domingo";
})(DiasdaSemana || (DiasdaSemana = {}));
let diaHoje = DiasdaSemana.Sexta;
//console.log("Hoje é " + DiasdaSemana[diaHoje] + " dia " + diaHoje);
console.log("Hoje é " + diaHoje);
