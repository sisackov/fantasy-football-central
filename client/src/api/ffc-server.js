import axios from 'axios';

const FFC_SERVER = axios.create({
    baseURL: 'http://fantasy-football-central.herokuapp.com/ffc/server',
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

export const postUser = async (user) => {
    const { data } = await FFC_SERVER.post('/users', user);
    console.log('postUser: ', data);
    return data;
};

export const patchUser = async (user) => {
    const { data } = await FFC_SERVER.patch(
        '/users/auth',
        user,
        getAuthHeader()
    );
    console.log('patchUser: ', data);
    return data;
};

export const deleteUser = async () => {
    const { data } = await FFC_SERVER.delete('/users/auth', getAuthHeader());
    console.log('deleteUser: ', data);
    return data;
};
