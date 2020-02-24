import React, {useState, useEffect, useRef} from "react";
import './addOrEditClientDialog.scss';
import {useForm, Controller, ErrorMessage} from 'react-hook-form';
import {Select, MenuItem, TextField, Input, FormControl, InputLabel} from "@material-ui/core";


// TODO use react hooks here!!!!

const AddOrEditClientDialog = (props) => {
  const [addOrEditState, setAddOrEditState] = React.useState('Add');

  const {register, handleSubmit, watch, errors, control, formState} = useForm();
  const onSubmit = data => {
    console.log('form data>>>', data);
    console.log('form errors>>>', errors);
  };


  useEffect(() => {
    console.log('props >>>', props);
    if (props.client.pid) {
      setAddOrEditState('Edit');
    }
  }, []);

  const testClick = () => {
    console.log('zzzz', errors);
  };


  return (
    <div className="client-form-container">
      <h1>{addOrEditState} Client dialog</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          // className={(formState.touched.pid && watch('pid') === '') || errors.pid ? 'my-custom-input' : ''}
          name="pid"
          error={formState.touched.pid && watch('pid') === '' || errors.pid}
          defaultValue={props.client.pid}
          // required
          helperText={formState.touched.pid && watch('pid') === '' ? 'PID is a required field'
            : errors.pid ? errors.pid.message : 'Enter 11 digit number'}
          type="text"
          label="pid"
          inputRef={register({
            required: 'PID is required.',
            pattern: {
              value: /\d{11}/, // exactly 11 digits
              message: 'Should be 11 digit number'
            }
          })} // functional component
          // ref={register({required: true})} // class based component
          variant="outlined" size="small"
        />

        <TextField
          name="firstName"
          error={(formState.touched.firstName && watch('firstName') === '') || errors.firstName}
          defaultValue={props.client.firstName}
          // required
          helperText={formState.touched.firstName && watch('firstName') === '' ? 'You must enter first name'
            : errors.firstName ? errors.firstName.message : ''}
          type="text"
          label="First name"
          inputRef={register({
            required: 'First name is required',
            minLength: {value: 2, message: 'მინიმუმ 2 სიმბოლო'},
            maxLength: {value: 50, message: 'მაქსიმუმ 50 სიმბოლო'}
          })}
          // ref={register({required: true})}
          variant="outlined" size="small"
        />
        {/*{errors.firstName && <span>This field is required</span>}*/}
        {/*        <ErrorMessage errors={errors}
                      name="firstName"
                      message="This is required"/>*/}

        <Controller
          as={
            <TextField select variant="outlined" size="small" label="gender"
                       inputRef={register}>
              <MenuItem key="მამრობითი" value="მამრობითი">
                მამრობითი
              </MenuItem>
              <MenuItem key="მდედრობითი" value="მდედრობითი">
                მდედრობითი
              </MenuItem>
            </TextField>
          }
          name="gender"
          control={control}
          defaultValue={props.client.gender ? props.client.gender : "მამრობითი"}
        />

        <TextField
          name="phone"
          error={formState.touched.phone && watch('phone') === '' || errors.phone}
          defaultValue={props.client ? props.client.phone : ''}
          // required
          helperText={formState.touched.phone && watch('phone') === '' ? 'Phone is a required field'
            : errors.phone ? errors.phone.message : ''}
          type="text"
          label="phone"
          inputRef={register({
            required: 'Phone is required.',
            pattern: {
              value: /\b5\d{8}\b/,
              message: 'Phone must start with 5 and it must have maximum 9 digits'
            }
          })}
          variant="outlined" size="small"
        />

        <input type="submit"/>
        {/*<button onClick={testClick}>Log errors</button>*/}
        {/*<pre>{JSON.stringify(formState, null, 2)}</pre>*/}
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
