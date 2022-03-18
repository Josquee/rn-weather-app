import React from 'react'
import { View, StyleSheet } from 'react-native'

const ScreenLayout = ({ children }) => {
  return (
    <View style={styles.layout}>{children}</View>
  )
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50
  }
})

export default ScreenLayout
