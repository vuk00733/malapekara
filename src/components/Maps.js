import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Marker from '../components/Marker.js'


class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 44.874241,
      lng: 20.645199,
    },
    zoom: 14,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={style}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyB1SVgheAJDL4mE7JW9oghHv5anJFWIdvU" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={44.87305018877224}
            lng={20.662566601882734}
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's "
          />
          <Marker
            lat={44.8706276608575}
            lng={20.645836542390484}
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's "
          />
          <Marker
            lat={44.87938085356963}
            lng={20.65440118286115}
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's "
          />
           <Marker
            lat={44.88469371128917}
            lng={20.668484898170423}
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's "
          />
        </GoogleMapReact>
      </div>
    );
  }
}
const style = {
  height: "500px",
  width: "100%",
};
export default SimpleMap;
