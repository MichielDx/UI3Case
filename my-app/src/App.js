import React, {Component} from 'react';
import Spinner from './Spinner.js'
import HeaderBar from './HeaderBar'
import './App.css';
import '../css/jackpot.css'
global.jQuery = require('jquery');
import '../css/bootstrap-theme.min.css'
import '../css/bootstrap.min.css'

function Figure(name, image) {
    this.name = name;
    this.image = image;
}



class App extends Component {
    constructor(props){
        super(props);
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
                <HeaderBar/>
                {this.getSpinners().map(function(key){
                    return <Spinner key={key} figures={figures}/>
                })}
            </div>
        );
    }
}

export default App;
