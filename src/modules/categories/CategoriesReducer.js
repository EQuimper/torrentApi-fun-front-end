import {
  RECEIVE_CATEGORIE
} from './CategoriesActions';

const INITIAL_STATE = {
  categorie: [],
  isFetched: false,
  err: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case `${RECEIVE_CATEGORIE}_PENDING`:
      return {};
    case `${RECEIVE_CATEGORIE}_FULFILLED`:
      return {
        categorie: action.payload,
        isFetched: true,
        err: null
      };
    case `${RECEIVE_CATEGORIE}_REJECT`:
      return {
        categorie: null,
        isFetched: true,
        err: action.payload
      };
    default:
      return state;
  }
};
