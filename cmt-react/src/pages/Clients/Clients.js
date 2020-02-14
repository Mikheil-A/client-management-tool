import React, {Component, Fragment} from 'react';
import './Clients.scss';
import {jsonServerInstance as axios} from '../../axios';
import {connect} from "react-redux";
import {addClient, addAccount, drawerOpenStateChange} from "../../redux/actions/actions";
import Grid from "../../components/Grid/Grid";
import GridHeader from "../../components/GridHeader/GridHeader";
import Drawer from '@material-ui/core/Drawer';
import DrawerContent from "../../components/DrawerContent/DrawerContent";


class Clients extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // isDrawerOpened: false,
      // clients: [],
      client: {}
    }
  }

  componentDidMount() {
    console.log(this.props.clients);
    this.fetchClients();
  }


  fetchClients = () => {
    axios.get('/clients')
      .then(res => {
        // this.storeClientsToComponentLevelState(res);
        // this.storeClientsToReduxStore(res);
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

  toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    // setState({...state, [side]: open});
  };

  onDrawerToggle = (clickedRow) => {
    // this.setState({
    //   ...this.state,
    //   client: clickedRow,
    //   isDrawerOpened: !this.state.isDrawerOpened
    // });

    this.props.drawerOpenStateChange('afwfw');
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('>>>', prevProps.drawerOpenStateChange);
    if (prevProps.drawerOpenStateChange !== this.props.drawerOpenStateChange) {
      // Do whatever you want
      console.log('sheicvala blaid');




    }
  }




  render() {



    return (
      <Fragment>
        <GridHeader/>
        {this.props.clients.length > 0 ? <Grid data={this.props.clients} onDriverOpen={this.onDrawerToggle}/> : null}

        {this.props.drawerOpenState ? <h1>---{this.props.drawerOpenState}====</h1> : <h1>it's null</h1>}

        <h1> == {this.props.clients[0]} ===</h1>

        <Drawer anchor="right" open={this.props.drawerOpenState} onClose={this.onDrawerToggle}>
          <DrawerContent client={this.state.client}/>
        </Drawer>
      </Fragment>
    )
  }
}


// const mapStateToProps = null;
const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    clients: state.clients,
    drawerOpenState: state.drawerOpenState
  };
};

const mapDispatchToProps = {
  addAccount: addAccount,
  addClient: addClient,
  drawerOpenStateChange: drawerOpenStateChange
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Clients);
