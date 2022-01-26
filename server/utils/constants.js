const ROUTES_PREFIX = '/api/v1';

const ESPN_TEAM_ROSTER_LINKS = [
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
];

const PLAYER_DATA_TABLE_COLUMNS = [
    'imageLink',
    'name',
    'position',
    'age',
    'height',
    'weight',
    'experience',
    'college',
];

module.exports = {
    ROUTES_PREFIX,
    ESPN_TEAM_ROSTER_LINKS,
    PLAYER_DATA_TABLE_COLUMNS,
};
