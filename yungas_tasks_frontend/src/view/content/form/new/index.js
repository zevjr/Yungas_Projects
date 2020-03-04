import React, {Component} from "react";
import {DataInputStyle} from "../../../../components/DateStyle";
import {InputStyle} from "../../../../components/InputStyle";
import {TextStyle} from "../../../../components/TextStyle";
import {message} from "antd";
import serializeForm from 'form-serialize';



class FormNewTask extends Component {

    handleSubmit = (event) => {
        event.stopPropagation()
        event.preventDefault()

        message.loading('Salvando...', 2.5)
        const formData = serializeForm(event.target, {hash: true, empty: true})
        formData['id'] = this.props.itemID;
        this.props.getSaved(formData)
    }

    render() {
        return (
            <form name="FormNewTask" onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="col-sm-12">
                        <InputStyle labelInput="Title" idName='title'/>
                    </div>
                    <div className="col-sm-12">
                        <TextStyle labelInput="Description" idName='description'/>
                    </div>
                    <div className="col-sm-6 mt-3">
                        <DataInputStyle labelInput="Deadline" idName='deadline'/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-right">
                        <button type="submit" className="btn btn-success">Save</button>
                    </div>
                </div>
            </form>
        );

    }
}

export default FormNewTask;