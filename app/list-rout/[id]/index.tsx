import { SinglePostPage } from '@pages'
import { blueColor } from '@shared/cssConstants'
import { Stack } from 'expo-router'
import { StatusBar } from 'react-native'

export default function () {
  return (
    <>
      <StatusBar barStyle="light-content" />

      <Stack.Screen
        options={{
          title: 'Список',
          headerStyle: { backgroundColor: `${blueColor}` },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '600'
          },
          headerShadowVisible: false,
          headerBackTitleVisible: false,
          headerTitleAlign: 'center'
        }}
      />

      <SinglePostPage />
    </>
  )
}
