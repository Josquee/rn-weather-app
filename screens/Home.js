import React, { useRef, useState } from 'react'
import { Animated, ImageBackground, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import { useQuery } from 'react-query'

import ScreenLayout from '../components/ScreenLayout'
import SearchInput from '../components/SearchInput'

import colors from '../config/colors'
import { fetchLocation, fetchWeather } from '../api/weather'
import useTodayWeather from '../hooks/useTodayWeather'
import fadeInTop from '../utils/fadeInTop'

const Home = () => {
  const [location, setLocation] = useState('')
  const fade = useRef(new Animated.Value(0)).current
  const transformAnim = useRef(new Animated.Value(-30)).current
  const { data: id, refetch } = useQuery('locations', () => fetchLocation(location), { enabled: false })
  const cityId = id?.[0]?.woeid

  const { data: weatherInfo } = useQuery(['weather', cityId], async () => {
    const data = await fetchWeather(cityId)
    fadeInTop(fade, transformAnim)
    return data
  }, { enabled: !!cityId })

  const weatherToday = useTodayWeather(weatherInfo)

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground source={require('../assets/images/weather-bg.jpg')}
                       style={styles.backgroundImg}>
        <ScreenLayout>
          <View style={styles.weatherInfo}>
            {weatherToday &&
              <Animated.View style={[{ alignItems: 'center' }, { opacity: fade, translateY: transformAnim }]}>
                <Text style={styles.title}>{weatherInfo?.title}</Text>
                <Text style={styles.subtitle}>{weatherToday?.weather_state_name}</Text>
                <Text style={styles.title}>{Math.round(weatherToday?.the_temp)}°C</Text>
              </Animated.View>}
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
