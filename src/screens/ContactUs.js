import React from "react";
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom'
// import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {


  return (

    <Container className="py-3 content-container" fluid>
      <Link to='/' className='btn btn-light my-3'>
        Go Back
      </Link>
      <div className=" container w-75 p-3" >
        <h1>Contact Us</h1>
        <h5>Pune Office:</h5>
        <p style={{ color: '#000000' }}><strong>Bhimdhwaja Rudraksha</strong></p>
        <p style={{ color: '#000000' }}><strong>Flat No 1, first floor, </strong></p>
        <p style={{ color: '#000000' }}><strong>Pandurang Niwas society Adjacent to Eknath Balak Mandir, </strong></p>
        <p style={{ color: '#000000' }}><strong>Tapkir Galli, Pune, Maharastra 411002</strong></p><br />

        <h5>Bhimashankar Office:</h5>
        <p style={{ color: '#000000' }}><strong>Bhimdhwaja Rudraksha </strong></p>
        <p style={{ color: '#000000' }}><strong>At Post Bhimashankar,</strong></p>
        <p style={{ color: '#000000' }}><strong>Bhimashankar Jyotirlinga</strong></p>
        <p style={{ color: '#000000' }}><strong>Tq - Khed, Dist - Pune 410509</strong></p>
      </div>
      <div style={{ height: '50vh', width: '50%' }}>
        {/* <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact> */}
      </div>
    </Container>
  );
}