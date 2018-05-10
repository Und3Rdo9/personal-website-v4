import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const GET_POST = gql`
query {
  Post(id:"cjh0yzii63p4s01117pxj9hi6") {
    title
    authors {
      name
    }
    dateAndTime
    postsummary
    tags
  }
}
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <main>
          <Query query={GET_POST}>
            {({ loading, error, data }) => {
              if (loading) return <div>Loading...</div>;
              if (error) return <div>Error :(</div>;

                return (
                  <article>
                    <h1>{data.Post.title}</h1>
                    <p>{`by ${data.Post.authors[0].name}`}</p>
                    <p>{data.Post.postsummary}</p>
                  </article>
                )
              }}
            </Query>
          </main>
        </div>
      );
    }
  }

  export default App;
