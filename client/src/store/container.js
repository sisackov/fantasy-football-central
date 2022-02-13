import { connect } from 'react-redux';
import { Component } from './component';

const mapStateToProps = (state) => {
    return {
        count: state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleIncrement: () => dispatch({ type: 'INCREMENT' }),
        handleDecrement: () => dispatch({ type: 'DECREMENT' }),
    };
};

export const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);
