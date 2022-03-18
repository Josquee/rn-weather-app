export const fetchLocation = params => {
  return fetch(`https://www.metaweather.com/api/location/search/?query=${params}`)
    .then(res => res.json())
    .catch(() => console.log('error'))
}

export const fetchWeather = params => {
  return fetch(`https://www.metaweather.com/api/location/${params}`)
    .then(res => res.json())
    .catch(() => console.log('error'))
}
