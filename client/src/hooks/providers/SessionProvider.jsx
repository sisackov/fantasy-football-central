import { LS_TOKEN_KEY } from '../../utils/constants';

const { createContext, useContext, useState } = require('react');

const tokenProvider = createContext();
const tokenProviderUpdate = createContext();
export const useTokenProvider = () => {
    return {
        token: useContext(tokenProvider),
        setToken: useContext(tokenProviderUpdate),
    };
};

const favoritesProvider = createContext();
const favoritesProviderUpdate = createContext();
export const useFavoritesProvider = () => {
    return {
        favorites: useContext(favoritesProvider),
        setFavorites: useContext(favoritesProviderUpdate),
    };
};

const leagueAvgProvider = createContext();
const leagueAvgProviderUpdate = createContext();
export const useLeagueAvgProvider = () => {
    return {
        leagueAvg: useContext(leagueAvgProvider),
        setLeagueAvg: useContext(leagueAvgProviderUpdate),
    };
};

const lsToken = localStorage.getItem(LS_TOKEN_KEY);

export default function SessionProvider({ children }) {
    const [token, setToken] = useState(lsToken);
    const [favorites, setFavorites] = useState([]);
    const [leagueAvg, setLeagueAvg] = useState([]);

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
