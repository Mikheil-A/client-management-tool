import './addOrEditClientDialog.scss';
import React, { useState, useEffect } from "react";
import TextField from '@material-ui/core/TextField';
import {useForm} from 'react-hook-form'


// TODO use react hooks here!!!!

const AddOrEditClientDialog = () => {
  const {register, handleSubmit, watch, errors} = useForm();
  const onSubmit = data => {
    console.log(data)
  };

  useEffect(() => {
    console.log('>>>test');
  }, []);

  console.log(watch('example')); // watch input value by passing the name of it

  return (
    <div>
      <h1>addOrEditClientDialog works!</h1>

      <TextField required id="outlined-basic" label="First name" variant="outlined" size="small"/>
      <TextField error={true} required id="outlined-basic" label="First name" variant="outlined"/>
      <TextField required id="outlined-basic" label="First name" variant="outlined" defaultValue="Michael Aleksidze"
                 helperText="this is a hint"/>


      <hr/>


      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input name="example" defaultValue="test" ref={register} />

        {/* include validation with required or other standard HTML validation rules */}
        <input name="exampleRequired" ref={register({ required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  )
};

export default AddOrEditClientDialog;
