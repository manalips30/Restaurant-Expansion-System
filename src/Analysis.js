import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';



class ServiceRequest extends React.Component {
  state = {
    customerCount: {},
    restaurantCount: {}
  }

  constructor(props) {
    super(props);
    this.state = {
      customerCount: {
        labels: ['January', 'February', 'March',
          'April', 'May'],
        datasets: [
          {
            label: 'Rainfall',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [65, 59, 80, 81, 56]
          }
        ]
      },

      restaurantCount: {
        labels: ['January', 'February', 'March',
          'April', 'May'],
        datasets: [
          {
            label: 'Rainfall',
            backgroundColor: [
              '#B21F00',
              '#C9DE00',
              '#2FDE00',
              '#00A6B4',
              '#6800B4'
            ],
            hoverBackgroundColor: [
              '#501800',
              '#4B5000',
              '#175000',
              '#003350',
              '#35014F'
            ],
            data: [65, 59, 80, 81, 56]
          }
        ]
      }


    }
  }

  render() {
    return (
      <div className="chart">
        <Bar
          data={this.state.customerCount}
          options={{
            title: {
              display: true,
              text: 'Average number of customers per day',
              fontSize: 20
            },
            legend: {
              display: true,
              position: 'right'
            }
          }}
        />

        <Pie
          data={this.state.restaurantCount}
          options={{
            title: {
              display: true,
              text: 'Average Expenses',
              fontSize: 20
            },
            legend: {
              display: true,
              position: 'right'
            }
          }}
        />

      </div>


    )
  }
}

export default ServiceRequest;