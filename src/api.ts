import axios from "axios"

const API_URL = 'https://api-pagarapido.aquisi.dev.br'

export function fetchBoletos() {
    return axios(`${API_URL}/transaction/boleto/{boletoId}`)
}

