import React, {Component} from "react";
import Presentation from "../presentation";
import Content from "../content";
import Footer from "../footer";
import Visual from "../visualisation";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadingContent: true,
        }

    }

    setContentView = () => {
        this.setState({
            loadingContent: true,
        })
    }

    setVisualView = () => {
        this.setState({
            loadingContent: false,
        })
    }

    render() {
        const {loadingContent} = this.state
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mt-5">
                            <Presentation home={this.setContentView} visual={this.setVisualView}/>
                        </div>
                    </div>
                    <div className="mt-2 mb-3">
                        {loadingContent ?
                            <Content/>
                            : <Visual/>}
                    </div>
                    <div className="row">
                        <div className="col-md-12 mt-5">
                            <Footer/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;