import React, { Component } from "react";
import moment from "moment/moment";
import { tableIcon } from "../WeatherIcons";
import DayWeatherDetails from "./DayWeatherDetails";

export default class WeatherItem extends Component {


    constructor(props) {
        super(props)
        this.state = {
            date: "",
            show: false,
        }
        this.onDetailsToggle = this.onDetailsToggle.bind(this)
    }

    componentDidMount() {
        let date = new Date(this.props.dataItem.datetime);

        this.setState({ date: moment(date).format('DD/MM') })
    }


    onDetailsToggle() {

        this.props.onDetailsToggle(!this.props.stateDetails, this.props.dataItem, this.state.date)

    }


    render() {

        const classes = "wi " + tableIcon[this.props.dataItem.weather]
        let disabled = this.props.stateDetails ? "disabled" : "" 
        




        return <>
            <div className="weather-item">

                <p>{this.state.date}</p>
                <i className={classes}></i>
                <p>{this.props.dataItem.tmax} °C</p>
                <p>{this.props.dataItem.tmin} °C</p>
                <button disabled={ disabled } onClick={this.onDetailsToggle}>Voir details</button>
              
            </div>
        </>
    }
}

WeatherItem.defaultProps = {
    stateDetails:false
}