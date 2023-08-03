/* import { useRef, useEffect, useState } from 'react'; */


export default function Button({ customClass, label = 'Click Me', onClick, target, theme }) {

    const buildClassString = () => {
        let classString = 'btn';

        if (theme) {
            classString += ` btn--${theme}`;
        }

        if (customClass) {
            classString += ` ${customClass}`;
        }

        return classString;
    };

    const handleClick = (e) => {
        e.preventDefault();
        onClick();
    };

	return (

        <button
            className={buildClassString()}
            onClick={onClick && handleClick}
            target={target}
        >

            {label}

        </button>

	)

}
