import React, {useState, useEffect, useRef} from "react";
import './addOrEditClientDialog.scss';
import {useForm, Controller, ErrorMessage} from 'react-hook-form';
import {Select, MenuItem, TextField, Input, FormControl, InputLabel} from "@material-ui/core";


// TODO use react hooks here!!!!

const AddOrEditClientDialog = (props) => {
  const [gender, setGender] = React.useState('მამრობითი');
  const [addOrEditState, setAddOrEditState] = React.useState('Add');

  const {register, handleSubmit, watch, errors, control, formState} = useForm();
  const onSubmit = data => {
    console.log('form data>>>', data);
    console.log('form errors>>>', errors);
  };

  // console.log(watch('example'));

  useEffect(() => {
    if (props.client) {
      setAddOrEditState('Edit');
    }
    console.log('this is a test call', props);
  }, []);

  const handleGenderSelect = event => {
    setGender(event.target.value);
  };

  const testClick = () => {
    console.log('zzzz', errors);
  };

  const handleFormChange = (e) => {
    console.log(e);
  };

  return (
    <div className="client-form-container">
      <button onClick={testClick}>test</button>
      <h1>{addOrEditState} Client dialog</h1>


      <form onSubmit={handleSubmit(onSubmit)} onChange={handleFormChange}>

        <TextField
          className={(formState.touched.pid && watch('pid') === '') || errors.pid ? 'my-custom-input' : ''}
          name="pid"
          error={!!errors.username}
          defaultValue={props.client ? props.client.pid : ''}
          // required
          // helperText={errors.username ? errors.username.message : ''}
          helperText="Enter 9 digit number"
          type="text"
          label="pid"
          inputRef={register({required: true})}
          // ref={register({required: true})}
          variant="outlined" size="small"
        />
        {errors.pid && <span>this is a test</span>}
        {formState.touched.pid && <span>this field was touched</span>}

        <TextField
          // className="my-custom-input"
          name="firstName"
          // error={!!errors.firstName}
          error={!!errors.firstName || (formState.touched.firstName && watch('firstName') === '')}
          defaultValue={props.client ? props.client.firstName : ''}
          // required
          // helperText={errors.username ? errors.username.message : ''}
          helperText="Enter 9 digit number"
          type="text"
          label="First name"
          inputRef={register({required: true})}
          // ref={register({required: true})}
          variant="outlined" size="small"
        />
        {/*{errors.firstName && <span>This field is required</span>}*/}
        <ErrorMessage errors={errors} name="firstName" message="This is required"/>

        <TextField select variant="outlined" size="small" label="gender"
                   name="gender" defaultValue={props.client ? props.client.gender : "მამრობითი"}
          // ref={register({required: true})}
                   inputRef={register({required: true})}
        >
          <MenuItem key="მამრობითი" value="მამრობითი">
            მამრობითი
          </MenuItem>
          <MenuItem key="მდედრობითი" value="მდედრობითი">
            მდედრობითი
          </MenuItem>
        </TextField>
        <ErrorMessage errors={errors} name="gender" message="This is required"/>
        {errors.gender && <span>This field is required</span>}


        <input type="submit"/>

        <pre>{JSON.stringify(formState, null, 2)}</pre>
        {/*{errors.map(error => {*/}
        {/*  return <span key={error}>{error}</span>*/}
        {/*})}*/}
      </form>


      {/*
      <ValidatorForm
        ref="form"
        onSubmit={handleSubmit}
        onError={errors => console.log('form errors >>>>', errors)}>

        <TextValidator
          label="pid"
          name="pid"
          type="text"
          variant="outlined"
          size="small"
          // required
          // error={true}
          // defaultValue={props.client ? props.client.pid : null}
          value={this.state.pid}
          // value={props.client ? props.client.pid : null}
          validators={['required']}
          errorMessages={['this field is required']}
          helperText="11 digit number."
        />


        <TextValidator name="Last name"
                       label="Last name"
                       type="text"
                       defaultValue={props.client ? props.client.lastName : null}
          // validators={['required']}
          // required
                       variant="outlined"
                       size="small"/>

        <TextValidator name="Phone"
                       label="Phone"
                       defaultValue={props.client ? props.client.phone : null}
          // validators={['required']}
          // required
                       variant="outlined"
                       size="small"/>

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

      <button type="submit">Submit</button>

    </ValidatorForm>
        */}


    </div>
  )
};

export default AddOrEditClientDialog;
