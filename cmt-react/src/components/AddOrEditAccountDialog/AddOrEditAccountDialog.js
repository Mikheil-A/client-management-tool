import React, {useEffect, useState} from 'react';
import {Button, MenuItem, TextField} from "@material-ui/core";
import {Controller, useForm} from "react-hook-form";
import './AddOrEditAccountDialog.scss';
import {jsonServerInstance as axios} from '../../axios';


const AddOrEditAccountDialog = (props) => {
  const [title, setTitle] = useState('Add');

  const {register, handleSubmit, watch, errors, control, formState} = useForm();

  useEffect(() => {
    console.log('dialog data', props);
    setDialogMode(props);
  }, []);

  // Set dialog add or edit mode
  const setDialogMode = (dialogData) => {
    if (dialogData.account.id) {
      setTitle('Edit')
    }
  };

  const passDataToParent = () => {
    props.dataFromChild('this is data');
    props.onSave();
  };

  const onSave = formData => {
    let reqData = {
      ...formData
    };

    switch (title) {
      case 'Add': {
        reqData = {
          ...reqData,
          clientId: props.userId
        };
        axios.post('/accounts', reqData)
          .then(res => {
            console.log(res);
          });
        break;
      }
      case 'Edit': {
        reqData = {
          ...reqData,
          id: props.account.id,
          clientId: props.account.clientId
        };
        axios.put(`/accounts/${props.account.id}`, reqData)
          .then(res => {
            console.log(res);
          });
        break
      }
      default:
        break;
    }
  };

  return (
    <div id="add-or-edit-account-dialog">
      <h1>{title} account dialog!</h1>

      <form onSubmit={handleSubmit(onSave)}>
        <Controller
          as={
            <TextField select variant="outlined" size="small" label="type"
                       inputRef={register}>
              <MenuItem key="შემნახველი" value="შემნახველი">
                შემნახველი
              </MenuItem>
              <MenuItem key="მიმდინარე" value="მიმდინარე">
                მიმდინარე
              </MenuItem>
              <MenuItem key="დაგროვებითი" value="დაგროვებითი">
                დაგროვებითი
              </MenuItem>
            </TextField>
          }
          name="type"
          control={control}
          defaultValue={props.account.type ? props.account.type : ""}
        />

        <Controller
          as={
            <TextField select variant="outlined" size="small" label="currency"
                       inputRef={register}>
              <MenuItem key="USD" value="USD">
                USD
              </MenuItem>
              <MenuItem key="GEL" value="GEL">
                GEL
              </MenuItem>
              <MenuItem key="EUR" value="EUR">
                EUR
              </MenuItem>
              <MenuItem key="RUB" value="RUB">
                RUB
              </MenuItem>
            </TextField>
          }
          name="currency"
          control={control}
          defaultValue={props.account.currency ? props.account.currency : ""}
        />

        <Controller
          as={
            <TextField select variant="outlined" size="small" label="status"
                       inputRef={register}>
              <MenuItem key="აქტიური" value="აქტიური">
                აქტიური
              </MenuItem>
              <MenuItem key="გახურული" value="გახურული">
                გახურული
              </MenuItem>
            </TextField>
          }
          name="status"
          control={control}
          defaultValue={props.account.status ? props.account.status : ""}
        />

        <div id="submit-btn-container">
          <Button variant="contained" color="primary" type="submit">
            Save</Button>

          {/*<button onClick={props.onSave}>on test click</button>*/}
          <button onClick={passDataToParent}>on test click</button>
        </div>
      </form>
    </div>
  )
};

export default AddOrEditAccountDialog;
