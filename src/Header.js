import React from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css';
import Login from './Login';

class Header extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    console.log('Header:', this.props.auth0, isAuthenticated);
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        {(isAuthenticated) ? <LogoutButton /> : <LoginButton />}

      </Navbar>
    );
  }
}

export default Header;
