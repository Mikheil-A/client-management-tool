import React, {Component, Fragment} from 'react';
import './Clients.scss';
import {jsonServerInstance as axios} from '../../axios';



class Clients extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clients: []
    }
  }

  componentDidMount() {
    this.fetchClients();
  }


  fetchClients() {
    axios.get('/clients')
      .then(res => {
        this.setState({
          ...this.state,
          clients: res
        })
      })
  }

  render() {
    return (
      <Fragment>
        <h1>Clients component</h1>
      </Fragment>
    )
  }

}

export default Clients;
