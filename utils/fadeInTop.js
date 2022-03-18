import { Animated } from 'react-native'

const fadeInTop = (fade, translate) => {
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
}

export default fadeInTop
