import React, { Component } from 'react';

class Locations extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            location:{
                status:"",
                response:""},
        }
    }

    render() {
        return(
            <div className="location">
            <blockquote class="blockquote text-center">
                <h6>Manali </h6>
                <h6>Yadi</h6>
                </blockquote>
            </div>    
        )
    }
}

export default Locations;