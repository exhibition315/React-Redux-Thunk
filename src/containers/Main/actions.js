import * as types from './actionTypes';
import * as api from './api';

export const loginSuccess = (token) => {
    const action = {
        type: types.LOGIN_SUCCESS,
        token
    };
    return action;
};

export const loginFail = (error) => {
    const action = {
        type: types.LOGIN_FAL,
        error
    };
    return action;
};

export const login = (text) => {
    const action = async (dispatch) => {
        try {
            const token = await api.login(text);
            dispatch(loginSuccess(token));
        } catch (error) {
            console.log(`Login error: ${error.message}`);
            dispatch(loginFail(error.message));
        }
    };
    return action;
};
