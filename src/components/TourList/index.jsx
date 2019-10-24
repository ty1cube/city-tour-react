 import React, { Component } from 'react';
import Tour from "../Tour";
import "./tourlist.scss";
import {tourData} from "../../tourData";
  
 
 class TourList extends Component {

    state = {
        tours: tourData
    }

    removeTour = (id) => {
        const {tours} = this.state
        const sortedTours = tours.filter(tour => tour.id !==id)
        this.setState({
            tours: sortedTours
        })
        
    }
     render() {
        const {tours} = this.state;
        // console.log(this.state.tours);

         return (
            <section className="tourlist">
            {
                tours.map(tour => (<Tour key={tour.id} tour={tour} removeTour={this.removeTour}/>))
            }

            </section>
         );
     }
 }
 
 export default TourList;