import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import Cookies from 'js-cookie'

import {IoClose} from 'react-icons/io5'

import {BsSearch} from 'react-icons/bs'

import Header from '../Header'

import SidePanel from '../SidePanel'

import ThemeContext from '../../context/ThemeContext'

import {
  HOMEPAGE,
  HOMECONTENT,
  BANNER,
  BANNERCONTENT,
  LOGO,
  BANNERTEXT,
  BANNERBUTTON,
  BANNERCLOSE,
  VIDEOSECTION,
  SEARCHBAR,
  SEARCHINPUT,
  SEARCHBUTTON,
  VIDEOCONTAINER,
  VIDEOITEM,
  THUMBNAIL,
  VIDEODETAILSWRAPPER,
  CHANNELLOGO,
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

class Home extends Component {
  state = {
    videosList: [],
    searchedText: '',
    search: '',
    showBanner: true,
    responseStatus: apiResponseConstants.initial,
  }

  componentDidMount() {
    this.getVideosList()
  }

  closeBanner = () => this.setState({showBanner: false})

  getVideosList = async () => {
    this.setState({responseStatus: apiResponseConstants.loading})
    const {searchedText} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${searchedText}`
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
      const formattedData = data.videos.map(item => ({
        id: item.id,
        title: item.title,
        thumbnailUrl: item.thumbnail_url,
        channel: {
          name: item.channel.name,
          profileImgUrl: item.channel.profile_image_url,
        },
        viewCount: item.view_count,
        publishedAt: item.published_at,
      }))

      this.setState({
        videosList: formattedData,
        responseStatus: apiResponseConstants.success,
      })
    } else {
      this.setState({responseStatus: apiResponseConstants.failure})
    }
  }

  onChangeSearch = event => this.setState({search: event.target.value})

  onSearch = () => {
    const {search} = this.state
    this.setState({searchedText: search}, this.getVideosList)
  }

  onRetry = () => this.getVideosList()

  renderVideoDetails = (videoDetails, isDarkTheme) => {
    const {
      id,
      title,
      thumbnailUrl,
      channel,
      viewCount,
      publishedAt,
    } = videoDetails
    return (
      <VIDEOLINK to={`videos/${id}`} key={id}>
        <VIDEOITEM>
          <THUMBNAIL src={thumbnailUrl} alt="video thumbnail" />
          <VIDEODETAILSWRAPPER>
            <CHANNELLOGO src={channel.profileImgUrl} alt="channel logo" />
            <VIDEODETAILS>
              <VIDEOTITLE isDarkTheme={isDarkTheme}>{title}</VIDEOTITLE>
              <CHANNELNAME>{channel.name}</CHANNELNAME>
              <VIDEOMETADATA>
                {viewCount} views &bull; {publishedAt}
              </VIDEOMETADATA>
            </VIDEODETAILS>
          </VIDEODETAILSWRAPPER>
        </VIDEOITEM>
      </VIDEOLINK>
    )
  }

  renderNoVideos = () => (
    <STATUSVIEW>
      <STATUSIMAGE
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <STATUSTITLE>No Search results found</STATUSTITLE>
      <STATUSDESCRIPTION>
        Try different key words or remove search filter
      </STATUSDESCRIPTION>
      <RETRYBUTTON type="button" onClick={this.onRetry}>
        Retry
      </RETRYBUTTON>
    </STATUSVIEW>
  )

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

  renderSuccessView = isDarkTheme => {
    const {videosList} = this.state
    if (videosList.length <= 0) {
      return this.renderNoVideos()
    }
    return (
      <VIDEOCONTAINER>
        {videosList.map(video => this.renderVideoDetails(video, isDarkTheme))}
      </VIDEOCONTAINER>
    )
  }

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
    const {search, showBanner} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <Header />
              <HOMEPAGE data-testid="home" isDarkTheme={isDarkTheme}>
                <SidePanel />
              </HOMEPAGE>
              <HOMECONTENT>
                {showBanner && (
                  <BANNER data-testid="banner">
                    <BANNERCONTENT>
                      <LOGO
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <BANNERTEXT>
                        Buy Nxt Watch Premium prepaid plans with <br /> UPI
                      </BANNERTEXT>
                      <BANNERBUTTON type="button">GET IT NOW</BANNERBUTTON>
                    </BANNERCONTENT>
                    <BANNERCLOSE
                      type="button"
                      data-testid="close"
                      onClick={this.closeBanner}
                    >
                      <IoClose />
                    </BANNERCLOSE>
                  </BANNER>
                )}
                <VIDEOSECTION isDarkTheme={isDarkTheme}>
                  <SEARCHBAR isDarkTheme={isDarkTheme}>
                    <SEARCHINPUT
                      type="search"
                      placeholder="Search"
                      onChange={this.onChangeSearch}
                      value={search}
                    />
                    <SEARCHBUTTON
                      isDarkTheme={isDarkTheme}
                      type="button"
                      data-testid="searchButton"
                      onClick={this.onSearch}
                    >
                      <BsSearch />
                    </SEARCHBUTTON>
                  </SEARCHBAR>
                  {this.renderVideoSection(isDarkTheme)}
                </VIDEOSECTION>
              </HOMECONTENT>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
