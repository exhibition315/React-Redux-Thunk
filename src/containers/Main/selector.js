import { createSelector } from 'reselect';

const getLogin = (state) => state.mainReducer.login;

export const selectToken = createSelector(
    getLogin,
    (data) => data.token
);

export const selectState = createSelector(
    getLogin,
    (data) => data.state
);
