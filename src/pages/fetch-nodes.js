import React, { Component } from 'react';

import { graphqlService } from '../fetchgql/service'


class FetchNodes extends Component {
  state={
    nodes:null,
    links:null,
    error:null,
    loading:true
  }
  getNodes(){
    graphqlService.getNodesAndLinks()
    .then(data=>{
      console.log("data..." , data)
      this.setState({
        links: data.links,
        nodes: data.nodes
      })
    }).catch(err=>{
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
    if (this.state.nodes){
      contentHtml=<div><pre>{JSON.stringify(this.state.nodes,undefined,2)}</pre></div>
    }
    return (
      <div>
        <h1>Fetch nodes</h1>
        <section>
          { contentHtml }
        </section>
      </div>
    );
  }
  componentWillMount(){
    this.getNodes()
  }
}

export default FetchNodes;