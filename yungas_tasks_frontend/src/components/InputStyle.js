import React, {useState} from "react";
import Input from "antd/es/input";

export const InputStyle = ({labelInput = '', value = '', idName=labelInput}) => {
    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="btn btn-outline-secondary">{labelInput}</span>
            </div>
            <Input name={idName} defaultValue={value.toUpperCase()} className="form-control"/>
        </div>
    );
};

