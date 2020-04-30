import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Redirect, Link } from 'react-router-dom';
import Locations from './Locations';
import Analysis from './Analysis';

class RestaurantDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      area1: "",
      area2: "",
      area3: "",
      city: "",
      kingdom: "",
      zip1: "",
      zip2: "",
      zip3: "",
      cuisine: "",
      cost: "",
      restaurantType: "",
      sqarea: "",
      propertyType: "",
      temp_response: {
        status: "",
        response: []
      },
      showLocations: false,
      redirect: null
    }
    this.handleUserInput = this.handleUserInput.bind(this)
  }

  //http://localhost:8080/findBestAreas?area1=${this.state.area1}&area2=${this.state.area2}&area3=${this.state.area3}&zipcode1=${this.state.zip1}&zipcode2=${this.state.zip2}&zipcode3=${this.state.zip3}&city=${this.state.city}&country=US&state=${this.state.kingdom}&restaurantType=${this.state.restaurantType}&area=${this.state.sqarea}&propertyType=${this.state.propertyType}&cuisine=${this.state.cuisine}&cost=${this.state.cost}
  
  handleOnSubmit = async () => {
    await fetch(`https://dbms-server.herokuapp.com/findBestAreas?area1=${this.state.area1}&area2=${this.state.area2}&area3=${this.state.area3}&zipcode1=${this.state.zip1}&zipcode2=${this.state.zip2}&zipcode3=${this.state.zip3}&city=${this.state.city}&country=US&state=${this.state.kingdom}&restaurantType=${this.state.restaurantType}&area=${this.state.sqarea}&propertyType=${this.state.propertyType}&cuisine=${this.state.cuisine}&cost=${this.state.cost}`)
      .then(res => res.json())
      .then((data) => {
        console.log("data", data)
        this.setState({ temp_response: data })
        console.log("temp_response", this.state.temp_response)
      })
      .catch(console.log)
    this.setState({ showLocations: true })
  };

  submitForm = (e) => {
    e.preventDefault();
    this.handleOnSubmit(this.state);
    console.log('state', this.state)
  }

  handleUserInput = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
      <div className="container-fluid login-container w-75">
        <div className="filterForm">
          <form>
            <div class="form-row justify-content-left">
              <label for="Location1" class="col-sm-2 col-form-label">Location1</label>
              <div class="form-group col-md-3">
                <input
                  type="text"
                  name="area1"
                  class="form-control"
                  placeholder="Area1"
                  id="area1"
                  //value={this.state.area1}
                  onChange={this.handleUserInput} />
              </div>
              <div class="form-group col-md-3">
                <input
                  type="text"
                  name="zip1"
                  class="form-control"
                  placeholder="ZipCode"
                  id="zip1"
                  //value={this.state.area2}
                  onChange={this.handleUserInput} />
              </div>
            </div>

            <div class="form-row justify-content-left">
              <label for="Location2" class="col-sm-2 col-form-label">Location2</label>
              <div class="form-group col-md-3">
                <input
                  type="text"
                  name="area2"
                  class="form-control"
                  placeholder="Area2"
                  id="area2"
                  //value={this.state.area1}
                  onChange={this.handleUserInput} />
              </div>
              <div class="form-group col-md-3">
                <input
                  type="text"
                  name="zip2"
                  class="form-control"
                  placeholder="ZipCode"
                  id="zip2"
                  //value={this.state.area2}
                  onChange={this.handleUserInput} />
              </div>
            </div>

            <div class="form-row justify-content-left">
              <label for="Location3" class="col-sm-2 col-form-label">Location3</label>
              <div class="form-group col-md-3">
                <input
                  type="text"
                  name="area3"
                  class="form-control"
                  placeholder="Area3"
                  id="area3"
                  //value={this.state.area1}
                  onChange={this.handleUserInput} />
              </div>
              <div class="form-group col-md-3">
                <input
                  type="text"
                  name="zip3"
                  class="form-control"
                  placeholder="ZipCode"
                  id="zip3"
                  //value={this.state.area2}
                  onChange={this.handleUserInput} />
              </div>
            </div>

            <div class="form-row justify-content-left">
              <label for="inputPassword3" class="col-sm-2 col-form-label">Region</label>
              <div class="form-group col-md-3">
                <input type="text"
                  class="form-control"
                  placeholder="City"
                  name="city"
                  id="inputCity"
                  //value={this.state.city}
                  onChange={this.handleUserInput} />
              </div>
              <div class="form-group col-md-3">
                <select
                  id="inputState"
                  class="form-control"
                  name="kingdom"
                  //value="{this.state.kingdom}"
                  onChange="{this.handleUserInput}">
                  <option selected>State</option>
                  <option>New York</option>
                  <option>California</option>
                  <option>Seattle</option>
                </select>
              </div>
            </div>


            <div class="form-row justify-content-left">
              <label for="Cuisine" class="col-sm-2 col-form-label">Cuisine</label>
              <div class="form-group col-md-4">
                <select
                  id="inputState"
                  class="form-control"
                  name="cuisine"
                  onChange="{this.handleUserInput}">
                  <option selected>Select Cuisine</option>
                  <option>American</option>
                  <option>Asian</option>
                  <option>Chinese</option>
                  <option>Greek</option>
                  <option>Indian</option>
                  <option>Italian</option>
                  <option>Mexican</option>
                  <option>Others</option>
                </select>
              </div>
            </div>

            <div class="form-row justify-content-left">
              <label for="Cost" class="col-sm-2 col-form-label">Cost</label>
              <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input" />
                <label class="custom-control-label" for="customRadioInline1">Cheap</label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input" />
                <label class="custom-control-label" for="customRadioInline2">Standard</label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadioInline3" name="customRadioInline1" class="custom-control-input" />
                <label class="custom-control-label" for="customRadioInline3">Pricey</label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadioInline4" name="customRadioInline1" class="custom-control-input" />
                <label class="custom-control-label" for="customRadioInline4">Extremely Pricey</label>
              </div>
            </div>

            <div class="form-row justify-content-left">
              <label for="Restaurant Type" class="col-sm-2 col-form-label">Restaurant Type</label>
              <div class="form-group col-md-4">
                <select
                  id="inputState"
                  class="form-control"
                  name="restaurantType"
                  onChange="{this.handleUserInput}">
                  <option selected>Select Restaurant Type</option>
                  <option>Bakery</option>
                  <option>Bars</option>
                  <option>Cafe</option>
                  <option>Casual Dining</option>
                  <option>Diner</option>
                  <option>Fast Food</option>
                </select>
              </div>
            </div>

            <div class="form-row justify-content-left">
              <label for="Area" class="col-sm-2 col-form-label">Area</label>
              <div class="form-group col-md-3">
                <input type="text"
                  class="form-control"
                  placeholder="Area in sq ft"
                  id="inputCity"
                  name="sqarea"
                  //value={this.state.sqarea}
                  onChange={this.handleUserInput} />
              </div>
            </div>

            <div class="form-row justify-content-left">
              <label for="PropertyType" class="col-sm-2 col-form-label">Property Type</label>
              <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadioInline5" name="customRadioInline5" class="custom-control-input" />
                <label class="custom-control-label" for="customRadioInline5">Cheap</label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadioInline6" name="customRadioInline6" class="custom-control-input" />
                <label class="custom-control-label" for="customRadioInline6">Standard</label>
              </div>
            </div>

            <div class="form-group row justify-content-center">
              <div class="col-sm-10">
                <button type="submit" class="btn btn-primary" onClick={this.submitForm}>Find Locations</button>
              </div>
            </div>

            <div class="form-group row justify-content-center">
              <div class="col-sm-10">
                <div className="location">
                  {this.state.showLocations ?
                    <blockquote class="blockquote text-center">
                      <h6> The most suitable order to open the locations is {this.state.temp_response.response.rank1}, {this.state.temp_response.response.rank2}, {this.state.temp_response.response.rank3} </h6>
                      <h6> Please check the analysis page to check the suitability of each area </h6>
                    </blockquote>
                    : null}
                </div>
              </div>
            </div>

          </form>
        </div>

      </div>
    )
  }
}

export default RestaurantDetails;