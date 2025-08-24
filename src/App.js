import './App.css'

import {Component} from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'

import Login from './components/Login'

import Home from './components/Home'

import Trending from './components/Trending'

import Gaming from './components/Gaming'

import VideoItemDetails from './components/VideoItemDetails'

import NotFound from './components/NotFound'

import SavedVideos from './components/SavedVideos'

import ThemeContext from './context/ThemeContext'

import ProtectedRoute from './ProtectedRoute'

class App extends Component {
  state = {isDarkTheme: false, savedVideos: []}

  toggleTheme = () =>
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))

  saveVideo = videoDetails =>
    this.setState(prevState => ({
      savedVideos: [...prevState.savedVideos, videoDetails],
    }))

  unsaveVideo = id =>
    this.setState(prevState => ({
      savedVideos: prevState.savedVideos.filter(video => video.id !== id),
    }))

  render() {
    const {isDarkTheme, savedVideos} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.toggleTheme,
          savedVideos,
          saveVideo: this.saveVideo,
          unsaveVideo: this.unsaveVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
