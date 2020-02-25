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
import Dialog from '@material-ui/core/Dialog';
import AddOrEditClientDialog from "../../components/AddOrEditClientDialog/AddOrEditClientDialog";
import ConfirmDeletionDialog from "../../components/ConfirmDeletionDialog/ConfirmDeletionDialog";


class Clients extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // isDrawerOpened: false,
      // clients: [],
      // client: {}
      client: null,
      isConfirmDeletionDialogOpened: false
    };
  }

  componentDidMount() {
    this.fetchClients();

    setTimeout(() => {
      // this.onDialogToggle({});
    }, 400);
  }


  fetchClients = () => {
    axios.get('/clients')
      .then(res => {
        // this.storeClientsToComponentLevelState(res);
        this.storeClientsToReduxStore(res);
        this.props.changeClientsGridState(false);
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
