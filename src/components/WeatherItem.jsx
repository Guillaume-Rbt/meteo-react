import React, { Component } from "react";
import moment from "moment/moment";
import { WeatherCodesText } from "../WeatherCodesText";



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
        console.log(WeatherCodesText[this.props.dataItem.weather])
        this.setState({ date: moment(date).format('DD/MM') })
    }


    onDetailsToggle() {

        this.props.onDetailsToggle(!this.props.stateDetails, this.props.dataItem, this.state.date)

    }


    render() {
        let icon = { width: "50%", maxWidth: "100px", aspectRatio: "1 / 1", backgroundImage:"url(./weather-icons/weather-icons-"+ this.props.dataItem.weather + ".svg", backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundSize:"contain"};
       
        let disabled = this.props.stateDetails ? "disabled" : ""





        return <>
            <div className="cards weather-item">

                <p>{this.state.date}</p>
                <div style={icon}></div>
                <p>{WeatherCodesText[this.props.dataItem.weather]}</p>
                <p>{this.props.dataItem.tmax} °C</p>
                <p>{this.props.dataItem.tmin} °C</p>
                <button className="button-details" disabled={disabled} onClick={this.onDetailsToggle}>Voir +</button>

            </div>
        </>
    }
}

WeatherItem.defaultProps = {
    stateDetails: false
}