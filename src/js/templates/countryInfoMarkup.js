export default function createCountryInfoMarkup({capital, population, languages }) {
    const countryLanguages = Object.values(languages).join(', ');
    return `<ul>
            <li class='item'>
                <h3 class='item-title'>Capital:</h3>
                <p class='item-text'>${capital}</p>
            </li>
            <li class='item'>
                <h3 class='item-title'>Population:</h3>
                <p class='item-text'>${population}</p>
            </li>
            <li class='item'>
                <h3 class='item-title'>Languages:</h3>
                <p class='item-text'>${countryLanguages}</p>
            </li>
        </ul>`;
}