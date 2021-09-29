import React from 'react';
import './styles.css'
import { connect } from 'react-redux';
import Card from '../Card/';
import { alteraNumeroMaximo, alteraNumeroMinimo } from '../../store/actions/numeros'

const Intervalo = (props) => {
    const { min, max } = props;

    return (
        <Card title="Intervalo de números" red>
           <div className="intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input 
                        type="number" 
                        value={min}
                        onChange={e => props.alterarMinimo(+e.target.value)}
                    />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input 
                        type="number" 
                        value={max} 
                        onChange={e => props.alteraMaximo(+e.target.value)}
                    />
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state){
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

function mapDispatchToProp(dispatch){
    return {
        alterarMinimo(novoNumero){
            // action creator -> action
            const action = alteraNumeroMinimo(novoNumero)
            dispatch(action)
        },
        alteraMaximo(novoNumero){
            const action = alteraNumeroMaximo(novoNumero)
            dispatch(action)
        }
    }
}

export default connect(
                mapStateToProps,
                mapDispatchToProp
)(Intervalo);