import React, {Component} from "react";
import Presentation from "../presentation";
import Content from "../content";
import Footer from "../footer";

class Home extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mt-5">
                            <Presentation />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 mt-2 mb-3">
                            <Content />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 mt-5">
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;