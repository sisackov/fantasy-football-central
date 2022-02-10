export const PATH_HOME = '/';
export const PATH_LOGIN = '/login';
export const PATH_SIGN_UP = '/signup';
export const PATH_LOGOUT = '/logout';
export const PATH_SEARCH = '/search';
export const PATH_FAVORITES = '/favorites';
export const PATH_API = '/api';
export const PATH_PLAYER = '/player/';
export const PATH_PLAYER_PARAM = '/player/:playerName';

export const LS_PLAYER_KEY = 'currentPlayer';
export const LS_FAVORITES_KEY = 'favoritesList';
export const LS_LEAGUE_AVG_KEY = 'leagueAvg';

export const QB_TABLE_HEADERS = [
    'Player',
    'Pass Yards',
    'Pass TDs',
    'Interceptions',
    'Fantasy Points',
];
export const TABLE_QUERIES = {
    QB: 'position=QB&limit=10&sort=avgFantasy&order=desc',
};
export const TABLE_TYPE_TOTAL = 'Total';
export const TABLE_TYPE_AVERAGE = 'Average';
export const POSITION_QB = 'QB';
export const POSITION_RB = 'RB';
export const POSITION_WR = 'WR';
export const POSITION_TE = 'TE';
export const POSITION_PK = 'PK';
export const POSITION_DEF = 'DEF';

export const POSITION_OPTIONS = {
    QB: {
        label: 'Quarterbacks',
        value: POSITION_QB,
    },
    RB: {
        label: 'Running Backs',
        value: POSITION_RB,
    },
    WR: {
        label: 'Wide Receivers',
        value: POSITION_WR,
    },
    TE: {
        label: 'Tight Ends',
        value: POSITION_TE,
    },
    PK: {
        label: 'Kickers',
        value: POSITION_PK,
    },
    DEF: {
        label: 'Defenses',
        value: POSITION_DEF,
    },
};

export const DROPDOWN_SIZE = 6;
