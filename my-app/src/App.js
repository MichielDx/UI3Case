import React, {Component} from 'react';
import ReactBootstrapSlider from 'react-bootstrap-slider';
import Spinner from './Spinner.js'
import './App.css';

function Figure(name, image) {
    this.name = name;
    this.image = image;
}



class App extends Component {
    constructor(props){
        super(props);
        console.log("app");
        this.startValue = props.startValue;
    }

    getSpinners(){
        var result=[];
        for (var i = 0; i < this.startValue; i++) {
            result.push(i)
            //result.push(this.getFigures()[Math.floor(Math.random() * figures.length)]);
        }
        return result;
    }

    getFigures(){
        return [
            new Figure("McCree",require("../images/spinners/mccree.png")),
            new Figure("Genji",require("../images/spinners/genji.png")),
            new Figure("Reaper",require("../images/spinners/reaper.png")),
            new Figure("Pharah",require("../images/spinners/pharah.png")),
            new Figure("Soldier 76",require("../images/spinners/soldier76.png")),
        ];
    }

    render() {
        var figures = this.getFigures();
        return (
            <div>
                <div className="headerBar">
                    <ReactBootstrapSlider id="slider" type="text" data-slider-min="1" data-slider-max="20"
                                          data-slider-step="1" data-slider-value="1"/>
                    <p className="glyphicon glyphicon-plus-sign"/>
                    <p className="glyphicon glyphicon-minus-sign"/>
                    <p className="glyphicon glyphicon-repeat"/>
                </div>
                {this.getSpinners().map(function(){
                    return <Spinner figures={figures}/>
                })}
            </div>
        );
    }
}

export default App;
