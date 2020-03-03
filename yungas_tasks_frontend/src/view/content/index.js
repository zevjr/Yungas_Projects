import React, {Component} from "react";
import DefaultTable from "../../components/DefaultTable";

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoading: false,
        }
    }
    excludeItem = (item) => {
        fetch('http://localhost:8000/tasks/' + item + '/', {
            method: 'DELETE',
        })
            .then(res => res.text()) // or res.json()
            .then(res => console.log(res))
    }
    updateItem = (item) => {
        console.log('update', item)
    }

    getDataApi = () => {
        fetch('http://localhost:8000/tasks')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoading: true,
                    items: json,
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
                    <div className="alert alert-light" role="alert">
                        <h2>Lista de Tasks</h2>
                    </div>
                    <DefaultTable
                        viewList={items.results}
                        excluded={this.excludeItem}
                        updated={this.updateItem}
                    />
                </div>
            );
        }
    }


}

export default Content;