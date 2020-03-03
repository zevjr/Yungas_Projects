import React, {Component} from "react";

class DefaultTable extends Component {

    render() {
        const {viewList} = this.props
        return (
            <div>
                <ul className="list-group list-group-flush">
                    {viewList.map(item =>
                        <div>
                            <div className="row">
                                <div className="col-md-12">
                                    <hr className="my-4"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-8">
                                    <h3>
                                        <a href={item.id}
                                           className="list-group-item list-group-item-action disabled text-uppercase"
                                           tabIndex="-1"
                                           aria-disabled="true">{item.title}</a>
                                    </h3>
                                    <p className="text-lowercase text-monospace text-muted">{item.description}</p>
                                </div>
                                <div className="col-md-4">
                                    <button className="btn btn-primary" onClick={() => this.props.updated(item.id)}>
                                        <i className="fas fa-pen"></i>
                                    </button>
                                    <button className="btn btn-danger" onClick={() => this.props.excluded(item.id)}>
                                        <i className="fas fa-trash"></i>
                                    </button>

                                </div>
                            </div>
                        </div>
                    )}
                </ul>
            </div>
        );
    }
}

export default DefaultTable;