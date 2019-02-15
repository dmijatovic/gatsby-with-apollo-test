import React, { Component } from 'react';

import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const addNode = gql`
  mutation{
    createNode(node:{type:"person",label:"RM",name:"From Gatsby now!!!", data:""}){
      _id
      _createdAt
    }
  }
`

class ApolloMutation extends Component {
  vars = {type:"person",label:"RM",name:"From Gatsby with Apollo!", data:""}
  addNodeToDB = createNode => {
    // debugger
    // console.log("Add node function...", createNode)
    createNode({variables:this.vars})
  }
  render() {
    return (
      <div>
        <h1>Appolo mutation from Gatsby</h1>
        <Mutation mutation={addNode}>
        {(createNode,{loading, error,data})=>{
          // debugger
          return (<div>
            <button onClick={this.addNodeToDB.bind(this,createNode)}>Add node</button>
            {loading && <p>Loading...</p>}
            {error && <p>Error :( Please try again</p>}
            {data && data.createNode && <div>New node added: {data.createNode._id}</div>}
          </div>)
        }}
        </Mutation>
      </div>
    );
  }
}

export default ApolloMutation;