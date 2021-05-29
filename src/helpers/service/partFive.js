
import { SERVER } from '../config';
import axios from 'axios';
import { createAuthHeader } from './header';
import cookie from 'react-cookies';

export const getPartFives = async () => {
    var token = cookie.load("token");
    // return await axios.get(`${SERVER}/partfive`, createAuthHeader(token))
    return await axios.get(`${SERVER}/partfive`)
}
