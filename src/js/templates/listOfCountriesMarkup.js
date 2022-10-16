export default function createListOfCountriesMarkup(list) {
  return list
    .map(
      ({ name, flags }) => `
    <li class='item'>
    <img src="${flags.svg}" alt="flag of ${name.official}" width="40">
       <p class='item-text'>${name.official}</p>
    </li>`
    )
    .join('');
}