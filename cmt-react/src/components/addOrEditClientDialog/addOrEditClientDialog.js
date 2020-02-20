import './addOrEditClientDialog.scss';
import React, {useState, useEffect} from "react";
import TextField from '@material-ui/core/TextField';
import {useForm, Controller} from 'react-hook-form'
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';


// TODO use react hooks here!!!!

const AddOrEditClientDialog = (props) => {
  const [gender, setGender] = React.useState('მამრობითი');

  const {register, handleSubmit, watch, errors, control} = useForm();
  const onSubmit = data => {
    console.log(data)
  };

  useEffect(() => {
    // console.log('>>>test');
  }, []);

  // console.log(watch('example')); // watch input value by passing the name of it


  const handleGenderSelect = event => {
    setGender(event.target.value);
  };

  return (
    <div>
      {/*<h1>addOrEditClientDialog works!</h1>*/}

      {/*<TextField error={true} required id="outlined-basic" label="First name" variant="outlined"/>*/}
      {/*<TextField required id="outlined-basic" label="First name" variant="outlined" defaultValue="Michael Aleksidze"*/}
      {/*           helperText="this is a hint"/>*/}


      <hr/>


      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller as={<TextField ref={register({required: true})} variant="outlined" size="small"/>}
                    name="test" control={control} defaultValue="test" required label="test"/>


        {/*<TextField name="pid" defaultValue={props.client.pid} ref={register({required: true})} required*/}
        {/*           label="pid"*/}
        {/*           variant="outlined" size="small"/>*/}

        {/*        <TextField name="first name" defaultValue={props.client.firstName} ref={register({required: true})} required
                   label="First name"
                   variant="outlined" size="small"/>
        <TextField name="last name" defaultValue={props.client.lastName} ref={register({required: true})} required
                   label="last name"
                   variant="outlined" size="small"/>
        <TextField
          select
          label="Select"
          value={gender}
          helperText="Please select your gender"
          variant="outlined"
          onChange={handleGenderSelect}
          size="small"
        >
          <MenuItem key="მამრობითი" value="მამრობითი">
            მამრობითი
          </MenuItem>
          <MenuItem key="მდედრობითი" value="მდედრობითი">
            მდედრობითი
          </MenuItem>
        </TextField>
        <TextField name="phone" defaultValue={props.client.phone} ref={register} required label="phone"
                   variant="outlined" size="small"/>

        <Input name="tst" defaultValue={props.client.tst} ref={register({required: true})} required
                   label="tst"
                   variant="outlined" size="small"/>*/}

        <input name="test name" ref={register({required: true})}/>
        {/*<input name="exampleRequired" ref={register({required: true})}/>*/}
        {/*{errors.exampleRequired && <span>This field is required</span>}*/}

        <input type="submit"/>
      </form>
    </div>
  )
};

export default AddOrEditClientDialog;
