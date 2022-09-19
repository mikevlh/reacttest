import axios from 'axios';

const AIRPORTFLIGHT_API_REST_URL = "http://localhost:8080/airportFlight/fromToDepartDate"

class APIService {
    getAirportFlightsByDatesAndDestination(departureDate, countryDeparture, countryArrival) {
        // console.log(body, "body");
    return axios.post(AIRPORTFLIGHT_API_REST_URL, null, {params:{departureDate, countryDeparture, countryArrival}});
    }
}

export default new APIService();