import React, {useState, useEffect} from "react";
import './DrawerContent.scss';


const DrawerContent = (props) => {
  const [test, setTest] = useState('test');

  useEffect(() => {
    console.log(2222222, props);
  });


  return (
    <div>
      {props.client.firstName}
      drawer content works!
    </div>
  )
};

export default DrawerContent;
