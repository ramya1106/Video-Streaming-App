import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import Cookies from 'js-cookie'

import {HiFire} from 'react-icons/hi'

import Header from '../Header'

import SidePanel from '../SidePanel'

import ThemeContext from '../../context/ThemeContext'

import {
  TRENDINGPAGE,
  TRENDINGCONTENT,
  TRENDINGHEADER,
  TRENDINGIMG,
  TRENDINGTITLE,
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
  RETRYBUTTON,
  LOADERCONTAINER,
  VIDEOLINK,
} from './styledComponents'

const apiResponseConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  loading: 'LOADING',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {videosList: [], responseStatus: apiResponseConstants.initial}

  componentDidMount() {
    this.getVideosList()
  }

  getVideosList = async () => {
    this.setState({responseStatus: apiResponseConstants.loading})
    const url = 'https://apis.ccbp.in/videos/trending'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const formattedData = data.videos.map(video => ({
        id: video.id,
        title: video.title,
        thumbnailUrl: video.thumbnail_url,
        channel: {
          name: video.channel.name,
          profileImageUrl: video.channel.profile_image_url,
        },
        viewCount: video.view_count,
        publishedAt: video.published_at,
      }))
      this.setState({
        videosList: formattedData,
        responseStatus: apiResponseConstants.success,
      })
    } else {
      this.setState({responseStatus: apiResponseConstants.failure})
    }
  }

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

  renderSuccessView = isDarkTheme => {
    const {videosList} = this.state
    return (
      <VIDEOCONTAINER>
        {videosList.map(video => this.renderVideoDetails(video, isDarkTheme))}
      </VIDEOCONTAINER>
    )
  }

  renderFailureView = () => (
    <STATUSVIEW>
      <STATUSIMAGE
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <STATUSTITLE>Oops! Something Went Wrong</STATUSTITLE>
      <STATUSDESCRIPTION>
        We are having some trouble to complete your request. <br /> Please try
        again.
      </STATUSDESCRIPTION>
      <RETRYBUTTON type="button" onClick={this.onRetry}>
        Retry
      </RETRYBUTTON>
    </STATUSVIEW>
  )

  renderLoader = () => (
    <LOADERCONTAINER data-testid="loader">
      <Loader type="ThreeDots" color="#1e293b" height="50" width="50" />
    </LOADERCONTAINER>
  )

  renderVideoSection = isDarkTheme => {
    const {responseStatus} = this.state
    switch (responseStatus) {
      case apiResponseConstants.loading:
        return this.renderLoader()
      case apiResponseConstants.success:
        return this.renderSuccessView(isDarkTheme)
      case apiResponseConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const {responseStatus} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <Header />
              <TRENDINGPAGE data-testid="trending">
                <SidePanel />
                <TRENDINGCONTENT isDarkTheme={isDarkTheme}>
                  {!responseStatus.failure && (
                    <TRENDINGHEADER isDarkTheme={isDarkTheme}>
                      <TRENDINGIMG isDarkTheme={isDarkTheme}>
                        <HiFire />
                      </TRENDINGIMG>
                      <TRENDINGTITLE isDarkTheme={isDarkTheme}>
                        Trending
                      </TRENDINGTITLE>
                    </TRENDINGHEADER>
                  )}
                  {this.renderVideoSection(isDarkTheme)}
                </TRENDINGCONTENT>
              </TRENDINGPAGE>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
