import React, {useState, useEffect} from "react";
import './ViewClientDrawer.scss';
import {Button} from '@material-ui/core';


const ViewClientDrawer = (props) => {
  const [test, setTest] = useState('test');

  useEffect(() => {
    console.log(2222222, props);
  });


  return (
    <div>
      {props.client.firstName}

      <Button variant="contained" color="primary">Create a new account</Button>
    </div>
  )
};

export default ViewClientDrawer;
