import { Component } from "react";
import moment from "moment/moment";

export default class Clock extends Component {

    constructor(props) {
        super(props)

        this.timer = null

        this.state = {
            date: new Date(),
            date_Formatted: "",
            time: '',
        }

        this.time = this.time.bind(this)
    }

    componentDidMount() {
        this.setState({ date_Formatted: moment(this.state.date).format("DD/MM/YYYY") })
        this.time()

        this.timer = window.setInterval(() => {
            this.setState({ date: new Date() });
            this.setState({ date_Formatted: moment(this.state.date).format("DD/MM/YYYY") });
            this.time();
        }, 1000);
    }

    time() {
        let minutes = this.state.date.getMinutes().toString().padStart(2, "0");
        let hours = this.state.date.getHours().toString().padStart(2 , '0');

        this.setState({time: hours + " : " + minutes}) 
    }

    render() {
        return <div className="clock-container">
            <p className="clock-date">{this.state.date_Formatted}</p>
            <p className="clock-time">{this.state.time} {this.props.children}</p>
        </div>
    }

}