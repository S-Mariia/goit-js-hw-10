const BASE_URL = 'https://restcountries.com';
const ENDPOINT = 'v3.1/name';
const searchParams = new URLSearchParams({fields: 'name,capital,population,flags,languages'});

export function fetchCountries(name) {
    return fetch(`${BASE_URL}/${ENDPOINT}/${name}?${searchParams}`).then(response => {
        if(!response.ok) {
            throw new Error();
        }
        return response.json();
    });
}
