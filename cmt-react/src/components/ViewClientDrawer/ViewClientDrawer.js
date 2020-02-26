import React, {useState, useEffect} from "react";
import './ViewClientDrawer.scss';
import {Button} from '@material-ui/core';


const ViewClientDrawer = (props) => {
  const [test, setTest] = useState('test');


  useEffect(() => {
    console.log(2222222, props);
  });


  return (
    <div className="view-client-drawer">
      <header>
        <img src={props.client.photo} alt="profile_picture"/>
        <h1>{props.client.firstName} {props.client.lastName}</h1>
      </header>
      <p>Gender: {props.client.gender}</p>
      <p>PID: {props.client.pid}</p>
      <p>Phone: {props.client.phone}</p>
      <p>Country: {props.client.legalAddress.country}</p>
      <p>City: {props.client.legalAddress.city}</p>
      <p>Address: {props.client.legalAddress.address}</p>

      <hr/>

      <h2>Accounts:</h2>

      <Button variant="contained" color="primary">Create a new account</Button>
    </div>
  )
};

export default ViewClientDrawer;
