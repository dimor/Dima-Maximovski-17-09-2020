export const API = 'kYnA9UxrrwysLX6ek68bp6JkndzajOG6';


let location_id = sessionStorage.getItem('location_id')
let location_name = sessionStorage.getItem('location_name')


export const defaults = {
        id:location_id?location_id:215854,
        name:location_name?location_name:'Tel-Aviv'
}

export const URLS = {
        iconurl:'https://developer.accuweather.com/sites/default/files/',
        autocomplete: 'https://dataservice.accuweather.com/locations/v1/cities/autocomplete',
        currentcity: 'https://dataservice.accuweather.com/currentconditions/v1/',
        forecast:'https://dataservice.accuweather.com/forecasts/v1/daily/5day/',
        currentlocation:'https://dataservice.accuweather.com/locations/v1/cities/geoposition/search'
}

