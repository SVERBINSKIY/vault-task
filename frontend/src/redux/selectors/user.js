import {createSelector} from 'reselect';
import {get} from 'lodash';

const userState = (state) => get(state, 'user', {});

const selectCurrentUser = createSelector(userState, (state) => get(state, 'currentUser', {}));

export const selectAuthStatus = createSelector(
  userState,
  (user) => get(user, 'isAuth'),
);
export const selectUsername = createSelector(
  selectCurrentUser,
  (currentUser) => get(currentUser, 'username', ''),
);