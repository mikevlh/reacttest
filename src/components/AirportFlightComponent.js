import React from 'react'
import APIServiceAirportFlight from '../service/APIServiceAirportFlight.js'


export default class AirplaneComponent extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
             airportFlights: []
        }
    }

    saySomething(event) {
        event.preventDefault();
        const departureDate = '2022-01-25T00:00:00';
        const countryDeparture = event.target.countryDeparture.value;
        const countryArrival = event.target.countryArrival.value;
        console.log(event.target.date.value);
        console.log(event.target.countryDeparture.value);
        console.log(event.target.countryArrival.value);
        APIServiceAirportFlight.getAirportFlightsByDatesAndDestination(departureDate, countryDeparture, countryArrival).then((response) => {             
                console.log(response, "response")
                console.log(response.data, "response.data")
                console.log(response.data.data, "response.data.data")
            const airportFlights = JSON.parse(JSON.stringify(response.data.data));
            console.log(airportFlights)
                return { airportFlights };                       
                     })
          .catch(function (ex) {
              console.log('Response parsing failed. Error: ', ex);
          });;

    }
    render() {
        return(
            <div>
                <form onSubmit={this.saySomething}>
            <div>
                <span>Departure Date</span>
                <input type = "date" name="date"/>  
                </div>
  
  <div class="form-group">
    <label for="countryDeparture">From</label>
    <input type="text" class="form-control"  name="countryDeparture" placeholder="Enter the Departure Country"/>
  </div>
  <div class="form-group">
    <label for="countryArrival">To</label>
    <input type="text" class="form-control" name="countryArrival" placeholder="Enter the Destination"/>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
            </div>
        )
    }
}