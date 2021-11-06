import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Counter = () =>{
    const value = 1;
    return (
        <div className='outline-secondary me-2 fs-4 no-warp'>
            <FontAwesomeIcon type='button' className='' icon='caret-square-left'/>
            <span className='mx-2'>{value}</span>
            <FontAwesomeIcon type='button' icon='caret-square-right'/>
        </div>
    )
}

export default Counter;