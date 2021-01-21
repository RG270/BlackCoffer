import React, { Component } from 'react';
import './App.css';
import Chart from 'chart.js';
import all_data from './jsondata.json';

class App extends Component {
    
    getData(){
        
        var final_data = {};
        var count = {};
        
        all_data.forEach( obj => {
            if( obj.sector.length>0 && obj.intensity>0 ){
                // console.log( obj.sector + ' ' + obj.intensity );
                if(final_data[obj.sector]===undefined){
                    final_data[obj.sector]=0;
                    count[obj.sector]=0;
                }
                count[obj.sector] += 1;
                if( obj.intensity>0 )final_data[obj.sector] += obj.intensity;
            }
        });
        
        // console.log(final_data);
        
        var x_axis = [], y_axis = [];
        
        for( var key in final_data ){
            // console.log(key + " " + final_data[key] + " " + count[key]);
            x_axis.push(key);
            y_axis.push(final_data[key]/count[key]);
        }
        
        return {x_axis, y_axis};
    }
    
    componentDidMount(){
        
        var ctx = document.getElementById('myChart');
        
        var data = this.getData();
        
        // eslint-disable-next-line no-unused-vars
        var myChart = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: data.x_axis,
                datasets: [{
                    label: 'Intensity',
                    data: data.y_axis,
                    backgroundColor: 'rgba(255, 99, 250, 0.2)',
                    borderColor: 'rgba(255, 99, 250, 1)',
                    borderWidth: 1
                }]
            }
        });
    }
    
    render(){
        return (
            <div className="main">
                <div className='header'>
                    <b>Radar Chart:</b> By 2025 experts believe the focus will increase on the top 5 sectors
                    of Security, Information technology, Tourism & Hospitality, Media & Entertainment
                     and Energy
                </div>
                <div className="middle">                
                    <span className="constraints">
                        <span className='inner-const'>CL = 95 | µ = 21.9 | σ = 22.2 | Lower = 21.8 | Upper = 22 | N = 192428</span>
                    </span>
                </div>
                <div className='chart'>
                    <div><canvas id="myChart"></canvas></div>
                    <div className="button_div"><button className='btn'>Load Less</button></div>
                </div>
            </div>
        )
    }
}

export default App;