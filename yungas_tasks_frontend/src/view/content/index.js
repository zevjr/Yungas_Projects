import React, {Component} from "react";
import axios from 'axios';
import DefaultTable from "../../components/DefaultTable";
import ModalForm from "../../components/ModalForm";
import FormNewTask from "./form/new";
import FormUpdateTask from "./form/update";
import {message} from "antd";
import moment from "moment";

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            route: 'http://localhost:8000/tasks/',
            isLoading: false,
            isOpenModal: false,
            itemId: null
        }
    }

    excludeItem = async (item) => {
        const {route} = this.state;
        let status;
        await axios.delete(route + item + '/')
            .then(res => status = res.status);
        message.success('Deletado', 2.5)
        this.reload()


    }
    updateItem = async (formData) => {
        const {route} = this.state;
        let status = null
        await axios.patch(route + formData['id'] + '/', formData)
            .then(resp => status=resp);
        message.success('Salvo', 2.5)
        this.changeModalUpdate()
        this.reload()

    }

    createItem = async (formData) => {
        const {route} = this.state;
        await axios.post(route, formData)
            .then(resp => resp.status);
        message.success('Salvo', 2.5)
        this.changeModal();
        this.reload()
    }

    reload = () =>{
        document.location.reload();
    }

    getDataApi = async () => {
        let route = 'http://localhost:8000/tasksNotCompleted/'
        await axios.get(route)
            .then(resp => {
                this.setState({
                    items: resp,
                    isLoading: true
                })
            });
    }
    changeModal = () => {
        this.setState({
            isOpenModal: !this.state.isOpenModal
        })
    }

    changeModalUpdate = (itemId) => {
        this.setState({
            isOpenModalUpdate: !this.state.isOpenModalUpdate,
            itemId: itemId
        })
    }
    completedAt = async (itemId) => {
        const {route}=this.state
        let momentData = moment(new Date(), 'YYYY/MM/DD').format('YYYY-MM-DD')
         await axios.patch(route + itemId + '/', {'completed_at':momentData})
            .then(resp => resp.status);
        message.success('Tarefa Concluida', 2.5)
        this.reload()
    }

    componentDidMount() {
        this.getDataApi()
    }

    render() {
        const {isLoading, items, isOpenModal, isOpenModalUpdate, itemId} = this.state;
        if (!isLoading) {
            return <div> Loading...</div>
        } else {
            return (
                <div>
                    <ModalForm isOpen={isOpenModal}
                               title="Nova Task"
                               icon="fas fa-tasks"
                               setClosed={this.changeModal}>
                        <FormNewTask getSaved={this.createItem}/>
                    </ModalForm>

                    <ModalForm isOpen={isOpenModalUpdate}
                               title="Edit Task"
                               icon="fas fa-tasks"
                               setClosed={this.changeModalUpdate}>
                        <FormUpdateTask itemID={itemId} getSaved={this.updateItem}/>
                    </ModalForm>
                    <div className="row">
                        <div className="col-md-8">
                            <div className="alert alert-light" role="alert">
                                <h2>Lista de Tasks</h2>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-primary" onClick={() => this.changeModal()}>
                                <i className="fas fa-plus">Nova Task</i>
                            </button>
                        </div>
                    </div>
                    < DefaultTable
                        viewList={items.data.results}
                        excluded={this.excludeItem}
                        updated={this.changeModalUpdate}
                        completed={this.completedAt}
                        created={this.changeModal}
                    />
                </div>
            );
        }
    }


}

export default Content;