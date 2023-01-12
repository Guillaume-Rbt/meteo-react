import React, { Component, createRef } from "react";
import TodayWeather from "./TodayWeather";
import WeatherItem from "./WeatherItem";

export default class LocationWeather extends Component {

    constructor(props) {
        super(props)

        this.state = {
            city: "Votre position",
            meteoData: null,
            coords: {}
        }
        this.LocationInput = createRef()
        this.handleEnter = this.handleEnter.bind(this);
        this.getLocationIp = this.getLocationIp.bind(this);
        this.getMeteoData = this.getMeteoData.bind(this);
    }


    async componentDidMount() {
        let coords = await this.getLocationIp();
        await this.getMeteoData(coords)
    }

    async getLocationIp() {
        let ip = await fetch('https://api.ipify.org/?format=json').then(r => r.json()).then(data => data.ip);

        let location = await fetch('https://api.ipgeolocation.io/ipgeo?apiKey=acb31e5b1ae841e7a4ead46353a7c258&ip=' + ip).then(r => r.json()).then(data => data)

        this.setState({ coords: { lat: location.latitude, lon: location.longitude } })
        return { lat: location.latitude, lon: location.longitude }
    }

    async getMeteoData(coords = null) {
        let CoordsApi = null;
        if (coords !== null) {
            CoordsApi = coords
        } else {
            CoordsApi = this.state.coords
        }


        await fetch('https://api.meteo-concept.com/api/forecast/daily?token=2b768a77cfdfb1eeb0777e31876b5215fbeddc6d878176031701598592476b90&latlng=' + CoordsApi.lat + ',' + CoordsApi.lon)
            .then(r => r.json()).then((json) => {
                this.setState({ meteoData: json })
            })
    }

    async handleEnter(e) {

        if (e.key === "Enter" && e.target.value !== "") {
            this.setState({ city: e.target.value })

            let coords = await fetch('https://api.meteo-concept.com/api/location/cities?token=2b768a77cfdfb1eeb0777e31876b5215fbeddc6d878176031701598592476b90&search=' + e.target.value)
                .then(r => r.json()).then((json) => {
                    this.setState({ coords: { lat: json.cities[0].latitude, lon: json.cities[0].longitude } })


                    return { lat: json.cities[0].latitude, lon: json.cities[0].longitude }
                })

            this.getMeteoData(coords)
        } 
    }


    render() {
        let data = null;
        let todayData = { weather: 0 }
        if (this.state.meteoData !== null) {
            data = this.state.meteoData.forecast
            todayData = data.shift();
            console.log(todayData)
        } else {
            data = []
        }
        return <>

            <div className="field-text" >
                <input ref={this.LocationInput} onKeyUp={this.handleEnter} ></input>
                <p><span className="material-symbols-outlined">pin_drop</span> <span>{this.state.city}</span></p>
            </div>
            <TodayWeather dataItem={todayData} ></TodayWeather>
            <div className="forecast-container">
                {data.map((item, i) => <WeatherItem key={i} dataItem={item}></WeatherItem>)}
            </div>

        </>
    }
} 