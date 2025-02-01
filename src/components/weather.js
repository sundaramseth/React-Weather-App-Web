import React from 'react';
import './styles.css';

import moment from 'moment';
import { Button, Header, Image, Grid, GridColumn, FormGroup, Input } from 'semantic-ui-react';
import WeaterLogo from './logo';
import humdity from '../assets/img/drop.png';
import windy from '../assets/img/windy.png'
import flexibility from '../assets/img/flexibility.png'
import sealevel from '../assets/img/sea-level.png'
import sunrise from '../assets/img/sunrise.png'
import sunset from '../assets/img/sunset.png'
import location from '../assets/img/location.png'
const refresh = () => {
  window.location.reload();
}


// For instance "09d"

const WeatherCard = ({ weatherData }) => (

  <Grid id="mt10">
    <Grid.Row columns={2}>
      <Grid.Column>
   
        <img src={location} id="width52" /> <br />
        <h1 className='location mt0'> {weatherData.name}</h1>

        <h3>{moment().format('dddd')}, <span>{moment().format('LL')}</span></h3>
      </Grid.Column>
      <Grid.Column textAlign='right'>
        <Button className="button" inverted color='white' circular icon='refresh' onClick={refresh} />
      </Grid.Column>
    </Grid.Row>


    <Grid.Row id="pt4re" columns={2}>
      <Grid.Column  width={1} className='p0' >
        <WeaterLogo logo={weatherData.weather[0].icon} />
      </Grid.Column>
      <Grid.Column className='p0'>
      <h3 id="pl2">{weatherData.weather[0].main}</h3>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <h1 className="temp">{weatherData.main.temp} &deg;C</h1>
      </Grid.Column>
    </Grid.Row>


    <Grid.Row columns={2} className='dflexs' >
      <Grid.Column className='dflex' width={5}>

        {/* Humidity */}
        <Grid.Row >
          <Grid.Column className='mtop15 text-center'>
            <img src={humdity} id="width24" />
          </Grid.Column>
          <Grid.Column className='mtop15'>
          <h4>{weatherData.main.humidity} %</h4>
          
          </Grid.Column>

          </Grid.Row>


          <Grid.Row>
            <Grid.Column>
              <div className='rightborder'></div>
            </Grid.Column>
          </Grid.Row>
       {/* Wind */}
          <Grid.Row >
          <Grid.Column className='mtop15 text-center'>
          <img src={windy} id="width24" />
          
          </Grid.Column>
          <Grid.Column className='mtop15'>
          <h4>{weatherData.wind.speed} Km/h </h4>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
            <Grid.Column>
              <div className='rightborder'></div>
            </Grid.Column>
          </Grid.Row>

     {/* Pressure */}
        <Grid.Row>
          <Grid.Column className='mtop15 text-center'>
          <img src={flexibility} id="width24" />
     
          </Grid.Column>
          <Grid.Column className='mtop15'>
          <h4 >{weatherData.main.pressure} hpa</h4>
  
          </Grid.Column>
     

          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <div className='rightborder'></div>
            </Grid.Column>
          </Grid.Row>
     {/* Sea level */}
          <Grid.Row>
          <Grid.Column className='mtop15 text-center' >
          <img src={sealevel} id="width24" />
       
          </Grid.Column>
          <Grid.Column className='mtop15'>
            <h4 > {weatherData.main.sea_level} m</h4>
          </Grid.Column>
        </Grid.Row>

      </Grid.Column>

      <Grid.Column className='text-right' width={7}>
     {/* Sun Rise */}
        <Grid.Row columns={2} >
          <Grid.Column >
            <img src={sunrise} id="width24" />
          </Grid.Column>
          <Grid.Column>
          <h4>{new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</h4>  
          </Grid.Column>
        </Grid.Row>
  {/* Sun Set */}
        <Grid.Row columns={2}>
          <GridColumn>
              <img src={sunset} id="width24" />
          </GridColumn>
          <GridColumn>
         <h4> {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</h4>
          </GridColumn>
        </Grid.Row>

      </Grid.Column>
    </Grid.Row>





  </Grid>
)

export default WeatherCard;