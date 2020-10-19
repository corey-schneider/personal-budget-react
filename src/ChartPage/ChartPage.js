import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart } from 'react-chartjs-2';

function ChartPage() {
    const [ currentState, setState ] = useState(0);
    useEffect(() => {
        axios.get('http://localhost:3001/budget')
            .then(res => {
                var dataSource = {
                    datasets: [
                        {
                            data: [ ],
                            backgroundColor: [
                                '#ffcd56',
                                '#ff6384',
                                '#36a2eb',
                                '#fd6b19',
                                '#f542e9',
                                '#42f55d',
                                '#42f5dd'
                            ],
                        }
                    ],
                    labels: [ ]
                };
                console.log(res.data);
                for (var i = 0; i < res.data.myBudget.length; i++) {
                    //dataSource.datasets[0].data[i] = res.data.myBudget[i].budget;
                    //dataSource.labels[i] = res.data.myBudget[i].title;
                    
                    dataSource.datasets[0].data[i] = res.data.myBudget[i].budget;
                    dataSource.labels[i] = res.data.myBudget[i].title;
                    
                }
                createChart();
                function createChart() {
                    var ctx = document.getElementById("myChart").getContext("2d");
                    var myPieChart = new Chart(ctx, {
                        type: 'pie',
                        data: dataSource
                    });
                }
            });
    }, []);

    return (
        <>
        <h1>HELLO from ChartPage!</h1>
        </>
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         chartData : [
    //         {
    //             value: 300,
    //             color:"#F7464A",
    //             highlight: "#FF5A5E",
    //             label: "Red"
    //         },
    //         {
    //             value: 50,
    //             color: "#46BFBD",
    //             highlight: "#5AD3D1",
    //             label: "Green"
    //         },
    //         {
    //             value: 100,
    //             color: "#FDB45C",
    //             highlight: "#FFC870",
    //             label: "Yellow"
    //         }
    //     ]
    //     }
    //     console.log("props data ",props.chartData)
    // }

    // render(){
    //     return(
    //         <Pie 
    //         data={this.state.chartData}
    //         options={{
    //             title:'cool pie chart',
    //             text:"coolest data"
    //         }}
    //         />
    //     );
    // }
    );
}

export default ChartPage;