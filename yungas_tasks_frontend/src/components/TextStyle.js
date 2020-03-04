import React, {useState} from "react";
import TextArea from "antd/es/input/TextArea";

export const TextStyle = ({labelInput = '', value='', idName=labelInput}) => {
    return (

        <div className="input-group">
            <div className="input-group-prepend">
                <span className="btn btn-outline-secondary" >{labelInput}</span>
            </div>
            <TextArea name={idName} defaultValue={value.toUpperCase()} rows={4}/>
        </div>
    );
};
