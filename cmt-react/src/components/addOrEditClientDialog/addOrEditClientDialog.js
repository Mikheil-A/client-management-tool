import React, {useState, useEffect, useRef} from "react";
import './addOrEditClientDialog.scss';
import {useForm, Controller} from 'react-hook-form';
import {Select, MenuItem, TextField} from "@material-ui/core";


// TODO use react hooks here!!!!

const AddOrEditClientDialog = (props) => {
  const [gender, setGender] = React.useState('მამრობითი');
  const [addOrEditState, setAddOrEditState] = React.useState('Add');

  const {register, handleSubmit, watch, errors, control} = useForm();
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


  return (
    <div className="client-form-container">
      <h1>{addOrEditState} Client dialog</h1>


      <form onSubmit={handleSubmit(onSubmit)}>

        <Controller name="pid" control={control} defaultValue={props.client ? props.client.pid : ''}
                    required label="pid" helperText="Enter 9 digit number"
                    as={<TextField ref={register({required: true})} variant="outlined" size="small"/>}/>

        <Controller name="firstName" control={control} type="text"
                    defaultValue={props.client ? props.client.firstName : ''} label="First name"
                    as={<TextField ref={register({required: true})} variant="outlined" size="small"/>}/>
        {errors.firstName && <span>This field is required</span>}

        <Controller name="gender" control={control} defaultValue={props.client ? props.client.gender : "მამრობითი"}
                    required label="gender"
                    as={<TextField ref={register({required: true})} select variant="outlined" size="small">
                      <MenuItem key="მამრობითი" value="მამრობითი">
                        მამრობითი
                      </MenuItem>
                      <MenuItem key="მდედრობითი" value="მდედრობითი">
                        მდედრობითი
                      </MenuItem>
                    </TextField>}
        />

        <input name="test" ref={register({required: true})}/>
        {errors.test && <span>This field is required</span>}

        <input type="submit"/>
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
