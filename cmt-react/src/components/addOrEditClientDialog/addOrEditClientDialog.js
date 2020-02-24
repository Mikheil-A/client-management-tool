import React, {useState, useEffect, useRef} from "react";
import './addOrEditClientDialog.scss';
import {useForm, Controller, ErrorMessage} from 'react-hook-form';
import {MenuItem, TextField, Button, CircularProgress} from "@material-ui/core";
import {jsonServerInstance as axios} from '../../axios';
import {connect, useDispatch, useSelector} from "react-redux";
import {changeDialogOpenState} from "../../redux/actions/actions";


const AddOrEditClientDialog = (props) => {
  const [addOrEditState, setAddOrEditState] = React.useState('Add');
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const isDialogOpened = useSelector(state => state.modals.dialogOpenState);
  const dispatch = useDispatch();

  const {register, handleSubmit, watch, errors, control, formState} = useForm();
  const onSubmit = data => {
    setIsSubmitting(true);
    console.log('form data>>>', data);
    console.log('form errors>>>', errors);

    const requestData = {
      firstName: data.firstName,
      lastName: data.lastName,
      gender: data.gender,
      pid: data.pid,
      phone: data.phone,
      legalAddress: {
        country: data.country,
        city: data.city,
        address: data.address
      },
      actualAddress: {
        country: data.country,
        city: data.city,
        address: data.address
      },
      photo: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`
    };

    switch (addOrEditState) {
      case 'Add': {
        axios.post('/clients', requestData)
          .then((res) => {
            setIsSubmitting(false);
            dispatch(changeDialogOpenState(false));
          });
        break;
      }
      case 'Edit': {
        axios.put(`/clients/${props.client.id}`, requestData)
          .then((res) => {
            setIsSubmitting(false);
            dispatch(changeDialogOpenState(false));
          });
        break;
      }
      default: {
        break;
      }
    }
  };


  useEffect(() => {
    console.log('props >>>', props);
    console.log(isDialogOpened);

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

        <TextField
          name="lastName"
          error={(formState.touched.lastName && watch('lastName') === '') || errors.lastName}
          defaultValue={props.client.lastName}
          helperText={formState.touched.lastName && watch('lastName') === '' ? 'You must enter first name'
            : errors.lastName ? errors.lastName.message : ''}
          type="text"
          label="Last name"
          inputRef={register({
            required: 'First name is required',
            minLength: {value: 2, message: 'მინიმუმ 2 სიმბოლო'},
            maxLength: {value: 50, message: 'მაქსიმუმ 50 სიმბოლო'}
          })}
          variant="outlined" size="small"
        />

        <br/>

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

        <br/>

        <TextField
          name="country"
          error={(formState.touched.country && watch('country') === '') || errors.country}
          defaultValue={props.client.legalAddress ? props.client.legalAddress.country : ''}
          helperText={formState.touched.country && watch('country') === '' ? 'You must enter country'
            : errors.country ? errors.country.message : ''}
          type="text"
          label="Country"
          inputRef={register({
            required: 'Country is required'
          })}
          variant="outlined" size="small"
        />

        <TextField
          name="city"
          error={(formState.touched.city && watch('city') === '') || errors.city}
          defaultValue={props.client.legalAddress ? props.client.legalAddress.city : ''}
          helperText={formState.touched.city && watch('city') === '' ? 'You must enter city'
            : errors.city ? errors.country.message : ''}
          type="text"
          label="City"
          inputRef={register({
            required: 'City is required'
          })}
          variant="outlined" size="small"
        />

        <TextField
          name="address"
          error={(formState.touched.address && watch('address') === '') || errors.address}
          defaultValue={props.client.legalAddress ? props.client.legalAddress.address : ''}
          helperText={formState.touched.address && watch('address') === '' ? 'You must enter address'
            : errors.address ? errors.country.message : ''}
          type="text"
          label="Address"
          inputRef={register({
            required: 'Address is required'
          })}
          variant="outlined" size="small"
        />

        <br/>

        <div id="submit-container">
          <Button variant="contained" color="primary" type="submit">
            {isSubmitting && <CircularProgress color="secondary"/>}
            Submit
          </Button>
          {/*<button onClick={testClick}>Log errors</button>*/}
          {/*<pre>{JSON.stringify(formState, null, 2)}</pre>*/}
        </div>
      </form>
    </div>
  )
};


const mapStateToProps = state => ({
  modals: state.modals
});

const mapDispatchToProps = {changeDialogOpenState};

// export default AddOrEditClientDialog;
export default connect(mapStateToProps, mapDispatchToProps)(AddOrEditClientDialog);
