import React, { useState } from 'react';

const FoodCol = ({labelName, type}) => {
    const [editMode, setEditMode] = useState(false);
    return (
        <td >
            <div >
                {!editMode && <div
                    type="button"
                    onClick={()=>{setEditMode(true)}}
                >
                    {labelName}
                </div>}
                {editMode && <div className="input-group">
                    <input className="form-control"  type={type} />
                    <div 
                        onClick={()=>{setEditMode(false)}}
                        value={labelName}
                        className="input-group-text" 
                        type="submit" 
                        >
                            X
                        </div>
                    </div>}

            </div>
        </td>
    )
}

export default FoodCol;
