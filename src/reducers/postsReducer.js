import _ from 'lodash';
import * as actionTypes from '../actions/actionTypes';

export default function(state = {}, action) {
    switch(action.type) {
        case actionTypes.FETCH_POSTS:
        /* The result comes in the form of an array with objects
           like so: [ post1, post2 ]
           We need to change it to a format in which we can easily access
           posts later on like so: { 4: post } */
        return _.mapKeys(action.payload.data, 'id');

        default:
            return state;
    }
}
