import React, {Component} from 'react';
import { render } from 'react-dom';
import {Pie} from 'react-chartjs-2';

class ChartPageComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData : [
            {
                value: 300,
                color:"#F7464A",
                highlight: "#FF5A5E",
                label: "Red"
            },
            {
                value: 50,
                color: "#46BFBD",
                highlight: "#5AD3D1",
                label: "Green"
            },
            {
                value: 100,
                color: "#FDB45C",
                highlight: "#FFC870",
                label: "Yellow"
            }
        ]
        }
        console.log("props data ",props.chartData)
    }

    render(){
        return(
            <Pie 
            data={this.state.chartData}
            options={{
                title:'cool pie chart',
                text:"coolest data"
            }}
            />
        );
    }
}

render(<ChartPageComponent />, document.getElementById('root'));