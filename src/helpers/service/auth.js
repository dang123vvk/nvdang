
import { SERVER } from '../config';
import axios from 'axios';

export const signIn = async (data) => {
    return await axios.post(`${SERVER}/signin`, data)
}

export const signUp = async (data) => {
    return await axios.post(`${SERVER}/signup`, data)
}