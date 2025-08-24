import {Component} from 'react'

import {HiFire} from 'react-icons/hi'

import Header from '../Header'

import SidePanel from '../SidePanel'

import ThemeContext from '../../context/ThemeContext'

import {
  SAVEDVIDEOSPAGE,
  SAVEDVIDEOSCONTENT,
  SAVEDVIDEOSHEADER,
  SAVEDVIDEOSIMG,
  SAVEDVIDEOSTITLE,
  VIDEOITEM,
  THUMBNAIL,
  VIDEOCONTAINER,
  VIDEODETAILS,
  VIDEOTITLE,
  CHANNELNAME,
  VIDEOMETADATA,
  STATUSVIEW,
  STATUSTITLE,
  STATUSDESCRIPTION,
  STATUSIMAGE,
  VIDEOLINK,
} from './styledComponents'

class SavedVideos extends Component {
  renderVideoDetails = (videoDetails, isDarkTheme) => {
    const {
      id,
      title,
      thumbnailUrl,
      channel,
      viewCount,
      publishedAt,
    } = videoDetails
    const {name} = channel
    return (
      <VIDEOLINK to={`videos/${id}`} key={id}>
        <VIDEOITEM>
          <THUMBNAIL src={thumbnailUrl} alt="video thumbnail" />
          <VIDEODETAILS>
            <VIDEOTITLE isDarkTheme={isDarkTheme}>{title}</VIDEOTITLE>
            <CHANNELNAME>{name}</CHANNELNAME>
            <VIDEOMETADATA>
              {viewCount} views &bull; {publishedAt}
            </VIDEOMETADATA>
          </VIDEODETAILS>
        </VIDEOITEM>
      </VIDEOLINK>
    )
  }

  renderSuccessView = (isDarkTheme, savedVideos) => (
    <VIDEOCONTAINER>
      {savedVideos.map(video => this.renderVideoDetails(video, isDarkTheme))}
    </VIDEOCONTAINER>
  )

  renderNoVideos = () => (
    <STATUSVIEW>
      <STATUSIMAGE
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
      />
      <STATUSTITLE>No Saved Videos Found</STATUSTITLE>
      <STATUSDESCRIPTION>
        You can save your videos while watching them
      </STATUSDESCRIPTION>
    </STATUSVIEW>
  )

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, savedVideos} = value
          const isEmpty = savedVideos.length === 0

          return (
            <>
              <Header />
              <SAVEDVIDEOSPAGE data-testid="savedVideos">
                <SidePanel />
                <SAVEDVIDEOSCONTENT isDarkTheme={isDarkTheme}>
                  {!isEmpty && (
                    <SAVEDVIDEOSHEADER isDarkTheme={isDarkTheme}>
                      <SAVEDVIDEOSIMG isDarkTheme={isDarkTheme}>
                        <HiFire />
                      </SAVEDVIDEOSIMG>
                      <SAVEDVIDEOSTITLE isDarkTheme={isDarkTheme}>
                        Saved Videos
                      </SAVEDVIDEOSTITLE>
                    </SAVEDVIDEOSHEADER>
                  )}
                  {isEmpty
                    ? this.renderNoVideos()
                    : this.renderSuccessView(isDarkTheme, savedVideos)}
                </SAVEDVIDEOSCONTENT>
              </SAVEDVIDEOSPAGE>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SavedVideos
