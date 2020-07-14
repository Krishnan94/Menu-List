import { COMMENTS } from '../shared/comment';
import * as ActionTypes from './ActionType';

export const Current_User = (state = '', action) => {
    switch (action.type) {
        case ActionTypes.Current_User_Login:
            console.log(action.payload.name);
            return state.concat(action.payload.name);
        default:
          return state;
      }
};