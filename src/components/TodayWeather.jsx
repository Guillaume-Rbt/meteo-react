import React, { Component } from "react";
import { WeatherCodesText } from "../WeatherCodesText";
import { WindDir } from '../WindDir'


export default class TodayWeather extends Component {

    constructor(props) {
        super(props)

        this.defineWinDir = this.defineWinDir.bind(this)

    }

    

    defineWinDir () {
        let dirDeg = this.props.dataItem.dirwind10m;

        let dirMod = dirDeg % 360;

        let index = Math.floor(dirMod / 22.5 + 1)

        return WindDir[index]

    }

    render() {

        let winDir = this.defineWinDir()

        let icon = { backgroundImage: "url(./weather-icons/weather-icons-" + this.props.dataItem.weather + ".svg" };
        return <div className="cards weather-today">
            <div className="weather-today_generals">
                <p>Aujourd'hui</p>
                <div style={icon} className='icon-weather-today'></div>
                <p>{WeatherCodesText[this.props.dataItem.weather]}</p>
                <p>{this.props.dataItem.tmin} °C</p>
                <p>{this.props.dataItem.tmax} °C</p>
            </div>
            <div className="weather-today_details">
                <p>Vent moyen : {this.props.dataItem.wind10m} km/h direction : { winDir }</p>
                <p>Rafales : {this.props.dataItem.gust10m} km/h</p>
                <p>Probabilité de pluie : {this.props.dataItem.probarain} %</p>
                <p>Cumul de pluie : {this.props.dataItem.rr10} mm</p>
            </div>
        </div>

    }
}