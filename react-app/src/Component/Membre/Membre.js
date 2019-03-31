import React from 'react'

const Membre = (props) => {
    const nom = props.nom
    
    return (
        <h2>Membre de la famille : {nom.toUpperCase()}</h2>
    )
}

export default Membre