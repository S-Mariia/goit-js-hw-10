import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import createCountryMarkup from './js/templates/countryMarkup';
import createCountryInfoMarkup from './js/templates/countryInfoMarkup';
import createListOfCountriesMarkup from './js/templates/listOfCountriesMarkup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
var debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;
const refs = {
  input: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

refs.input.addEventListener('input', debounce(onInputSearch, DEBOUNCE_DELAY));

function onInputSearch(evt) {
  clearCountryList();
  clearCountryInfo();
  if (evt.target.value.trim() === '') {
    return;
  }
  fetchCountries(evt.target.value.trim())
    .then(createResponseMarkup)
    .then(renderResponse)
    .catch(showError);
}

function createResponseMarkup(listOfCountries) {
  if (listOfCountries.length > 10) {
    Notify.info('Too many matches found. Please enter a more specific name.');
    return {list: ''};
  }
  if (listOfCountries.length > 1) {
    return { list: createListOfCountriesMarkup(listOfCountries) };
  }
  return {
    list: createCountryMarkup(listOfCountries[0]),
    info: createCountryInfoMarkup(listOfCountries[0]),
  };
}

function renderResponse(obj) {
  const { list, info } = obj;
  refs.countryList.innerHTML = list;
  if (obj.hasOwnProperty('info')) {
    refs.countryInfo.innerHTML = info;
  }
}

function clearCountryList() {
  refs.countryList.innerHTML = '';
}

function clearCountryInfo() {
  refs.countryInfo.innerHTML = '';
}

function showError() {
  Notify.failure('Oops, there is no country with that name');
}
