import { combineReducers } from 'redux';
import books from './books';
import card from './card';
import filter from './filter';

export default combineReducers({
    //books: books
    //ES6
    books,
    card,
    filter
});