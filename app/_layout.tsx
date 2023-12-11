export default function RootLayout() {
  return <RootLayoutNav />
}

import { Stack } from 'expo-router'

function RootLayoutNav() {
  return (
    <Stack>
      <Stack.Screen name="/" options={{ headerShown: false }} />
      <Stack.Screen name="/auth/" options={{ headerShown: false }} />
      <Stack.Screen name="/list-rout/" options={{ headerShown: false }} />
      <Stack.Screen name="/list-rout/[id]/" options={{ headerShown: false }} />
    </Stack>
  )
}
