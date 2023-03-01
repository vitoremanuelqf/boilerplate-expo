import React from 'react'

import { AppProvider } from '@hooks/index'

import { Routes } from '@routes/index'

import { Loading } from '@components/Loading'

export default function App() {
  const fontsLoaded = false

  return <AppProvider>{fontsLoaded ? <Routes /> : <Loading />}</AppProvider>
}
