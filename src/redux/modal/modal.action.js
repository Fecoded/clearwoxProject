import { TOGGLE_MODAL } from './modal.types';

export const toggleModalHidden = () => (dispatch) => {
  dispatch({ type: TOGGLE_MODAL });
};