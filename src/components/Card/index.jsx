import React from 'react';

import './styles.css';

function getColor(props){

    if(props.red)    return "red"
    if(props.green)  return "green"
    if(props.blue)   return "blue"
    if(props.purple) return "purple"

     
}

const Card = (props) => {

    return (
        <div className={`card ${getColor(props)}`}>
            <div className="header">
                <div className="title"> {props.title} </div>
            </div>
            <div className="content" >
                {props.children}
            </div>
        </div>
    )

}

export default Card;