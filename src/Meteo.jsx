import { Component } from "react";
import LocationWeather from "./LocationWeather";

export class Meteo extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return <div>
            <LocationWeather></LocationWeather>
        </div>

    }
}



