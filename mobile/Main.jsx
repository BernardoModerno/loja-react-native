import React from 'react'
import { SafeAreaView, Text, View, Platform, StatusBar } from 'react-native';

const Main = () => {
  return (
    <View style={{ paddingVertical: Platform.OS === "android" ? StatusBar : 35 }} >
        <SafeAreaView>
            <Text>Main</Text>
        </SafeAreaView>
    </View>
  )
}

export default Main
