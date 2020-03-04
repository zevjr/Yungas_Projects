import React, {Component, useState} from "react";
import {InputStyle} from "../../../../components/InputStyle";
import {TextStyle} from "../../../../components/TextStyle";
import {DataInputStyle} from "../../../../components/DateStyle";
import { message } from 'antd';
import serializeForm from 'form-serialize';

import axios from "axios";

class FormUpdateTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items_up: null,
            route: 'http://localhost:8000/tasks/',
            isLoading: false
        }
    }

    getDataApi = async () => {
        const {route} = this.state;
        await axios.get(route + this.props.itemID + '/')
            .then(resp => this.setState({
                items_up: resp.data,
                isLoading: true
            }));
    }
    handleSubmit = (event) => {
        event.stopPropagation()
        event.preventDefault()

        message.loading('Salvando...', 2.5)
        const formData = serializeForm(event.target, { hash: true, empty: true })
        formData['id']=this.props.itemID;
        this.props.getSaved(formData)
    }

    componentDidMount() {
        this.getDataApi()
    }

    render() {
        const {isLoading, items_up} = this.state;
        if (!isLoading) {
            return <div>Loading...</div>
        } else {
            return (
                <form name="FormUpdateTask" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-sm-12">
                            <InputStyle labelInput="Title" value={items_up.title} idName='title'/>
                        </div>
                        <div className="col-sm-12">
                            <TextStyle labelInput="Description" value={items_up.description} idName='description'/>
                        </div>
                        <div className="col-sm-6 mt-3">
                            <DataInputStyle labelInput="Deadline" value={items_up.deadline} idName='deadline'/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-right">
                            <button className="btn btn-success">Save</button>
                        </div>
                    </div>
                </form>
            );
        }

    }
}

export default FormUpdateTask;