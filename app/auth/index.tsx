import { AuthPage } from '@pages'
import { redColor } from '@shared/cssConstants'
import { Stack } from 'expo-router'
import { StatusBar } from 'react-native'

export default function () {
  return (
    <>
      <Stack.Screen
        options={{
          title: '',
          headerStyle: { backgroundColor: `${redColor}` },
          headerShadowVisible: false,
          headerBackTitleVisible: false
        }}
      />
      <AuthPage />

      <StatusBar barStyle="light-content" />
    </>
  )
}
