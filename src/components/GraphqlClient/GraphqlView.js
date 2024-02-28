import React from 'react';
import GraphiQL from 'graphiql';
import { withStyles } from '@material-ui/core';
import fetch from 'isomorphic-fetch';
import env from '../../utils/env';

const BACKEND = env.REACT_APP_BACKEND_API;

const DEFAULT_QUERY = `# Welcome to GraphQL
#
# GraphQL is an in-browser tool for writing, validating, and
# testing GraphQL queries.
#
# Type queries into this side of the screen, and you will see intelligent
# typeaheads aware of the current GraphQL type schema and live syntax and
# validation errors highlighted within the text.
#
# GraphQL queries typically start with a "{" character. Lines that start
# with a # are ignored.
#
# An example GraphQL query might look like:
#
#     {
#       field(arg: "value") {
#         subField
#       }
#     }
#
# Keyboard shortcuts:
#
#   Prettify query:  Shift-Ctrl-P (or press the prettify button)
#
#  Merge fragments:  Shift-Ctrl-M (or press the merge button)
#
#        Run Query:  Ctrl-Enter (or press the play button)
#
#    Auto Complete:  Ctrl-Space (or just start typing)
#

`;

function graphQLFetcher(graphQLParams) {
  return fetch(BACKEND, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(graphQLParams),
  }).then((response) => response.json());
}

const GraphqlView = ({ classes }) => (
  <div className={classes.grapqhQlContainer}>
    <GraphiQL
      editorTheme="solarized light"
      fetcher={graphQLFetcher}
      defaultQuery={DEFAULT_QUERY}
    >
      <GraphiQL.Logo>GraphQL</GraphiQL.Logo>
    </GraphiQL>
  </div>
);

const styles = () => ({
  grapqhQlContainer: {
    height: '600px',
    marginTop: '2px',
  },
});

export default withStyles(styles)(GraphqlView);
