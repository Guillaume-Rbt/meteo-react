import React, { Component } from "react";
import { WeatherCodesText } from "../WeatherCodesText";


export default class TodayWeather extends Component {

    constructor(props) {
        super(props)

        this.state = {
            buttonDisabled: false,
        }

    }



    render() {

        let icon = { width: "50%", maxWidth: "100px", aspectRatio: "1 / 1", backgroundImage:"url(./weather-icons/weather-icons-"+ this.props.dataItem.weather + ".svg", backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundSize:"contain"};

    

        return <div className="cards weather-today">
            <div className="weather-today_generals">
                <p>Aujourd'hui</p>
                <div style={icon}></div>
                <p>{WeatherCodesText[this.props.dataItem.weather]}</p>
                <p>{this.props.dataItem.tmin} °C</p>
                <p>{this.props.dataItem.tmax} °C</p>
            </div>
            <div className="weather-today_details">
                <p>{this.props.dataItem.tmin} °C</p>
                <p>{this.props.dataItem.tmax} °C</p>
            </div>
        </div>

    }
}