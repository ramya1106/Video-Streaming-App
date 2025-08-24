import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
  savedVideos: [],
  saveVideo: () => {},
  unsaveVideo: () => {},
})

export default ThemeContext
