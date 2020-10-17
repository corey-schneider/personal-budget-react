import React, {Component} from 'react';
import { render } from 'react-dom';
import { Pie } from 'react-chartjs-2';
import { axios } from 'axios';

function HomePage() {
  return (
    <main className="center" id="main">

        <div className="page-area">

            <article>
                <h1>Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </article>
    
            <article>
                <h1>Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </article>
    
            <article>
                <h1>Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </article>
    
            <article>
                <h1>Free</h1>
                <p>
                    This app is free!!! And you are the only one holding your data!
                </p>
            </article>
    
            <article>
                <h1>Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </article>
    
            <article>
                <h1>Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </article>
    
            <article>
                <h1>Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </article>
    
            <article>
                <h1>Chart</h1>
                <p>
                    <canvas id="myChart" width="400" height="400"></canvas>
                </p>
            </article>

        </div>
    </main>
    
  );
}
class ChartPageComponent extends Component {
  constructor(props){
      super(props);
      this.state = {
          datasets : [
          {
            data: [30, 350, 90],
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
          labels: [
            'Eat out1',
            'Rent1',
            'Groceries1'
        ]
      };
      console.log("props data ",props.datasets)
  }


  render(){
      return(
          <Pie 
          data={this.state.datasets}
          options={{
              title:'cool pie chart',
              text:"coolest data"
          }}
          />
      );
  }

getBudget() {
  axios.get('/budget').then(function (res) {
      console.log(res.data);
      for (var i = 0; i < res.data.myBudget.length; i++) {
          //dataSource.datasets[0].data[i] = res.data.myBudget[i].budget;
          //dataSource.labels[i] = res.data.myBudget[i].title;
          
          //this.state.datasets[0].data[i] = res.data.myBudget[i].budget;
          this.setState(this.datasets[0].data[i], res.data.myBudget[i].budget);
          // this.state.labels[i] = res.data.myBudget[i].title;
          this.setState(this.labels[i], res.data.myBudget[i].title);
      }
  });
      render(<ChartPageComponent />, document.getElementById('root'));
}
}
export default HomePage;
