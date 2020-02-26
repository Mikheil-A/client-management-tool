import React, {useEffect} from 'react';


const AddOrEditAccountDialog = (props) => {

  useEffect(() => {
    console.log(props.data);
  }, []);

  return (
    <div>acount dialog! {props.data.id}

      <h1>create a form here</h1>
    </div>
  )
};

export default AddOrEditAccountDialog;
