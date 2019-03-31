import React from 'react'

const Membre = ({ nom, age }) => {

    return (
        <h2>Membre de la famille [ nom : {nom.toUpperCase()} | age : { age } ]</h2>
    )
}

export default Membre