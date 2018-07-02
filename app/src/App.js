import React, { Component } from 'react';
// import logo from './logo.svg';
import GoogleMapReact from 'google-map-react';

import './App.css';
import Flat from './components/flat';
import Marker from './components/marker';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      flats: [],
      selectedFlat: null
    };
  }

  componentDidMount() {
    const url = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json";
    fetch(url) //AJAX
      .then(response => response.json())
      .then((data) => {
        this.setState({
          flats: data
        });
      })
  }

selectFlat = (flat) => {
  console.log(flat);
  this.setState({
      selectedFlat: flat
  })
}

  render() {
    const center = {
      lat: 48.8566,
      lng: 2.3522
    }
    const flat =  {
      "name": "Trendy Apt in Buttes Montmartre",
      "imageUrl": "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat2.jpg",
      "price": 200,
      "priceCurrency": "EUR",
      "lat": 48.885707,
      "lng": 2.343543
    };

    const flats = [flat, flat, flat, flat];

    return (
      <div className="app">
        <div className="main">
          <div className="search">
          </div>
          <div className="flats">
            {this.state.flats.map((flat) => {
              return <Flat 
                key={flat.name} 
                flat ={flat}
                selectFlat = {this.selectFlat} />
            })}
          </div>
        </div>
        <div className="map" >
          <GoogleMapReact
            // bootstrapURLKeys={{ key: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCcFC0eN40j505oSWh6U9JhGTcbDdh4KHE"}}
            center={center}
            zoom={11}
          >
            {this.state.flats.map((flat) => {
              return < Marker key={flat.name} lat={flat.lat} lng={flat.lng} text={flat.price}/> 
            })}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
