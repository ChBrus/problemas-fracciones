import { randomNumber } from "./fracciones.js"

const operators = [
    {
        name: "suma",
        class: "fa-plus"
    },
    {
        name: "resta",
        class: "fa-minus"
    },
    {
        name: "multiplicación",
        class: "fa-xmark"
    },
    {
        name: "división",
        class: "fa-divide"
    }
]

function getOperator() {
    const operator = randomNumber(0, operators.length - 1)

    return {
        generalClass: 'fa-solid',
        operator: operators[operator]
    }
}

function getSymbol() {
    let symbol

    do {
        symbol = getOperator()
    } while(
        (symbol.operator === undefined) ||
        (symbol.operator.name !== 'suma' && symbol.operator.name !== 'resta')
    )
    
    return symbol
}

export { getOperator, getSymbol, operators }