export const API = '0pIxCnk0AfvLOQAbyC7jQAVP6PxyGGub';


let location_id = sessionStorage.getItem('location_id')
let location_name = sessionStorage.getItem('location_name')


export const defaults = {
        id:location_id?location_id:215854,
        name:location_name?location_name:'Tel-Aviv'
}

export const URLS = {
        iconurl:'https://developer.accuweather.com/sites/default/files/',
        autocomplete: 'http://dataservice.accuweather.com/locations/v1/cities/autocomplete',
        currentcity: 'http://dataservice.accuweather.com/currentconditions/v1/',
        forecast:'http://dataservice.accuweather.com/forecasts/v1/daily/5day/',
        currentlocation:'http://dataservice.accuweather.com/locations/v1/cities/geoposition/search'
}

