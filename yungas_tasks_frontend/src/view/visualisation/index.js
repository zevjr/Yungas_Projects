import React, {Component} from "react";
import ModalForm from "../../components/ModalForm";
import FormNewTask from "../content/form/new";
import FormUpdateTask from "../content/form/update";
import DefaultTable from "../../components/DefaultTable";
import axios from "axios";
import DefaultTableEmpty from "../../components/DefaultTableEmpty";

class Visual extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            route: 'http://localhost:8000/tasks/',
            isLoading: false,
            itemId: null
        }
    }

    getDataApi = async () => {
        let route = 'http://localhost:8000/tasks/'
        await axios.get(route)
            .then(resp => {
                this.setState({
                    items: resp,
                    isLoading: true
                })
            });
    }

    componentDidMount() {
        this.getDataApi()
    }

    render() {
        const {isLoading, items} = this.state;
        if (!isLoading) {
            return <div> Loading...</div>
        } else {
            return (
                <div>
                    <div className="row">
                        <div className="col-md-8">
                            <div className="alert alert-light" role="alert">
                                <h2>Lista de Tasks</h2>
                            </div>
                        </div>
                    </div>
                    < DefaultTableEmpty
                        viewList={items.data.results}
                    />
                </div>
            );
        }
    }
}

export default Visual;