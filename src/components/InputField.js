import { useEffect, useState } from 'react';


export default function InputField({ changeHandler, label = 'Text input', name, type, value }) {

	return (

        <div className='tst-input'>

            

            <input
                aria-labelledby={`${name}-label`}
                className='tst-input__field'
                id={name}
                name={name}
                onChange={changeHandler}
                placeholder={label}
                type={type || 'text'}
                value={value}
            />

            <label
                className='tst-input__label'
                htmlFor={name}
                id={`${name}-label`}
            >
                {label}
            </label>

        </div>

	);

}
