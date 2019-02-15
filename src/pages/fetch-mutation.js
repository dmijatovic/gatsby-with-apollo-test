import React, { Component } from 'react';

import { graphqlService } from '../fetchgql/service'

class FetchMutation extends Component {
  //sample node
  state = {
    loading: false,
    error: null,
    node: {
      type: 'person',
      label: 'ST',
      name: 'From Gatsby custom fetch',
      //data is base64 encoded string
      //to keep data content flexible
      //and avoid GraphQL char escaping problem
      data: btoa(
        JSON.stringify({
          test: 'string',
          chap2: 'node thing'
        })
      )
    }
  }
  addNode=()=>{
    this.setState({
      loading:true
    })
    graphqlService.addNode(this.state.node)
    .then(({createNode}) => {
      debugger
      if (createNode){
        this.setState({
          node:{
            ...this.state.node,
            _id: createNode._id,
            _createdAt: createNode._createdAt
          }
        })
      }
    }).catch(err=>{
      debugger
      this.setState({
        error: err
      })
    })
  }
  render() {
    let contentHtml=""
    if (this.state.loading){
      contentHtml=<div>Loading...</div>
    }
    if (this.state.error){
      contentHtml=<div>Error...{this.state.error}</div>
    }
    if (this.state.node._id){
      contentHtml=<div>Node added...{this.state.node._id}</div>
    }
    return (
      <div>
        <h1>GraphQL mutation using fetch API</h1>
        <button onClick={this.addNode}>Add Node</button>
        {contentHtml}
      </div>
    );
  }
}

export default FetchMutation;