import React, {Component, Fragment} from 'react';
import './Clients.scss';
import {jsonServerInstance as axios} from '../../axios';
import {connect} from "react-redux";
import {addClient} from "../../redux/actions/actions";
import Grid from "../../components/Grid/Grid";
import GridHeader from "../../components/GridHeader/GridHeader";
import Drawer from '@material-ui/core/Drawer';
import DrawerContent from "../../components/DrawerContent/DrawerContent";


class Clients extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDrawerOpened: false,
      clients: [],
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
        this.storeClientsToReduxStore(res);
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
    this.setState({
      ...this.state,
      client: clickedRow,
      isDrawerOpened: !this.state.isDrawerOpened
    });
  };


  render() {
    return (
      <Fragment>
        <GridHeader/>
        {this.props.clients.length > 0 ? <Grid data={this.props.clients} onDriverOpen={this.onDrawerToggle}/> : null}

        <Drawer anchor="right" open={this.state.isDrawerOpened} onClose={this.onDrawerToggle}>
          <DrawerContent client={this.state.client}/>
        </Drawer>
      </Fragment>
    )
  }
}


// const mapStateToProps = null;
const mapStateToProps = state => {
  return {
    clients: state.clients
  };
};

const mapDispatchToProps = {
  addClient: addClient
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Clients);
