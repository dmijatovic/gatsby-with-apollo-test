export const queryNodesAndLinks = {
  query: `{
    nodes{
      _id
      name
    }
    links{
      _id
      source
      target
    }
  }`
}
/**
 * AddNode GraphQL query string
 * @param {Object} node
 * @param {String} node.type node type person,product,organisation
 * @param {String} node.label short label
 * @param {String} node.name node name
 * @param {Object} node.data all other data
 */
export function queryAddNode(node) {
  debugger
  //let str = JSON.stringify(node.data)
  return {
    query: `mutation{
      createNode(node:{
        type:"${node.type}",
        label:"${node.label}",
        name:"${node.name}",
        data:"${node.data}"
      }){
          _id
          _createdAt
      }
    }
    `
  }
}
