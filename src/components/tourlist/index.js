import React, { Component } from 'react';
import './styles.scss';
import Tour from './../tour';
import {tourData} from './../tourData'

export default class TourList extends Component{
    state={
        tours: tourData
    }

    removeTour = id => {
        const {tours} = this.state;
        const sortedTours = tours.filter(tour => tour.id !== id);
        this.setState({
            tours : sortedTours
        })
    }

    render(){
        const {tours} = this.state;

        return(
            <section className="tourlist" data-test="secComponent">
              {tours.map(tour => {
                  return (
                      <Tour key={tour.id} tour={tour} removeTour={this.removeTour}/>
                  )
              })}
            </section>
        )
    }
}