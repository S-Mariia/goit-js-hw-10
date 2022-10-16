export default function createCountryMarkup({ name, flags }) {
    return `   
        <li class='wrap'>
        <img src="${flags.svg}" alt="flag of ${name.official}" width="35">
        <h2 class='country-name'>${name.official}</h2>
        </li>
`;
}