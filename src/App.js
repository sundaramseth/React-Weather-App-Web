import './App.css';
import React, { useEffect, useState } from "react";
import Weather from './components/weather';
import { Dimmer, Loader, Container, Header, Icon, Divider, Grid } from 'semantic-ui-react';
import moment from 'moment';
export default function App() {


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd,setPwd] = useState("");
  
const handleSubmit = (event) => {

  alert( name, email,pwd)
}


  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(result => {
          setData(result)
          console.log(result);
        });
    }
    fetchData();
  }, [lat, long])

  return (

    <Container >
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <div id="clouds">
              <div class="cloud x1"></div>
              <div class="cloud x2"></div>
              <div class="cloud x3"></div>
              <div class="cloud x4"></div>
              <div class="cloud x5"></div>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      {(typeof data.main != 'undefined') ? (
        <Weather weatherData={data} />
      ) : (
        <Dimmer active>
          <Loader >Loading..</Loader>
        </Dimmer>
      )}

   <Grid.Row>
    <Grid.Column>
      <form onSubmit={handleSubmit}  class="ui form" action='' id="myform">
       <label>Name</label>
       <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
       <label>Email</label>
       <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
       <label>Pwd</label>
       <input type='text' value={pwd} onChange={(e) => setPwd(e.target.value)}></input>
       <button class="ui button" type="submit"  >Submit</button>
      </form>
    </Grid.Column>
    </Grid.Row>

    </Container>



  );
}