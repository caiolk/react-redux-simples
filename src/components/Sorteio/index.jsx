import React from 'react';

import Card from '../Card/';

const Sorteio = (props) => {
    const { min, max } = props;
    const aleatorio = parseInt(Math.random() * (max-min)) + min;

    return (
        <Card title="Soma de números" purple>
           <div >
                <span>
                <span>Resultado:</span>
                    <strong>{aleatorio}</strong>
                </span>
            </div>
        </Card>
    )
}

export default Sorteio;