import axios from 'axios';
import * as actionTypes from 'actionTypes';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=vdhbsjcdvshbdjs';

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: actionTypes.FETCH_POSTS,
        payload: request
    };
}
