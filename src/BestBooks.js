import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
//import { Button } from 'react-bootstrap';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import BookCarouselItem from './BookCarouselItem.js'
import Card from 'react-bootstrap/Card'

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookData: []
    }
  }
  componentDidMount = async () => {
    const { getIdTokenClaims } = this.props.auth0;
    let tokenClaims = await getIdTokenClaims();
    let jwt = tokenClaims.__raw;
    const config = {
      headers: { "Authorization": `Bearer ${jwt}` }
    }
    axios(`${process.env.REACT_APP_SERVER}/books`, config)
      .then(axiosResults => {
        console.log('SERVER RETURN!');
        console.log(axiosResults.data);
        this.setState({ bookData: axiosResults.data });
      })
      .catch(err => console.error(err));
  }
  render() {
    console.log(this.state)
    return (
      <>
        <Jumbotron>
          <h1>My Favorite Books</h1>
          <p>
            This is a collection of my favorite books
          </p>
        </Jumbotron>

        {(this.state.bookData.length > 0) ? <BookCarouselItem key={this.state.bookData._id} books={this.state.bookData} /> : <h2>No Books On Shelf</h2>}



      </>
    );
  }
}

export default withAuth0(MyFavoriteBooks);
