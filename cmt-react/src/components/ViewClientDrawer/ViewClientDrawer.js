import React, {useState, useEffect, Fragment} from "react";
import './ViewClientDrawer.scss';
import {Button, Dialog} from '@material-ui/core';
import {jsonServerInstance as axios} from '../../axios';
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddOrEditAccountDialog from "../AddOrEditAccountDialog/AddOrEditAccountDialog";
import {shouldUpdateClientAccountsDrawer} from "../../redux/actions/actions";
import {connect, useDispatch, useSelector} from "react-redux";


const ViewClientDrawer = (props) => {
  const [accounts, setAccounts] = useState({});
  const [selectedAccount, setSelectedAccount] = useState({});
  const [isDialogOpened, setIsDialogOpened] = useState(false);

  const [shouldRefetchAccounts, setShouldRefetchAccounts] = useState(false);



  const {shouldUpdateAccounts} = useSelector(state => ({
    shouldUpdateAccounts: state.others.shouldUpdate
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(2222222, props);
    fetchAccounts();
  }, []);

  useEffect(() => {
    // console.log('>>>>>>>>>>>>', shouldUpdateAccounts);
  }, [shouldUpdateAccounts]);

  useEffect(() => {
    console.log('>>>>>>shouldRefetchAccounts>>>>>>', shouldRefetchAccounts);
    // updateDrawer();
  }, [shouldRefetchAccounts]);


  const updateDrawer = () => {
    console.log('re-fetch accounts');
    // fetchAccounts();
  };

  const testSave = () => {
    console.log(222);
  };

  const fetchAccounts = () => {
    axios.get('/accounts')
      .then(res => {
        setAccounts(res.data.filter(el => el.clientId === props.client.id));
        console.log(accounts);
      })
  };

  const openAddOrEditAccountDialog = (account) => {
    setSelectedAccount(account);
    setShouldRefetchAccounts(false);
    setIsDialogOpened(true);
  };

  const deleteAccount = (account) => {
    axios.delete(`/accounts/${account.id}`)
      .then(() => {
        fetchAccounts();
      })
  };

  const logDataFromChild = (msg) => {
    console.log('data from child', msg);
  };


  return (
    <div className="view-client-drawer">
      <header>
        <img src={props.client.photo} alt="profile_picture"/>
        <h1>{props.client.firstName} {props.client.lastName}</h1>
      </header>
      <p>Gender: {props.client.gender}</p>
      <p>PID: {props.client.pid}</p>
      <p>Phone: {props.client.phone}</p>
      <p>Country: {props.client.legalAddress.country}</p>
      <p>City: {props.client.legalAddress.city}</p>
      <p>Address: {props.client.legalAddress.address}</p>

      <hr/>

      <h2>Accounts:</h2>
      {accounts.length ? accounts.map(account => (
        <div className="row" key={account.id}>
          <p>#{account.id}</p>

          <div id="action-icons">
            <IconButton color="primary" component="span" onClick={() => openAddOrEditAccountDialog(account)}>
              <EditIcon fontSize="small"/>
            </IconButton>
            <IconButton color="primary" component="span" onClick={() => deleteAccount(account)}>
              <DeleteIcon fontSize="small"/>
            </IconButton>
          </div>
        </div>
      )) : null}

      <Button variant="contained" color="primary"
              onClick={() => openAddOrEditAccountDialog({})}>Create a new account</Button>


      <Dialog onClose={() => setIsDialogOpened(false)}
              open={isDialogOpened}>
        <AddOrEditAccountDialog account={selectedAccount}
                                userId={props.client.id}
                                onSave={updateDrawer}
                                dataFromChild={logDataFromChild}/>
      </Dialog>
    </div>
  )
};


const mapStateToProps = state => ({
  others: state.others
});

const mapDispatchToProps = {
  shouldUpdateClientAccountsDrawer
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewClientDrawer);
