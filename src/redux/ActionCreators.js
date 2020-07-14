import * as ActionTypes from './ActionType';

import { DISHES } from '../shared/dishes';
import {PROMOTIONS} from '../shared/promotion';
import  { LEADERS } from '../shared/leaders'; 

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});
export const currentUser = (username) => ({
    type: ActionTypes.Current_User_Login,
    payload: {
        name:username
    }
});

export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading(true));

    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});

export const fetchPromos = () => (dispatch) => {

    dispatch(PromosLoading(true));

    setTimeout(() => {
        dispatch(addPromos(PROMOTIONS));
    }, 2000);
}

export const PromosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const PromosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promotions) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promotions
});

export const fetchLeader = () => (dispatch) => {

    dispatch(leadersLoading(true));

    setTimeout(() => {
        dispatch(addLeaders(LEADERS));
    }, 2000);
}

export const leadersLoading = () => ({
    type: ActionTypes.LEADERS_LOADING
});

export const leadersFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addLeaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
});