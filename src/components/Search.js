import React from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            main: null,
            weather: null,
            fetching: false,
        }
        this.setCity = this.setCity.bind(this);
        this.fetchWeather = this.fetchWeather.bind(this);    }

    setCity = (text) => {
        this.setState({
            city: text.target.value
        });

    }

    fetchWeather = (e) => {
        e.preventDefault();
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=metric&lang=fr&appid=634562b88bf8f20cb2bef0366da05683`)
            .then(
                (response) => {
                    console.log(response.data.main)
                    console.log(response.data.main)
                    this.setState({
                            main: response.data.main,
                            weather: response.data.weather,
                            fetching: true
                        }
                    )
                },
                (error) => {
                    this.setState({
                        fetching: true,
                        error
                    });
                }
            )

    }


    render() {
        return (

            <form style={{marginTop: 20}} onSubmit={(e) => this.fetchWeather(e)}>
                <TextField fullWidth label="Choisissez une ville" size="medium" variant="outlined"
                           value={this.state.city} onChange={(text) => this.setCity(text)}/>
                <Button style={{marginTop: 7}} size="medium" color="primary"
                        variant="contained" type="submit">Validez</Button>
            </form>
        );
    }
}