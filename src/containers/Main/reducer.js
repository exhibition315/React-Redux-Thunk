import { fromJS } from 'immutable';
import * as types from './actionTypes';

const initialState = fromJS({
    token: 'NULL',
    state: 'FAIL'
});

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return state.merge({ token: action.token, state: 'SUCCESS' });
        case types.LOGIN_FAL:
            return state.merge({ token: 'NULL', state: 'FAIL' });
        default:
            return state;
    }
};

export default authReducer;
