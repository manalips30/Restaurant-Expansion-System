import React, { Component } from 'react';


class FilterFormServReq extends Component {

  constructor(props) {
    super(props);
    this.state = {
      area1:"",
      area2:"",
      area3:"",
      city:"",
      kingdom:"",
      zip:"",
      cuisine: "",
      cost: "",
      restaurantType: "",
      sqarea: "",
      propertyType: ""

    }
    this.handleUserInput = this.handleUserInput.bind(this)
  }

  async addRequest() {
    console.log(this.state.routeId, this.state.routeInfo);
    
    // try {
    //   await fetch(window.$url + "/addDropdown", {
    //     method: "POST",
    //     mode: "cors",
    //     headers: {
    //       Accept: "application/json",
    //       "Content-type": "application/json",
    //       Authorization: "Bearer " + cookies.get("usertoken")
    //     },

    //     body: JSON.stringify({
    //       dropdown_value: this.state.routeId,
    //       display_name: this.state.routeInfo,
    //       dropdown_type: "route"
    //     })
    //   })
    //     .then(response => response.json())
    //     .then(result => this.setState({ addRouteResult: result }))
    //     .catch(error => this.setState({ error: error }));
    // } catch (e) {
    //   this.setState({ error: e });
    //   console.log(e);
    // }

    // console.log("addRouteResult", this.state.addRouteResult);
    // if (this.state.addRouteResult === "") {
    //   this.setState({ message: "Added successfully!" });
    // }
    // else if (this.state.addRouteResult.status === 500) {
    //   this.setState({ message: "Id and Value should be Unique" });
    // } else {
    //   this.setState({ message: this.state.addRouteResult });
    // }
  }

  submitForm = (e) => {
    e.preventDefault();
    //this.props.handleOnClick(this.state);
    console.log('state',this.state)
  }

  handleUserInput = (e) => {
    //const name = e.target.name;
    //const value = e.target.value;
    //this.setState({ [name]: value })
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div className="container-fluid login-container w-75">
        <div className="filterForm">
          <form>
            <div class="form-row justify-content-left">
              <label for="inputPassword3" class="col-sm-2 col-form-label">Location</label>
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
                  name="area2"
                  class="form-control"
                  placeholder="Area2"
                  id="area2"
                  //value={this.state.area2}
                  onChange={this.handleUserInput} />
              </div>
              <div class="form-group col-md-3">
                <input
                  type="text"
                  name="area3"
                  class="form-control"
                  placeholder="Area3"
                  id="area3"
                  //value={this.state.area3}
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
                onChange={this.handleUserInput}/>
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
              <div class="form-group col-md-2">
                <input 
                type="text" 
                class="form-control" 
                placeholder="Zip"
                name="zip" 
                id="inputZip"
                //value={this.state.zip}
                onChange={this.handleUserInput} />
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
                  <option>Chinese</option>
                  <option>Indian</option>
                  <option>mediterranean</option>
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
                  <option>...</option>
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
              <label for="Cost" class="col-sm-2 col-form-label">Property Type</label>
              <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadioInline5" name="customRadioInline5" class="custom-control-input" />
                <label class="custom-control-label" for="customRadioInline5">Rental</label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadioInline6" name="customRadioInline6" class="custom-control-input" />
                <label class="custom-control-label" for="customRadioInline6">To buy</label>
              </div>
            </div>

            <div class="form-group row justify-content-center">
              <div class="col-sm-10">
                <button type="submit" class="btn btn-primary" onClick={this.submitForm}>Find Locations</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default FilterFormServReq;