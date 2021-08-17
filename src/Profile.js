import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card'
import './BestBooks.css';
import { withAuth0 } from '@auth0/auth0-react';

class Profile extends React.Component {
  render() {
    console.log('Profile:', this.props.auth0);
    const userInfo = this.props.auth0.user;
    return (
      <>
        <Jumbotron>
          <h1>User Profile</h1>
        </Jumbotron>
        <Card>
          <Card.Img src={userInfo.picture} />
          <Card.Title>{userInfo.name}</Card.Title>
          <Card.Text>Email: {userInfo.email}</Card.Text>
        </Card>
      </>
    );
  }
}

export default withAuth0(Profile);