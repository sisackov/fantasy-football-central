import { connect } from 'react-redux';
import { Component } from './component';

const mapStateToProps = (state) => {
    return {
        count: state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setToken: () => dispatch({ type: 'SET_TOKEN' }),
        clearToken: () => dispatch({ type: 'CLEAR_TOKEN' }),
    };
};

export const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);
