import React, { useState } from 'react'
import { ImageBackground, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import { useQuery } from 'react-query'

import FadeInTop from '../components/FadeInTop'
import ScreenLayout from '../components/ScreenLayout'
import SearchInput from '../components/SearchInput'

import colors from '../config/colors'
import { fetchLocation, fetchWeather } from '../api/weather'
import useTodayWeather from '../hooks/useTodayWeather'

const Home = () => {
  const [location, setLocation] = useState('')
  const { data: id, refetch } = useQuery('locations', () => fetchLocation(location), { enabled: false })
  const cityId = id?.[0]?.woeid

  const { data: weatherInfo } = useQuery(['weather', cityId], () => fetchWeather(cityId), { enabled: !!cityId })

  const weatherToday = useTodayWeather(weatherInfo)

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground source={require('../assets/images/weather-bg.jpg')}
                       style={styles.backgroundImg}>
        <ScreenLayout>
          <View style={styles.weatherInfo}>
            {weatherToday &&
              <FadeInTop>
                <Text style={styles.title}>{weatherInfo?.title}</Text>
                <Text style={styles.subtitle}>{weatherToday?.weather_state_name}</Text>
                <Text style={styles.title}>{Math.round(weatherToday?.the_temp)}°C</Text>
              </FadeInTop>}
          </View>
          <SearchInput onPress={refetch} value={location} setValue={setLocation} />
        </ScreenLayout>
      </ImageBackground>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  backgroundImg: {
    flex: 1
  },
  weatherInfo: {
    paddingBottom: 30
  },
  title: {
    color: colors.white,
    fontSize: 40
  },
  subtitle: {
    color: colors.white,
    paddingVertical: 10,
    fontSize: 16
  }
})

export default Home
