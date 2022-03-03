import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const EditScreen = ({route: {params}}) => {
    console.log(params)
  return (
    <View>
      <Text>EditScreen</Text>
    </View>
  )
}

export default EditScreen

const styles = StyleSheet.create({})