import { createSelector } from 'reselect';

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector([selectUser], (user) => user);

export const selectLoading = createSelector([selectUser], (user) => user.loading);