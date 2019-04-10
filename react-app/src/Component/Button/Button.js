import React from 'react'

const Button = ({ vieillir }) => (
    <button 
        style = {{ backgroundColor: 'rgb(26, 115, 232)', color: 'white', border: 'none', borderRadius: '9px', padding: '9px 16px 10px 12px', cursor: 'pointer' }}
        onClick = {vieillir}>
            Vieillir de 2 ans
    </button>
)

export default Button