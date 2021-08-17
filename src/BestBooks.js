import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';

class MyFavoriteBooks extends React.Component {
  makeReq = async () => {
    const { getIdTokenClaims } = this.props.auth0;
    let tokenClaims = await getIdTokenClaims();
    let jwt = tokenClaims.__raw;
    const config = {
      headers: { "Authorization": `Bearer ${jwt}` }
    }
    axios(`${process.env.REACT_APP_SERVER}/test`, config)
      .then(axiosResults => {
        console.log('SERVER RETURN!');
        console.log(axiosResults.data);
      })
      .catch(err => console.error(err));
  }
  render() {
    return (
      <>
        <Jumbotron>
          <h1>My Favorite Books</h1>
          <p>
            This is a collection of my favorite books
          </p>
        </Jumbotron>
        <Button onClick={this.makeReq}>Make Server Request</Button>
      </>
    );
  }
}

export default withAuth0(MyFavoriteBooks);
