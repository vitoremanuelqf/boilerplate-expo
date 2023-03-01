import { ReactNode } from 'react'

import { NativeBaseProvider } from 'native-base'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { LanguageContextProvider } from '@contexts/LanguageContext'

import { theme } from '@theme/index'

interface AppProviderProps {
  children?: ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <LanguageContextProvider>
      <SafeAreaProvider>
        <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>
      </SafeAreaProvider>
    </LanguageContextProvider>
  )
}
