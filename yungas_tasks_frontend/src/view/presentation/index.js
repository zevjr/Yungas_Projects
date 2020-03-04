import React, {Component} from "react";

class Presentation extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Yungas</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <button className="btn btn-outline-success btn-sm mr-1"
                                        onClick={() => this.props.home()}>
                                    Home
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-outline-success btn-sm mr-1"
                                        onClick={() => this.props.visual()}>
                                    All Task
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }

}

export default Presentation;