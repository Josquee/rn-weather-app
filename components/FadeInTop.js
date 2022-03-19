import React, { useEffect, useRef } from 'react'
import { Animated, StyleSheet } from 'react-native'

const FadeInTop = ({ children }) => {
  const fade = useRef(new Animated.Value(0)).current
  const translate = useRef(new Animated.Value(-30)).current
  useEffect(() => {
    fade.setValue(0)
    translate.setValue(-30)
    Animated.parallel([
      Animated.timing(fade, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      }),
      Animated.timing(translate, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true
      })
    ]).start()
  }, [fade, translate])
  return (
    <Animated.View style={[styles.wrapper, { opacity: fade, translateY: translate }]}>
      {children}
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center'
  }
})

export default FadeInTop
