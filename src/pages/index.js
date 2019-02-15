import React from 'react';
import { graphql } from 'gatsby';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import JsonViewer from '../components/JsonViewer'
// This query is executed at build time by Gatsby.
export const GatsbyQuery = graphql`
  {
    rickAndMorty {
      character(id: 1) {
        name
        image
      }
    }
  }
`;

// This query is executed at run time by Apollo.
const APOLLO_QUERY = gql`
  {
    nodes{
      label
      name,
      _id
    }
  }
`;

export default ({
  data: {
    rickAndMorty: { character },
  },
}) => (
  <div style={{margin:'2rem'}}>
    <h1>Gatsby Apollo vs. using fetch API</h1>
    <section style={{display:'flex', paddingBottom:'1rem'}}>
      <img src={character.image} alt={character.name} style={{ width: 300 }} />
      <div style={{padding:'1rem'}}>
        <div>
          <h1>{character.name} With His Pupper</h1>
          <p>
            Rick & Morty API data loads at build time.
            The JSON below is pulled during runtime using Apollo.
            There is also a demo using fetch API to post graphQL queries to backend.
          </p>
        </div>
        <ul>
            <li><a href="/apollo-mutation">Mutation with Apollo front end lib</a></li>
            <li><a href="/fetch-mutation">Mutation with custom service using fetch API</a></li>
            <li><a href="/fetch-nodes">View nodes with custom service using fetch API</a></li>
        </ul>
      </div>
    </section>

    <Query query={APOLLO_QUERY}>
      {({ data, loading, error }) => {
        if (loading) return <p>Loading pupper...</p>;
        if (error) return <p>Error: ${error.message}</p>;

        return (<JsonViewer data={data} />)
      }}
    </Query>

  </div>
);
