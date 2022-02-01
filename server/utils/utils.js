exports.getFixedValue = (num) => {
    if (num % 1 === 0) {
        return num.toString();
    } else {
        return num.toFixed(2);
    }
};
