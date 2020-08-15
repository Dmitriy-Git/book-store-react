
//метод для создания хранилища
import { createStore, applyMiddleware } from 'redux';
//позволяет следить за всеми изменениями, которые происходят в хранилище
import logger from 'redux-logger';

import rootReducer from './reducers';

//Создаем хранилище
export default () => {
    const store = createStore(rootReducer, applyMiddleware(logger));
    return store;
};


//reducer
/*function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text])
    default:
      return state
  }
}

const store = createStore(todos, ['Use Redux'])


Отправка
store.dispatch({
  type: 'ADD_TODO',
  text: 'Read the docs'
});

*/

//console.log(store.getState())