import React, {Component, Fragment} from 'react';
import './Clients.scss';
import {jsonplaceholderInstance as axios} from '../../axios';



class Clients extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios.get('/users')
      .then(res => {
        console.log(res);
      })
  }

  render() {
    return (
      <Fragment>
        <h1>test</h1>
      </Fragment>
    )
  }

}

export default Clients;
