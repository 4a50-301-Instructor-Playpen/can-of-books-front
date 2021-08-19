import React from 'react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import Login from './Login';
import BestBooks from './BestBooks'
import { withAuth0 } from '@auth0/auth0-react';
import Profile from './Profile';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

class App extends React.Component {


  render() {
    console.log('app', this.props.auth0);
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Router>
          <IsLoadingAndError>
            <Header auth0={this.props.auth0} />
            <Switch>
              <Route exact path="/">
                {(isAuthenticated) ? <BestBooks /> : <Login />
                }
              </Route>
              <Route exact path="/profile">
                {(isAuthenticated) ? <Profile /> : <></>}

              </Route>
            </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
