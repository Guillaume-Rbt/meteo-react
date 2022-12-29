import react, { Component } from "react";
import { ReactDOM } from "react";
import moment from "moment/moment";

export default class Clock extends Component {
    constructor (props) {
        super(props)
        this.timer = null
        this.state = {
            date: new Date(),
            date_Formatted: "",
            time_Formatted: "",
        }
    }

    componentDidMount () {
        this.setState({date_Formatted: moment(this.state.date).format("DD/MM/YYYY")})
        this.setState({time_Formatted: moment(this.state.date).format("hh:mm")})

        this.timer = window.setInterval(() => { this.setState({date: new Date()});
        this.setState({date_Formatted: moment(this.state.date).format("DD/MM/YYYY")});
        this.setState({time_Formatted: moment(this.state.date).format("hh:mm")});
    }, 1000);
    }


    render() {
        return <div className="clock_container">
            <p className="clock_date">{ this.state.date_Formatted }</p>
            <p className="clock_time">{ this.state.date.getHours() } : { this.state.date.getMinutes() }</p>
        </div>
    }

}