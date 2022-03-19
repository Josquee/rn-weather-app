import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

import colors from '../config/colors'

const SearchInput = ({ value, setValue, onPress }) => {
  return (
    <TextInput style={styles.input}
               placeholder="Search any city"
               placeholderTextColor={colors.white}
               autoCorrect={false}
               onChangeText={setValue}
               value={value}
               onSubmitEditing={onPress} />
  )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.darkGray,
    color: colors.white,
    width: '100%',
    borderRadius: 8,
    padding: 8
  }
})

export default SearchInput
