import axios from 'axios';
import { LS_LEAGUE_AVG_KEY } from '../utils/constants';

const nodeEnv = process.env.NODE_ENV;
const serverPort = process.env.REACT_APP_SERVER_PORT || '5000';
const FFC_API = axios.create({
    baseURL:
        nodeEnv === 'development'
            ? `http://localhost:${serverPort}/api/v1`
            : 'https://fantasy-football-central.herokuapp.com/api/v1',
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

export const fetchAutoCompletePlayers = async (query) => {
    const { data } = await FFC_API.get(`/players/autocomplete?${query}`);
    console.log('getAutoCompletePlayers: ', data);
    return data;
};

export const fetchLeagueAvgData = async () => {
    const { data } = await FFC_API.get('/leagueAvg');
    console.log('getLeagueAvgData: ', data);
    localStorage.setItem(LS_LEAGUE_AVG_KEY, JSON.stringify(data));
    return data;
};

export const fetchLeagueAvgByPosition = async (position) => {
    const { data } = await FFC_API.get(`/leagueAvg/position/${position}`);
    console.log('getLeagueAvgByPosition: ', data);
    return data;
};
