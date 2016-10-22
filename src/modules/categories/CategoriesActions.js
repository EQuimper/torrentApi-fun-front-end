import axios from 'axios';
import settings from '../../../setting';

export const RECEIVE_CATEGORIE = 'RECEIVE_CATEGORIES';

export const fetchCategorie = name => {
  const promise = new Promise((resolve, reject) => {
    axios
      .get(`${settings.ROOT_URL}${name}`)
      .then(res => resolve(res.data))
      .catch(err => reject(err));
  });

  return {
    type: RECEIVE_CATEGORIE,
    payload: promise
  }
}
