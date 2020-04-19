import React from "react";
import {Typography} from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";

export default class Result extends React.Component {

    icon() {
        const type = this.props.weather[0].icon;
        let image;
        switch (type) {
            case '01d':
                image = require('../weather/01d.png')
                break;
            case '02d':
                image = require('../weather/02d.png')
                break;
            case '03d':
                image = require('../weather/03d.png')
                break;
            case '04d':
                image = require('../weather/04d.png')
                break;
            case '09d':
                image = require('../weather/09d.png')
                break;
            case '10d':
                image = require('../weather/10d.png')
                break;
            case '11d':
                image = require('../weather/11d.png')
                break;
            case '13d':
                image = require('../weather/13d.png')
                break;
            case '50d':
                image = require('../weather/50d.png')
                break;
            default:
                image = require('../weather/01n.png')
        }
        return <img style={{width: 120}} src={image} alt={this.props.weather[0].main}/>
    }

    render() {
        if (this.props.error) {
            return (<Typography>Erreur : {this.props.message}</Typography>)
        } else if (!this.props.fetching) {
            return (<Box mt={3} display="flex" justifyContent="center">
                <CircularProgress/>
            </Box>)
        } else {
            return (
                <Box mt={3} display="flex" justifyContent="space-around" alignItems="center">
                    <Box display='flex' flexDirection="column" justifyContent="center" alignItems="center">
                        {this.icon()}
                        <Typography>{this.props.weather[0].description}</Typography>
                    </Box>
                    <Box>
                        <Typography variant="h4">{Math.round(this.props.main.temp)}°C</Typography>
                        <Typography>Min : {Math.round(this.props.main.temp_min)}°C</Typography>
                        <Typography>Max : {Math.round(this.props.main.temp_max)}°C</Typography>
                        <Typography>Ressentie : {Math.round(this.props.main.feels_like)}°C</Typography>
                    </Box>
                </Box>
            )
        }
    }

}