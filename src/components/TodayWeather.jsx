import React, { Component } from "react";
import { tableIcon } from "../WeatherIcons";


export default class TodayWeather extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            buttonDisabled: false,
        }

        this.onButtonClick = this.onButtonClick.bind(this)
    }


    onButtonClick() {
        this.props.onDetailsToggle(!this.state.buttonDisabled, this.props.dataItem, "aujourd'hui")
    }

     render() {

        let disabled = this.props.stateDetails ? "disabled" : ''

        const classes = "wi icon " + tableIcon[this.props.dataItem.weather]

        return <div>
            <i className={classes}></i>
            <p>{this.props.dataItem.tmin} °C</p>
            <p>{this.props.dataItem.tmax} °C</p>
            <button disabled={disabled} onClick={ this.onButtonClick }>Voir plus</button>
        </div>

     }
}