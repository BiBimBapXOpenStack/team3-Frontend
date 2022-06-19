import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER
} from './types';
import setAuthorizationToken from "../router/setAuthorizationToken";

export function loginUser(dataToSubmit) {
    const request = axios.post('http://localhost:8000/users/login', dataToSubmit )
        .then(response => response.data)

    return {
        type: LOGIN_USER,
        payload: request
    }
}

export function registerUser(dataToSubmit) {
    const request = axios.post('http://localhost:8000/users/register', dataToSubmit )
        .then(response => response.data)

    return {
        type: REGISTER_USER,
        payload: request
    }
}