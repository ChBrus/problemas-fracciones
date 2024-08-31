import { operators } from "./symbols";

function symbolsProduct(symbol, operator) {
    operators.forEach(operatorOrSymbol => {
        if (
            (operatorOrSymbol === operator || operatorOrSymbol === symbol) &&
            (operatorOrSymbol !== 'suma' || operatorOrSymbol !== 'resta')
        ) return
    })
}