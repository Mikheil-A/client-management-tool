import React, {Component, Fragment} from 'react';
import './Clients.scss';
import {jsonServerInstance as axios} from '../../axios';
import {connect} from "react-redux";
import {
  addClient,
  addAccount,
  changeDrawerOpenState,
  changeDialogOpenState,
  changeClientsGridState
} from "../../redux/actions/actions";
import Grid from "../../components/Grid/Grid";
import GridHeader from "../../components/GridHeader/GridHeader";
import Drawer from '@material-ui/core/Drawer';
import ViewClientDrawer from "../../components/ViewClientDrawer/ViewClientDrawer";
import {Dialog, Backdrop} from '@material-ui/core';
import AddOrEditClientDialog from "../../components/AddOrEditClientDialog/AddOrEditClientDialog";
import ConfirmDeletionDialog from "../../components/ConfirmDeletionDialog/ConfirmDeletionDialog";
import {DotLoader} from "react-spinners";


class Clients extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // isDrawerOpened: false,
      // clients: [],
      // client: {}
      // client: null,
      client: {
        "id": 1,
        "firstName": "Misho",
        "lastName": "Aleksidze",
        "gender": "მამრობითი",
        "pid": "00000000000",
        "phone": 555555555,
        "legalAddress": {
          "country": "Georgia",
          "city": "Gori",
          "address": "address"
        },
        "actualAddress": {
          "country": "Georgia",
          "city": "Tbilisi",
          "address": "address"
        },
        "photo": "https://randomuser.me/api/portraits/men/93.jpg"
      },
      isConfirmDeletionDialogOpened: false,
      isLoading: false
    };
  }

  componentDidMount() {
    this.fetchClients();

    setTimeout(() => {
      // this.onDialogToggle({});
      this.props.changeDrawerOpenState(true);
    }, 400);
  }


  fetchClients = () => {
    this.setState({
      ...this.state,
      isLoading: true
    });

    axios.get('/clients')
      .then(res => {
        // this.storeClientsToComponentLevelState(res);
        this.storeClientsToReduxStore(res);
        this.props.changeClientsGridState(false);

        this.setState({
          ...this.state,
          isLoading: false
        });
      })
  };

  storeClientsToComponentLevelState = data => {
    this.setState({
      ...this.state,
      clients: data
    })
  };

  storeClientsToReduxStore = data => {
    this.props.addClient(data);
  };

  onDrawerToggle = (clickedRow) => {
    this.setState({
      ...this.state,
      client: clickedRow
      // isDrawerOpened: !this.state.isDrawerOpened
    });

    this.props.changeDrawerOpenState(!this.props.modals.drawerOpenState);
  };


  onDialogToggle = (clickedClient, isDeletionDialog) => {
    this.setState({
      ...this.state,
      client: clickedClient,
      isConfirmDeletionDialogOpened: isDeletionDialog
    });
    this.props.changeDialogOpenState(!this.props.modals.dialogOpenState);
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.grids.shouldClientsGridUpdate !== this.props.grids.shouldClientsGridUpdate && this.props.grids.shouldClientsGridUpdate) {
      this.fetchClients();
    }
  }

  render() {
    return (
      <Fragment>
        <GridHeader onAddClientDialogOpen={this.onDialogToggle}/>

        {this.props.clients.length > 0
          ? <Grid data={this.props.clients}
                  onDriverOpen={this.onDrawerToggle}
                  onEditClientDialogOpen={this.onDialogToggle}
                  onConfirmDeletionDialogOpen={this.onDialogToggle}/>
          : null}

        {this.props.accounts.accounts.length > 0
          ? this.props.accounts.accounts.map(account => (
            <div key={account}>
              {account}
            </div>
          ))
          : null}


        <Drawer anchor="right" open={this.props.modals.drawerOpenState} onClose={this.onDrawerToggle}>
          <ViewClientDrawer client={this.state.client}/>
        </Drawer>

        <Dialog onClose={this.onDialogToggle}
                open={this.props.modals.dialogOpenState}>
          {!this.state.isConfirmDeletionDialogOpened && <AddOrEditClientDialog client={this.state.client}/>}
          {this.state.isConfirmDeletionDialogOpened && <ConfirmDeletionDialog client={this.state.client}/>}
        </Dialog>

        <Backdrop open={this.state.isLoading}>
          {/*"react-spinners - npm": https://www.npmjs.com/package/react-spinners*/}
          <DotLoader
            size={100}
            color={"#b8aeae"}
          />
        </Backdrop>
      </Fragment>
    )
  }
}


// const mapStateToProps = null;
const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    clients: state.clients,
    modals: state.modals,
    grids: state.grids
  };
};

const mapDispatchToProps = {
  addAccount: addAccount,
  addClient: addClient,
  changeDrawerOpenState: changeDrawerOpenState,
  changeDialogOpenState: changeDialogOpenState,
  changeClientsGridState: changeClientsGridState
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Clients);
