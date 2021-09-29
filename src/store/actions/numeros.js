import {
    NUM_MIN_ALTERADO,
    NUM_MAX_ALTERADO
} from './actionTypes'
// Action Creator -> retornar uma action
export function alteraNumeroMinimo(novoNumero){
    return {
        type: NUM_MIN_ALTERADO,
        payload: novoNumero
    }
}

export function alteraNumeroMaximo(novoNumero){
    return {
        type: NUM_MAX_ALTERADO,
        payload: novoNumero
    }

}