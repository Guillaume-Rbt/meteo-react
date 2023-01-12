import React, { Component } from "react";
import moment from "moment/moment";
import { tableIcon } from "./WeatherIcons";

export default class WeatherItem extends Component {


    constructor(props) {
        super(props)
        this.state = {
            date:""
        }
    }

    componentDidMount() {
        let date = new Date(this.props.dataItem.datetime);

        this.setState({date : moment(date).format('D/MM')})
    }

    render() {

        const classes = "wi " + tableIcon[this.props.dataItem.weather]


        return <div className="weather-item">

            <p>{ this.state.date }</p>
            <i className={ classes }></i>
            <p>{ this.props.dataItem.tmax } °C</p>
            <p>{ this.props.dataItem.tmin } °C</p> 
        </div>
    }
}