import React from 'react'; // Tell webpack this JS file uses this image


function WeaterLogo({logo}) {

  // Import result is the URL of your image
  return <img id="weaterimg" src={'http://openweathermap.org/img/wn/' + logo + '.png'}></img> ;
}

export default WeaterLogo;