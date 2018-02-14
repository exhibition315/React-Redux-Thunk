import { createSelector } from 'reselect';

const getLogin = (state) => state.mainReducer;

export const selectToken = createSelector(
    getLogin,
    (data) => data.get('token')
);

export const selectState = createSelector(
    getLogin,
    (data) => data.get('state')
);
