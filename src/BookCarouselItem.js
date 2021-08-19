import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BestBooks.css';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card'

class BookCarouselItem extends React.Component {

  render() {
    console.log('props:', this.props.books);
    return (
      <>
        <Carousel>
          {this.props.books.map(book => <Carousel.Item>
            <Card className="m-2">
              <Card.Title>{book.title}</Card.Title>
              <Card.Subtitle>{book.status}</Card.Subtitle>
              <Card.Text>{book.description}</Card.Text>
            </Card>
          </Carousel.Item>)}
        </Carousel>
      </>

      // <Carousel>
      //   {this.props.books.map(book => {
      //     <Carousel.Item>
      //       <h1>book.title</h1>
      //       <Card>
      //         <Card.Title>{book.title}</Card.Title>
      //         <Card.Text>{book.description}</Card.Text>
      //       </Card>
      //     </Carousel.Item>
      //   })}
      // </Carousel>
    )
  }
}
export default BookCarouselItem;