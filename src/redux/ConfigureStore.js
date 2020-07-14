import React from 'react';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
import {Current_User} from './LoginUser'


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
       dishes:Dishes,
       comments:Comments,
       promotions:Promotions,
       leaders:Leaders,
       user:Current_User
    }),applyMiddleware(thunk,logger));

    return store;
}