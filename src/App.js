import React from 'react';

import axios from "axios";

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            city: '',
            main: null,
            weather: null,
            fetching: false,
        }
        this.setCity = this.setCity.bind(this);
        this.fetchWeather = this.fetchWeather.bind(this);
    }

    setCity = (text) => {
        this.setState({
            city: text.target.value
        });

    }

    fetchWeather = (e) => {
        e.preventDefault()
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=metric&lang=fr&appid=634562b88bf8f20cb2bef0366da05683`)
            .then((response) => {
                    this.setState({
                            main: response.data.main,
                            weather: response.data.weather,
                            fetching: true
                        }
                    )
                }
            )
    }

    icon(){
        const type = this.state.weather[0].icon;
        let image;
        switch (type) {
            case '01d':
                image = require('./weather/01d.png')
                break;
            case '02d':
                 image = require('./weather/02d.png')
                break;
            case '03d':
                 image = require('./weather/03d.png')
                break;
            case '04d':
                 image = require('./weather/04d.png')
                break;
            case '09d':
                 image = require('./weather/09d.png')
                break;
            case '10d':
                 image = require('./weather/10d.png')
                break;
            case '11d':
                 image = require('./weather/11d.png')
                break;
            case '13d':
                 image = require('./weather/13d.png')
                break;
            case '50d':
                 image = require('./weather/50d.png')
                break;
            default:
                image = require('./weather/01n.png')
        }
        return <img style={{ width:120 }} src={image} alt={this.state.weather[0].main}/>
    }


    render() {

        return (
            <React.Fragment>
                <CssBaseline/>
                <Container maxWidth="sm">
                    <form style={{marginTop: 20}} onSubmit={(e) => this.fetchWeather(e)}>
                        <TextField fullWidth label="Choisissez une ville" size="medium" variant="outlined"
                                   value={this.state.city} onChange={(text) => this.setCity(text)}/>
                        <Button style={{marginTop: 7}} size="medium" color="primary"
                                variant="contained" type="submit">Validez</Button>
                    </form>

                    {this.state.fetching === false ?
                        <Box mt={3} display="flex" justifyContent="center">
                            <CircularProgress/>
                        </Box>
                        :
                        <Box mt={3} display="flex" justifyContent="space-around" alignItems="center">
                            <Box display='flex' flexDirection="column" justifyContent="center" alignItems="center">
                                {this.icon()}
                                <Typography>{this.state.weather[0].description}</Typography>
                            </Box>
                            <Box>
                                <Typography variant="h4">{Math.round(this.state.main.temp)}°C</Typography>
                                <Typography>Min : {Math.round(this.state.main.temp_min)}°C</Typography>
                                <Typography>Max : {Math.round(this.state.main.temp_max)}°C</Typography>
                                <Typography>Ressentie : {Math.round(this.state.main.feels_like)}°C</Typography>
                            </Box>
                        </Box>}


                </Container>
            </React.Fragment>
        );
    }


}


