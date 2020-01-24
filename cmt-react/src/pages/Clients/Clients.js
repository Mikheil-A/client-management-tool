import React, {Component, Fragment} from 'react';
import './Clients.scss';
import {jsonServerInstance as axios} from '../../axios';
import {connect} from "react-redux";
import {addClient} from "../../redux/actions/actions";



class Clients extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clients: []
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


  render() {
    return (
      <Fragment>
        <h1>Clients component</h1>
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
