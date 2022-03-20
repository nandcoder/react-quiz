import React from 'react'

function Input({ name, option, decoder }) {
    return (
        <div className='col-lg-6 col-md-12'>
            <div className="options">
                <input type="radio" id={option} value={option} className="radio" name={name} />
                <label htmlFor={option}>{decoder(option)}</label><br />
            </div>
        </div>
    )
}

export default Input;