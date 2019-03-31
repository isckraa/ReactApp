import React, { Fragment } from 'react'

const Membre = ({ nom, age, children }) => {

    return (
        <Fragment>
            <h2>Membre de la famille [ nom : {nom.toUpperCase()} | age : { age } ]</h2>
            { children ? <p>{ children }</p> : <p>undefined</p>}
        </Fragment>
    )
}

export default Membre