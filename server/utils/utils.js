const fs = require('fs');
const JSON_FILE_PATH = 'server/utils/state.json';

exports.saveState = (state) => {
    const dataJSON = JSON.stringify(state);
    fs.writeFileSync(JSON_FILE_PATH, dataJSON);
};

exports.loadState = () => {
    try {
        const dataBuffer = fs.readFileSync(JSON_FILE_PATH);
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        console.error('Failed to load state from file', e.message);
    }
    return {};
};

exports.getFixedValue = (num) => {
    if (num % 1 === 0) {
        return num.toString();
    } else {
        return num.toFixed(2);
    }
};
