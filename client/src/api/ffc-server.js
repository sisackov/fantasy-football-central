import axios from 'axios';
import { LS_FAVORITES_KEY, LS_TOKEN_KEY } from '../utils/constants';
import { getBaseUrl } from '../utils/utils';

const FFC_SERVER = axios.create({
    baseURL: `${getBaseUrl()}/ffc/server`,
});

const getAuthHeader = () => {
    const token = localStorage.getItem('token');
    return {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
};

export const fetchUserById = async (id) => {
    const { data } = await FFC_SERVER.get(`/users/${id}`);
    console.log('getUserById: ', data);
    return data;
};

export const fetchUserWithAuth = async () => {
    const { data } = await FFC_SERVER.get('/users/auth', getAuthHeader());
    console.log('getUserWithAuth: ', data);
    return data;
};

export const createNewUser = async (user) => {
    const { data } = await FFC_SERVER.post('/users', user);
    console.log('createNewUser: ', data);
    return data;
};

export const updateUserDetails = async (user) => {
    const { data } = await FFC_SERVER.patch(
        '/users/auth',
        user,
        getAuthHeader()
    );
    console.log('updateUserDetails: ', data);
    return data;
};

export const loginUser = async (user) => {
    const { data } = await FFC_SERVER.post('/users/login', user);
    console.log('loginUser: ', data);
    if (data.token) {
        localStorage.setItem(LS_TOKEN_KEY, data.token);
        localStorage.setItem(
            LS_FAVORITES_KEY,
            JSON.stringify(data.user.favorites)
        );
    }
    return data;
};

export const logoutUser = async () => {
    const { data } = await FFC_SERVER.post(
        '/users/logout',
        {}, //no data needed but payload is the 2nd argument to the post request
        getAuthHeader()
    );
    console.log('logoutUser: ', data);
    return data;
};

export const logoutAllDevices = async () => {
    const { data } = await FFC_SERVER.post(
        '/users/logoutAll',
        {}, //no data needed but payload is the 2nd argument to the post request
        getAuthHeader()
    );
    console.log('logoutAllDevices: ', data);
    return data;
};

export const deleteUser = async () => {
    const { data } = await FFC_SERVER.delete('/users/auth', getAuthHeader());
    console.log('deleteUser: ', data);
    return data;
};

export const fetchUserFavorites = async () => {
    const route = `/users/favorites`;
    const { data } = await FFC_SERVER.get(route, getAuthHeader());
    console.log('fetchUserFavorites: ', data);
    return data;
};

export const updateUserFavorites = async (action, playerID) => {
    const route = `/users/favorites/${action}`;
    const { data } = await FFC_SERVER.patch(
        route,
        { playerID },
        getAuthHeader()
    );
    console.log('updateUserFavorites: ', data);
    return data;
};
