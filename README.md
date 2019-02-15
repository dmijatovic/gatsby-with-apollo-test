# Gatsby GraphQL queries with Apollo and using custom service with fetch API

This demo is based on the [original demo of Jason Lengstorf](https://github.com/jlengstorf/gatsby-with-apollo)
showing 2 ways (static and dynamic) to pull data using GraphQL.

Default GraphQL setup in Gatsby uses GraphQL queries during build time.
To pull data dynamically during the runtime in the React components we can use Apollo.

I was also interested in pulling data dynamically using custom service that only uses fetch API. The fetch API approach could be beneficial in specific situtation when you want to avoid depenendencies on additional libraries.

In this demo we cover all 3 ways of pulling data using GraphQL. Basic static way (during the build time) which is default to Gatsby and 2 dynamic queries with Apollo or using fetch API.

To start run `npm start` or `gatsby develop`.
