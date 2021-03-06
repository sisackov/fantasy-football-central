export const getBaseUrl = () => {
    const nodeEnv = process.env.NODE_ENV || 'development';
    const serverPort = process.env.REACT_APP_SERVER_PORT || '5000';
    let baseURL;

    if (nodeEnv === 'production') {
        // baseURL = 'https://fantasy-football-central.herokuapp.com';
        baseURL = `${window.location.protocol}//${window.location.hostname}`;
    } else {
        //if (nodeEnv === 'aws') {
        baseURL = `${window.location.protocol}//${window.location.hostname}:${serverPort}`;
    }

    // console.log('NODE_ENV -> ', nodeEnv);
    // console.log('REACT_APP_SERVER_PORT -> ', serverPort);
    // console.log('BASE_URL', baseURL);
    // console.log('BASE_URL_WINDOW', `${window.location.protocol}//${window.location.hostname}`);
    return baseURL;
};

export const hashCode = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
};
