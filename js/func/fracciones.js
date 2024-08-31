import { getOperator, getSymbol, operators } from "./symbols.js"

function getFractionProblem(fractionsQuantity) {
    const fracciones = []

    for (let i = 0; i < fractionsQuantity; i++) {
        fracciones.push({
            operator: i === 0 ? null : getOperator(),
            fraction: getRandomFraction()
        })
    }

    return fracciones;
}

function getRandomFraction() {
    const timesDivisor = randomNumber(1, 10)
    const dividendo = randomNumber(1, 50)
    const divisor = randomNumber(1, dividendo * timesDivisor)
    return {
        divisor: {symbol: getSymbol(), divisor},
        dividendo: {symbol: getSymbol(), dividendo}
    }
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export { getFractionProblem, getRandomFraction, randomNumber }