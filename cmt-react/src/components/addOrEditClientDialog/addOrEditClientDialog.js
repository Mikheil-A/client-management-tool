/*
import React, {useState, useEffect, useRef} from "react";
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';*/

import React from 'react';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import './addOrEditClientDialog.scss';


// TODO use react hooks here!!!!

// const AddOrEditClientDialog = (props) => {
class AddOrEditClientDialog extends React.Component {
  // const [gender, setGender] = React.useState('მამრობითი');
  // const [addOrEditState, setAddOrEditState] = React.useState('Add');

  state = {
    pid: '',
  };

  constructor(props) {
    super(props);
  }

  handleChange = (event) => {
    const pid = event.target.value;
    this.setState({pid});
  };


  handleSubmit = e => {
    console.log('form data >>> ', e, e.target.value)
  };

  // const formRef = useRef('form');

  /*useEffect(() => {
    if (props.client) {
      setAddOrEditState('Edit');
    }
    console.log('this is a test call');
  }, []);

  const handleGenderSelect = event => {
    setGender(event.target.value);
  };
*/


  render() {
    return (
      <div className="client-form-container">
        {/*<h1>{addOrEditState} Client dialog</h1>*/}

        <ValidatorForm
          ref="form"
          onSubmit={this.handleSubmit}
          onError={errors => console.log('form errors >>>>', errors)}>

          <TextValidator
            label="pid"
            name="pid"
            type="text"
            onChange={this.handleChange}
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
          {/*
        <TextValidator name="First name"
                       label="First name"
                       type="text"
                       defaultValue={props.client ? props.client.firstName : null}
          // validators={['required']}
          // required
                       variant="outlined"
                       size="small"/>

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
                       size="small"/>*/}

          {/*  <TextField
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
        */}

          <button type="submit">Submit</button>

        </ValidatorForm>

      </div>
    )
  }
}

export default AddOrEditClientDialog;
