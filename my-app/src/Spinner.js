import React, {Component} from 'react';
import './App.css';

class Spinner extends Component {
    constructor(props) {
        super(props);
        this.figures = props.figures;
    }

    render() {
        var figure = this.figures[Math.floor(Math.random() * this.figures.length)];
        return (
            <div className="imageDiv">
                <img title="McCree" alt={figure.name} className="img-circle img-responsive" src={figure.image}/>
                <p>McCree</p>
            </div>);
    }
}
export default Spinner