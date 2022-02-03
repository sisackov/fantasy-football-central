import axios from 'axios';

const nodeEnv = process.env.NODE_ENV;
const port = process.env.PORT;
const FFC_API = axios.create({
    baseURL:
        nodeEnv === 'development'
            ? `http://localhost:${port}/api/v1`
            : 'http://fantasy-football-central.herokuapp.com/api/v1',
});

export const fetchPlayerById = async (id) => {
    const { data } = await FFC_API.get(`/players/${id}`);
    console.log('getPlayerById: ', data);
    return data;
};

export const fetchQueriedPlayers = async (query) => {
    const { data } = await FFC_API.get(`/players/query?${query}`);
    console.log('getQueriedPlayers: ', data);
    return data;
};
