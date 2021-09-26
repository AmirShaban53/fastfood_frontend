import React from 'react';

const Order = ({name, price}) => {
    return (
        <>
            <tr>
                <th scope='col'>{name}</th>
                <td>1</td>
                <td>{price}</td>
            </tr>
        </>
    )
}

export default Order;
