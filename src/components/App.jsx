
import React, { Component } from 'react';
import axios from 'axios';
import Menu from './Menu';
import BookCard from './BookCard';
import  { Container } from 'semantic-ui-react';
import { Card } from 'semantic-ui-react';
import Filter from '../containers/Filter';


class App extends Component {

  componentWillMount() {
    const { setBooks } = this.props;
    axios.get('/books.json')
    .then( res => {
      setBooks(res.data);
    });
  }

  render() {   
    const { books, isReady }  = this.props; 
    return <Container>
      <Menu />
      <Filter />
        <Card.Group itemsPerRow={4}>
        {!isReady ? 'Загрузка...': books.map(book => (
            <BookCard  key = {book.id} {...book} />
          ))
        }
        </Card.Group>
      </Container>
  }
}

/*const mapStateToProps = ({ books }) => ({
  books: books.items,
  isReady: books.isReady

})

const mapDispatchToProps = dispatch => ({
  setBooks:  books => dispatch(setBooks(books))
});

 
export default connect(mapStateToProps, mapDispatchToProps)(App);
*/

export default App;