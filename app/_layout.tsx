// import { SplashScreen, Stack } from 'expo-router'
// import {
//   useFonts,
//   Exo2_100Thin,
//   Exo2_200ExtraLight,
//   Exo2_300Light,
//   Exo2_400Regular,
//   Exo2_500Medium,
//   Exo2_600SemiBold,
//   Exo2_700Bold,
//   Exo2_800ExtraBold,
//   Exo2_900Black,
//   Exo2_100Thin_Italic,
//   Exo2_200ExtraLight_Italic,
//   Exo2_300Light_Italic,
//   Exo2_400Regular_Italic,
//   Exo2_500Medium_Italic,
//   Exo2_600SemiBold_Italic,
//   Exo2_700Bold_Italic,
//   Exo2_800ExtraBold_Italic,
//   Exo2_900Black_Italic
// } from '@expo-google-fonts/exo-2'
// import { useEffect } from 'react'
// import { FontAwesome } from '@expo/vector-icons'

// export default function RootLayout() {
//   // const [loaded, error] = useFonts({
//   //   SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
//   //   ...FontAwesome.font
//   // })

//   const [loaded, error] = useFonts({
//     Exo2_100Thin,
//     Exo2_200ExtraLight,
//     Exo2_300Light,
//     Exo2_400Regular,
//     Exo2_500Medium,
//     Exo2_600SemiBold,
//     Exo2_700Bold,
//     Exo2_800ExtraBold,
//     Exo2_900Black,
//     Exo2_100Thin_Italic,
//     Exo2_200ExtraLight_Italic,
//     Exo2_300Light_Italic,
//     Exo2_400Regular_Italic,
//     Exo2_500Medium_Italic,
//     Exo2_600SemiBold_Italic,
//     Exo2_700Bold_Italic,
//     Exo2_800ExtraBold_Italic,
//     Exo2_900Black_Italic
//   })

//   // Expo Router uses Error Boundaries to catch errors in the navigation tree.
//   useEffect(() => {
//     if (error) throw error
//   }, [error])

//   useEffect(() => {
//     if (loaded) {
//       SplashScreen.hideAsync()
//     }
//   }, [loaded])

//   if (!loaded) {
//     return null
//   }

//   return <RootLayoutNav />
// }

import { Stack } from 'expo-router'

function RootLayoutNav() {
  return (
    <Stack>
      <Stack.Screen name="/" options={{ headerShown: false }} />
      <Stack.Screen name="/list-rout/" options={{ headerShown: false }} />
      <Stack.Screen name="/list-rout/[id]" options={{ headerShown: false }} />
    </Stack>
  )
}
