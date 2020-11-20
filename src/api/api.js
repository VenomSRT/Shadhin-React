const BASE_URL = 'http://43.240.103.34/api.shadhin/api/search?keyword=valo';

export async function getData() {
  const response = await fetch(BASE_URL);
  const data = response.json();
  return data;
}