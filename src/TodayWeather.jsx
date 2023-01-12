import React, { Component } from "react";
import { tableIcon } from "./WeatherIcons";


export default class TodayWeather extends Component {

    constructor(props) {
        super(props)
    }

     render() {

        const classes = "wi icon " + tableIcon[this.props.dataItem.weather]

        return <div>
            <i className={classes}></i>
            <p>{this.props.dataItem.tmin} °C</p>
            <p>{this.props.dataItem.tmax} °C</p>
        </div>

     }
}