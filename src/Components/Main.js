import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';

import Photowall from './Photowall';
import AddPhoto from './AddPhoto';
import Single from './Single';  

export default class Main extends Component {
  
  render() {
    return ( 
      <div>
        <h1><Link to='/'>PhotoWall</Link></h1>
        <Route exact path="/" render={() => (
          <div>
            <Photowall {...this.props} />
          </div>
        )} />
        <Route path ='/AddPhoto' render={() => (
          <AddPhoto {...this.props} />  
        )} />
        <Route path='/single/:id' render = {(params) => (
          <Single {...this.props} {...params} />
        )} />
      </div>
    )
  }
}
