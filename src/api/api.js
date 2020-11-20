//const BASE_URL = 'http://43.240.103.34/api.shadhin/api/search?keyword=valo';
const BASE_URL = 'https://github.com/VenomSRT/Shadhin-React/blob/develop/src/api/data.json';

export async function getData() {
  const response = await fetch(BASE_URL);
  const data = response.json();
  return data;
}