/**
 * The Object.freeze() method is equivalent to final in Java.
 */

module.exports = Object.freeze({
    ROUTES_SERVER_PREFIX: '/ffc/server',
    ROUTES_API_PREFIX: '/api/v1',
    ESPN_TEAM_ROSTER_LINKS: [
        'buf/buffalo-bills',
        'mia/miami-dolphins',
        'ne/new-england-patriots',
        'nyj/new-york-jets',
        'bal/baltimore-ravens',
        'cin/cincinnati-bengals',
        'cle/cleveland-browns',
        'pit/pittsburgh-steelers',
        'hou/houston-texans',
        'ind/indianapolis-colts',
        'jax/jacksonville-jaguars',
        'ten/tennessee-titans',
        'den/denver-broncos',
        'kc/kansas-city-chiefs',
        'oak/oakland-raiders',
        'lac/los-angeles-chargers',
        'chi/chicago-bears',
        'det/detroit-lions',
        'gb/green-bay-packers',
        'min/minnesota-vikings',
        'dal/dallas-cowboys',
        'nyg/new-york-giants',
        'phi/philadelphia-eagles',
        'wsh/washington',
        'atl/atlanta-falcons',
        'car/carolina-panthers',
        'no/new-orleans-saints',
        'tb/tampa-bay-buccaneers',
        'ari/arizona-cardinals',
        'sf/san-francisco-49ers',
        'sea/seattle-seahawks',
        'lar/los-angeles-rams',
    ],
    PLAYER_DATA_TABLE_COLUMNS: [
        'imageLink',
        'name',
        'position',
        'age',
        'height',
        'weight',
        'experience',
        'college',
    ],
    FNFL_TEAM_IDS: [
        {
            team: 'Buffalo Bills',
            teamId: '100003',
        },
        {
            team: 'Miami Dolphins',
            teamId: '100019',
        },
        {
            team: 'New England Patriots',
            teamId: '100021',
        },
        {
            team: 'New York Jets',
            teamId: '100024',
        },
        {
            team: 'Baltimore Ravens',
            teamId: '100002',
        },
        {
            team: 'Cincinnati Bengals',
            teamId: '100006',
        },
        {
            team: 'Cleveland Browns',
            teamId: '100007',
        },
        {
            team: 'Pittsburgh Steelers',
            teamId: '100027',
        },
        {
            team: 'Houston Texans',
            teamId: '100013',
        },
        {
            team: 'Indianapolis Colts',
            teamId: '100014',
        },
        {
            team: 'Jacksonville Jaguars',
            teamId: '100015',
        },
        {
            team: 'Tennessee Titans',
            teamId: '100012',
        },
        {
            team: 'Denver Broncos',
            teamId: '100009',
        },
        {
            team: 'Kansas City Chiefs',
            teamId: '100016',
        },
        {
            team: 'Oakland Raiders',
            teamId: '100018',
        },
        {
            team: 'Los Angeles Chargers',
            teamId: '100028',
        },
        {
            team: 'Chicago Bears',
            teamId: '100005',
        },
        {
            team: 'Detroit Lions',
            teamId: '100010',
        },
        {
            team: 'Green Bay Packers',
            teamId: '100011',
        },
        {
            team: 'Minnesota Vikings',
            teamId: '100020',
        },
        {
            team: 'Dallas Cowboys',
            teamId: '100008',
        },
        {
            team: 'New York Giants',
            teamId: '100023',
        },
        {
            team: 'Philadelphia Eagles',
            teamId: '100025',
        },
        {
            team: 'Washington',
            teamId: '100032',
        },
        {
            team: 'Atlanta Falcons',
            teamId: '100001',
        },
        {
            team: 'Carolina Panthers',
            teamId: '100004',
        },
        {
            team: 'New Orleans Saints',
            teamId: '100022',
        },
        {
            team: 'Tampa Bay Buccaneers',
            teamId: '100031',
        },
        {
            team: 'Arizona Cardinals',
            teamId: '100026',
        },
        {
            team: 'San Francisco 49ers',
            teamId: '100029',
        },
        {
            team: 'Seattle Seahawks',
            teamId: '100030',
        },
        {
            team: 'Los Angeles Rams',
            teamId: '100017',
        },
    ],
    DEFENSE_TABLE_COLUMNS: [
        'week',
        'opponent',
        'result',
        'sacks',
        'interceptions',
        'fumbleRecoveries',
        'safeties',
        'defensiveTouchdowns',
        'defensive2PtReturns',
        'returnedTouchdowns',
        'pointsAllowed',
        'fantasyScore',
    ],
});
