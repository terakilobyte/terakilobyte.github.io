import { combineReducers }    from 'redux';
import { routeReducer }       from 'redux-simple-router';
import counter                from './counter';
import tictactoe from './tictactoe';

export default combineReducers({
  counter,
  tictactoe,
  routing: routeReducer
});
