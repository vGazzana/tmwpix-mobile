import {API_URL} from '@env';

export function POST_LOGIN(token) {
  return {
    url: API_URL + '/login',
    method: 'POST',
    body: JSON.stringify(token),
    headers: {
      'Content-Type': 'application/json',
    },
  };
}
