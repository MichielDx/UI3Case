import React, {Component} from 'react';
import './App.css';
import '../js/jackpot'
import $ from 'jquery';
global.jQuery = require('jquery');

var timeout = 5000;

function changeFigure(figures, spin) {
    var div = document.getElementsByClassName("min-slider-handle")[0];
    if (div != undefined) {
        timeout = div.getAttribute('aria-valuenow') * 1000;
    }
    spin.state = figures[Math.floor(Math.random() * figures.length)];
    spin.forceUpdate();
    setTimeout(changeFigure(figures, spin), timeout)
}

class Spinner extends Component {
    constructor(props) {
        super(props);
        this.figures = props.figures;
        this.state = this.figures[Math.floor(Math.random() * this.figures.length)];
        changeFigure(this.figures, this)
    }


    render() {
        var figure = this.state;

        return (
            <div className="imageDiv">
                <img title="McCree" alt={figure.name} className="img-circle img-responsive" src={figure.image}/>
                <p>{figure.name}</p>
            </div>);
    }
}
export default Spinner