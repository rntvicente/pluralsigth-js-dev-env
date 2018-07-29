import 'whatwg-fetch';
import { getBaseUrl } from './baseUrl';

const baseUrl = getBaseUrl();

const getUsers = () => {
  return get('users');
}

const deleteUser = (id) => { 
  return del(`users/${id}`)
};

function del(url) {
  const request = new Request(baseUrl + url, {
    method: 'DELETE'
  });

  return fetch(request).then(onSuccess, onError);
}

function get(url) {
  return fetch(baseUrl + url).then(onSuccess, onError);
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error); // eslint-disable-line no-console
}

module.exports = { getUsers, deleteUser };
