import React from 'react'
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'

export const BodyComponent = (props:any) => {

  const{height}=useWindowDimensions();

  return (
    <View style={{
        height: height*0.88,
        ...styles.container}}>
        {props.children}  
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'green',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingHorizontal:40,
        paddingTop:40
    }
})