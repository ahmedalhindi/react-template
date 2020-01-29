import React, { Component } from 'react';

class CarIndex extends Component {
    state = {  }
    componentDidMount(){
        console.log(this.props.user)
    }
    render() { 
        return ( 
            <div>
                <h1>this is CarsIndex compnenet</h1>
            </div>
         );
    }
}
 
export default CarIndex;
