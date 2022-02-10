import { useEffect } from 'react';
import { fetchLeagueAvgData } from '../api/ffc-api';
import { fetchUserFavorites } from '../api/ffc-server';
import {
    LS_FAVORITES_KEY,
    LS_LEAGUE_AVG_KEY,
    LS_TOKEN_KEY,
} from '../utils/constants';

const { createContext, useContext, useState } = require('react');

const tokenProvider = createContext();
const tokenProviderUpdate = createContext();
export const useTokenProvider = () => {
    return [useContext(tokenProvider), useContext(tokenProviderUpdate)];
};

const favoritesProvider = createContext();
const favoritesProviderUpdate = createContext();
export const useFavoritesProvider = () => {
    return [useContext(favoritesProvider), useContext(favoritesProviderUpdate)];
};

const leagueAvgProvider = createContext();
const leagueAvgProviderUpdate = createContext();
export const useLeagueAvgProvider = () => {
    return [useContext(leagueAvgProvider), useContext(leagueAvgProviderUpdate)];
};

const lsToken = localStorage.getItem(LS_TOKEN_KEY);
// console.log('lsToken: ', lsToken);
// let lsFavs = localStorage.getItem(LS_FAVORITES_KEY);
// lsFavs = lsFavs ? JSON.parse(lsFavs) : [];
// let lsLgAvg = localStorage.getItem(LS_LEAGUE_AVG_KEY);
// lsLgAvg = lsLgAvg ? JSON.parse(lsLgAvg) : [];

export default function SessionProvider({ children }) {
    const [token, setToken] = useState(lsToken);
    const [favorites, setFavorites] = useState([]);
    const [leagueAvg, setLeagueAvg] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            console.log('fetching data in session provider');
            try {
                const fetchFavs = await fetchUserFavorites();
                setFavorites(fetchFavs);
                const fetchLgAvg = await fetchLeagueAvgData();
                setLeagueAvg(fetchLgAvg);
            } catch (e) {
                console.error(e.message);
            }
        };

        if (token) fetchData();
    }, [token]); //todo

    return (
        <tokenProvider.Provider value={token}>
            <tokenProviderUpdate.Provider value={setToken}>
                <favoritesProvider.Provider value={favorites}>
                    <favoritesProviderUpdate.Provider value={setFavorites}>
                        <leagueAvgProvider.Provider value={leagueAvg}>
                            <leagueAvgProviderUpdate.Provider
                                value={setLeagueAvg}
                            >
                                {children}
                            </leagueAvgProviderUpdate.Provider>
                        </leagueAvgProvider.Provider>
                    </favoritesProviderUpdate.Provider>
                </favoritesProvider.Provider>
            </tokenProviderUpdate.Provider>
        </tokenProvider.Provider>
    );
}
