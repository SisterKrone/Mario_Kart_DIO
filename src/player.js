export default class Player {
    constructor({ name, velocidade, manobrabilidade, poder, pontos }) {
        this._name = name
        this._velocidade = velocidade
        this._manobrabilidade = manobrabilidade
        this._poder = poder
        this._pontos = pontos
    }

    get name() {
        return this._capitalize(this._name)
    }

    get velocidade() {
        return this._velocidade
    }

    get manobrabilidade() {
        return this._manobrabilidade
    }

    get poder() {
        return this._poder
    }

    get pontos() {
        return this._pontos
    }

    _capitalize(value) {
        return `${value.charAt(0).toUpperCase()}${value.slice(1)}`
    }
}

