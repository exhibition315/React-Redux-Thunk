import * as types from './actionTypes';

const initialState = {
    login: {
        token: 'NULL',
        state: 'FAIL'
    }
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return ({ ...state, login: { token: action.token, state: 'SUCCESS' } });
        case types.LOGIN_FAL:
            return ({ ...state, login: { token: '', state: 'FAIL' } });
        default:
            return state;
    }
};

export default authReducer;
