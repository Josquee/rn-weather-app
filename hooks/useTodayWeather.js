import { useState, useEffect } from 'react'
import { formatDate } from '../utils/formatDate'

const useTodayWeather = weatherData => {
  const [weather, setWeather] = useState({})
  const today = formatDate()
  useEffect(() => {
    setWeather(weatherData?.consolidated_weather?.find(i => i.applicable_date === today))
  }, [today, weatherData?.consolidated_weather])
  return weather
}

export default useTodayWeather
