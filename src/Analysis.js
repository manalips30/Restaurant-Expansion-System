import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';



class Analysis extends React.Component {
  state = {
    cuisine : "",
    customerCount: {},
    restaurantCount: {},
    expenditure: {},
    cuisine_restaurants: {},
    marketplaces: {},
    customer_marketplaces: {},
    temp_response: []
  }

  constructor(props) {
    super(props);
    this.state = {
      customerCount: {
        labels: ['Area1', 'Area2', 'Area3'],
        datasets: [
          {
            backgroundColor: 'rgba(0,128,255,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [0, 0, 0, 0, 0]
          }
        ]
      },

      restaurantCount: {
        labels: ['Area1', 'Area2', 'Area3'],
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

//  https://dbms-server.herokuapp.com/analysis?area1=South Texas&area2=Austin&area3=Piney Woods&zipcode1=14236&zipcode2=14319&zipcode3=14299

//https://dbms-server.herokuapp.com/analysis?area1=${this.state.area1}&area2=${this.state.area2}&area3=${this.state.area3}&zipcode1=14236&zipcode2=14319&zipcode3=14299&propertyType=${this.state.propertyType}&cuisine=${this.state.cuisine}&area=${this.state.sqarea}

   getQueryString =  ( field ) => {
      const href = window.location.href;
      const reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
      const string = reg.exec(href);
      return string ? string[1] : null;
  };

  componentDidMount = async () => {
    const area1 = this.getQueryString("area1");
    const area2 = this.getQueryString("area2");
    const area3 = this.getQueryString("area3");
    const area = this.getQueryString("area");
    const zipcode1 = this.getQueryString("zipcode1");
    const zipcode2 = this.getQueryString("zipcode2");
    const zipcode3 = this.getQueryString("zipcode3");
    const propertyType = this.getQueryString("propertyType");
    const cuisine = this.getQueryString("cuisine");
    this.setState({cuisine:cuisine});
    await fetch(`https://dbms-server.herokuapp.com/analysis?area1=${area1}&area2=${area2}&area3=${area3}&zipcode1=${zipcode1}&zipcode2=${zipcode2}&zipcode3=${zipcode3}&area=${area}&propertyType=${propertyType}&cuisine=${cuisine}`)
      .then(res => res.json())
      .then((data) => {
        console.log("analysis_data", data)
        this.setState({ temp_response: data })
        console.log("temp_response", this.state.temp_response)
      })
      .catch(console.log)
    this.Processing()
  }

  Processing = () => {
    // Set customer count
      if (this.state.temp_response && Array.isArray(this.state.temp_response.response)) {
          this.setState(
              {
                  area1: this.state.temp_response.response[0].area,
                  area2: this.state.temp_response.response[1].area,
                  area3: this.state.temp_response.response[2].area,
                  customerCount: {
                      labels: [this.state.temp_response.response[0].area, this.state.temp_response.response[1].area, this.state.temp_response.response[2].area],
                      datasets: [
                          {
                              label: 'No of Restaurants',
                              backgroundColor: [
                                '#5B77FF',
                                '#C9DE00',
                                '#2FDE00',
                                '#00A6B4',
                                '#6800B4'
                            ],
                              borderColor: 'rgba(0,0,0,1)',
                              borderWidth: 2,
                              data: [this.state.temp_response.response[0].average_customer_count, this.state.temp_response.response[1].average_customer_count, this.state.temp_response.response[2].average_customer_count]
                          }
                      ]
                  },

                  //Set number of restaurants
                  restaurantCount: {
                      labels: [this.state.temp_response.response[0].area, this.state.temp_response.response[1].area, this.state.temp_response.response[2].area],
                      datasets: [
                          {
                              label: 'Number of restaurants',
                              backgroundColor: 'rgba(107,119,255,1)',
                              hoverBackgroundColor: [
                                  '#501800',
                                  '#4B5000',
                                  '#175000',
                                  '#003350',
                                  '#35014F'
                              ],
                              data: [this.state.temp_response.response[0].no_of_restaurants, this.state.temp_response.response[1].no_of_restaurants, this.state.temp_response.response[2].no_of_restaurants]
                          }
                      ]
                  },
                  //Set Expenditure
                  expenditure: {
                      labels: [this.state.temp_response.response[0].area, this.state.temp_response.response[1].area, this.state.temp_response.response[2].area],
                      datasets: [
                          {
                              label: 'Area wise expenditure',
                              backgroundColor: [
                                  '#5B77FF',
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
                              data: [this.state.temp_response.response[0].average_cost, this.state.temp_response.response[1].average_cost, this.state.temp_response.response[2].average_cost]
                          }
                      ]
                  },
                  //Set marketplaces
                  marketplaces: {
                      labels: [this.state.temp_response.response[0].area, this.state.temp_response.response[1].area, this.state.temp_response.response[2].area],
                      datasets: [
                          {
                              label: 'Area wise expenditure',
                              backgroundColor: [
                                  '#5B77FF',
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
                              data: [this.state.temp_response.response[0].no_of_target_markets, this.state.temp_response.response[1].no_of_target_markets, this.state.temp_response.response[2].no_of_target_markets]
                          }
                      ]
                  },
                  cuisine_restaurant: {
                      labels: [this.state.temp_response.response[0].area, this.state.temp_response.response[1].area, this.state.temp_response.response[2].area],
                      datasets: [
                          {
                              label: 'Area wise expenditure',
                              backgroundColor: [
                                  '#5B77FF',
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
                              data: [this.state.temp_response.response[0].res_with_cuisine, this.state.temp_response.response[1].res_with_cuisine, this.state.temp_response.response[2].res_with_cuisine]
                          }
                      ]
                  },
                  customer_marketplaces: {
                      labels: [this.state.temp_response.response[0].area, this.state.temp_response.response[1].area, this.state.temp_response.response[2].area],
                      datasets: [
                          {
                              label: 'Area wise expenditure',
                              backgroundColor: [
                                  '#5B77FF',
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
                              data: [this.state.temp_response.response[0].average_popu_target_markets, this.state.temp_response.response[1].average_popu_target_markets, this.state.temp_response.response[2].average_popu_target_markets]
                          }
                      ]
                  }
              }
          )
      }
  }

  render() {
    return (
      <div className="location">
        <div className="title">
          <blockquote class="blockquote text-center">
            <h5> The most suitable order to open the locations is {this.state.area1}, {this.state.area2}, {this.state.area3} </h5>
          </blockquote>
        </div>
        <div className="about">
          <div class="row">
          <div class="col-xs-4">
            <Bar
              data={this.state.restaurantCount}
              width={400}
              height={300}
              position="center"
              options={{
                title: {
                  display: true,
                  text: 'Number of restaurants',
                  fontSize: 20
                },
                legend: {
                  display: true,
                  position: 'right'
                }
              }}
            />
            </div>
            <div class="col-xs-4">
            <Pie
              data={this.state.customerCount}
              width={300}
              height={300}
              options={{
                title: {
                  display: true,
                  text: 'Average number of customers',
                  fontSize: 20
                },
                legend: {
                  display: true,
                  position: 'right'
                }
              }}
            />
          </div>
          </div>
          <div class="row">
          <div class="col-xs-4">
          <Pie
              data={this.state.expenditure}
              width={300}
              height={300}
              options={{
                title: {
                  display: true,
                  text: 'Expenditure',
                  fontSize: 20
                },
                legend: {
                  display: true,
                  position: 'right'
                }
              }}
            />
          </div>
          <div class="col-xs-4">
          <Pie
              data={this.state.marketplaces}
              width={300}
              height={300}
              options={{
                title: {
                  display: true,
                  text: 'Target marketplaces',
                  fontSize: 20
                },
                legend: {
                  display: true,
                  position: 'right'
                }
              }}
            />
          </div>
         </div>
         <div class="row">
          <div class="col-xs-4">
          <Pie
              data={this.state.customer_marketplaces}
              width={300}
              height={300}
              options={{
                title: {
                  display: true,
                  text: 'Customers in marketplaces',
                  fontSize: 20
                },
                legend: {
                  display: true,
                  position: 'right'
                }
              }}
            />
          </div>
          <div class="col-xs-4">
          <Pie
              data={this.state.cuisine_restaurant}
              width={300}
              height={300}
              options={{
                title: {
                  display: true,
                  text: 'Restaurants of same cuisine',
                  fontSize: 20
                },
                legend: {
                  display: true,
                  position: 'right'
                }
              }}
            />
          </div>
         </div>

        </div>
      </div>
    )
  }
}

export default Analysis;