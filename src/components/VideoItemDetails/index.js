import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Cookies from 'js-cookie'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {CgPlayListAdd} from 'react-icons/cg'

import Header from '../Header'
import SidePanel from '../SidePanel'

import ThemeContext from '../../context/ThemeContext'

import {
  VIDEOITEMPAGE,
  VIDEOPLAYERWRAPPER,
  VIDEODATA,
  HORIZONTALLINE,
  CHANNELINFO,
  CHANNELDETAILS,
  SUBSCRIBERSCOUNT,
  DESCRIPTION,
  VIDEOTITLE,
  CHANNELNAME,
  VIDEOMETADATA,
  STATUSVIEW,
  STATUSTITLE,
  STATUSDESCRIPTION,
  STATUSIMAGE,
  RETRYBUTTON,
  LOADERCONTAINER,
  ACTIONBUTTON,
  ICONACTIONS,
  CHANNELPROFILE,
  VIDEOITEM,
  EMBEDDEDVIDEO,
} from './styledComponents'

const apiResponseConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  loading: 'LOADING',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    isLiked: false,
    isDisliked: false,
    videoDetails: {},
    responseStatus: apiResponseConstants.initial,
  }

  componentDidMount() {
    this.getVideosList()
  }

  likeVideo = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: prevState.isLiked ? prevState.isDisliked : false,
    }))
  }

  dislikeVideo = () => {
    this.setState(prevState => ({
      isDisliked: !prevState.isDisliked,
      isLiked: prevState.isDisliked ? prevState.isLiked : false,
    }))
  }

  getVideosList = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.setState({responseStatus: apiResponseConstants.loading})
    const url = `https://apis.ccbp.in/videos/${id}`
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
      const videoData = data.video_details
      const formattedData = {
        id: videoData.id,
        title: videoData.title,
        videoUrl: videoData.video_url,
        thumbnailUrl: videoData.thumbnail_url,
        channel: {
          name: videoData.channel.name,
          profileImageUrl: videoData.channel.profile_image_url,
          subscriberCount: videoData.channel.subscriber_count,
        },
        viewCount: videoData.view_count,
        publishedAt: videoData.published_at,
        description: videoData.description,
      }
      this.setState({
        videoDetails: formattedData,
        responseStatus: apiResponseConstants.success,
      })
    } else {
      this.setState({responseStatus: apiResponseConstants.failure})
    }
  }

  renderSuccessView = (isDarkTheme, savedVideos, saveVideo, unsaveVideo) => {
    const {videoDetails, isLiked, isDisliked} = this.state
    const {
      id,
      title,
      videoUrl,
      channel,
      viewCount,
      publishedAt,
      description,
    } = videoDetails
    const {name, profileImageUrl, subscriberCount} = channel
    const isSaved = savedVideos.some(video => video.id === id)

    return (
      <VIDEOPLAYERWRAPPER key={id}>
        <EMBEDDEDVIDEO url={videoUrl} width="100%" controls />
        <VIDEOTITLE isDarkTheme={isDarkTheme}>{title}</VIDEOTITLE>
        <VIDEODATA>
          <VIDEOMETADATA>
            {viewCount} views &bull; {publishedAt}
          </VIDEOMETADATA>
          <ICONACTIONS>
            <ACTIONBUTTON onClick={this.likeVideo} isActive={isLiked}>
              <AiOutlineLike />
              Like
            </ACTIONBUTTON>
            <ACTIONBUTTON onClick={this.dislikeVideo} isActive={isDisliked}>
              <AiOutlineDislike />
              Dislike
            </ACTIONBUTTON>
            <ACTIONBUTTON
              onClick={
                isSaved ? () => unsaveVideo(id) : () => saveVideo(videoDetails)
              }
              isActive={isSaved}
            >
              <CgPlayListAdd />
              {isSaved ? 'Saved' : 'Save'}
            </ACTIONBUTTON>
          </ICONACTIONS>
        </VIDEODATA>
        <HORIZONTALLINE />
        <CHANNELINFO>
          <CHANNELPROFILE src={profileImageUrl} alt="channel logo" />
          <CHANNELDETAILS>
            <CHANNELNAME isDarkTheme={isDarkTheme}>{name}</CHANNELNAME>
            <SUBSCRIBERSCOUNT>{subscriberCount} subscribers</SUBSCRIBERSCOUNT>
            <DESCRIPTION isDarkTheme={isDarkTheme}>{description}</DESCRIPTION>
          </CHANNELDETAILS>
        </CHANNELINFO>
      </VIDEOPLAYERWRAPPER>
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
      <RETRYBUTTON type="button" onClick={this.getVideosList}>
        Retry
      </RETRYBUTTON>
    </STATUSVIEW>
  )

  renderLoader = () => (
    <LOADERCONTAINER data-testid="loader">
      <Loader type="ThreeDots" color="#1e293b" height="50" width="50" />
    </LOADERCONTAINER>
  )

  renderVideoSection = (isDarkTheme, savedVideos, saveVideo, unsaveVideo) => {
    const {responseStatus} = this.state
    switch (responseStatus) {
      case apiResponseConstants.loading:
        return this.renderLoader()
      case apiResponseConstants.success:
        return this.renderSuccessView(
          isDarkTheme,
          savedVideos,
          saveVideo,
          unsaveVideo,
        )
      case apiResponseConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, savedVideos, saveVideo, unsaveVideo} = value

          return (
            <>
              <Header />
              <VIDEOITEMPAGE data-testid="videoItemDetails">
                <SidePanel />
                <VIDEOITEM isDarkTheme={isDarkTheme}>
                  {this.renderVideoSection(
                    isDarkTheme,
                    savedVideos,
                    saveVideo,
                    unsaveVideo,
                  )}
                </VIDEOITEM>
              </VIDEOITEMPAGE>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
