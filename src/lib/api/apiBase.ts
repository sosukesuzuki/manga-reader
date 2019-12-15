const BASE_URL = 'https://wfc2-image-api-259809.appspot.com/api';

export async function get(path: string) {
    const req = new Request(`${BASE_URL}${path}`);
    const res = await fetch(req, { method: 'GET' });
    const obj = await res.json();
    return { data: obj };
}
