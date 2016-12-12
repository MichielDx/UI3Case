import React, {Component} from 'react';
import ReactBootstrapSlider from 'react-bootstrap-slider';
import './App.css';
global.jQuery = require('jquery');
import '../css/jackpot.css'
import '../css/bootstrap-theme.min.css'
import '../css/bootstrap.min.css'
import '../css/bootstrap-slider.min.css'
class HeaderBar extends Component {

    render() {
        return (
            <div className="headerBar">
                <ReactBootstrapSlider id="slider"
                    value={5}
                    step={1}
                    max={20}
                    min={1} />
                <p className="glyphicon glyphicon-plus-sign"/>
                <p className="glyphicon glyphicon-minus-sign"/>
                <p className="glyphicon glyphicon-repeat"/>
            </div>);
    }

}
export default HeaderBar