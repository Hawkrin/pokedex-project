import React from 'react'
import './css/Body.css'

function BodyView( {id, name, image, type} ) {
    return (
        <div className="body-container">
            <div className="pokemon-container">
                <div className="pokemon-cards">
                    <div className="number">
                        <small>#0{id}</small>
                    </div>
                    <img src={image} alt=""/>
                    <div className="pokemon-info">
                        <h3>{name}</h3>
                        <small>Type: {type}</small>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default BodyView