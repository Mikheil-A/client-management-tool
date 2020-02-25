import React, {useEffect} from "react";
import './ConfirmDeletionDialog.scss';
import {jsonServerInstance as axios} from '../../axios';
import {Button} from '@material-ui/core';
import {connect, useDispatch} from "react-redux";
import {changeClientsGridState, changeDialogOpenState} from "../../redux/actions/actions";


const ConfirmDeletionDialog = (props) => {
  const dispatch = useDispatch();


  const deleteClient = () => {
    axios.delete(`/clients/${props.client.id}`)
      .then(res => {
        dispatch(changeDialogOpenState(false));
        dispatch(changeClientsGridState(true));
      })
  };

  const closeDialog = () => {
    dispatch(changeDialogOpenState(false));
  };


  useEffect(() => {

  }, []);


  return (
    <div className="confirm-deletion-dialog">
      <p>Are you sure you want to delete <b>{props.client.firstName}</b>?</p>
      <div id="action-buttons">
        <Button variant="contained" color="secondary" onClick={deleteClient}>YES</Button>
        <Button variant="contained" color="primary" onClick={closeDialog}>NO</Button>
      </div>
    </div>
  )
};


const mapStateToProps = state => ({
  modals: state.modals
});

const mapDispatchToProps = {
  changeClientsGridState,
  changeDialogOpenState
};

// export default ConfirmDeletionDialog;
export default connect(mapStateToProps, mapDispatchToProps)(ConfirmDeletionDialog);
