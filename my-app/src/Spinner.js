import React, {Component} from 'react';
import './App.css';

class Spinner extends Component {
    constructor(props) {
        super(props);
        this.figures = props.figures;
    }

    render() {
        return (
            <div className="imageDiv">
                <img title="McCree" className="img-circle img-responsive" src={require("../images/spinners/mccree.png")}/>
                <p>McCree</p>
            </div>);
    }
}
export default Spinner