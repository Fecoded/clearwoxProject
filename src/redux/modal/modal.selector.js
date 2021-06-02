import { createSelector } from 'reselect';

const selectModal = (state) => state.modal;

export const selectToggleHidden = createSelector(
  [selectModal],
  (modal) => modal.hidden
);