import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const HOMEPAGE = styled.div`
  display: flex;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
`

export const HOMECONTENT = styled.div`
  width: 100%;
  background-color: #fff;
  min-height: 100vh;
  padding-top: 75px;
  padding-left: 16%;
  @media (max-width: 768px) {
    padding-left: 0px;
  }
  @media (min-width: 769px) and (max-width: 1200px) {
    padding-left: 20%;
  }
`

export const BANNER = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`

export const BANNERCONTENT = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const LOGO = styled.img`
  width: 150px;
`

export const BANNERTEXT = styled.p`
  font-size: 17px;
  color: #1e293b;
  line-height: 26px;
`

export const BANNERBUTTON = styled.button`
  background-color: transparent;
  border: 1px solid #1e293b;
  color: #1e293b;
  padding: 8px 16px;
  font-size: 12px;
  cursor: pointer;
  align-self: flex-start;
`

export const BANNERCLOSE = styled.button`
  background: transparent;
  border: none;
  font-size: 18px;
  color: #475569;
  cursor: pointer;
  align-self: flex-start;
`

export const VIDEOSECTION = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  padding: 20px;
`

export const SEARCHBAR = styled.div`
  display: flex;
  border: 1px solid ${props => (props.isDarkTheme ? '#434243' : '#cbd5e1')};
  border-radius: 4px;
  margin-bottom: 20px;
  width: 460px;
  @media (max-width: 567px) {
    width: 300px;
  }
`

export const SEARCHINPUT = styled.input`
  flex-grow: 1;
  border: none;
  outline: none;
  padding: 8px;
  font-size: 14px;
  background-color: transparent;
`

export const SEARCHBUTTON = styled.button`
  background-color: ${props => (props.isDarkTheme ? '#313031' : '#f1f5f9')};
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 16px;
  color: #909090;
`

export const VIDEOCONTAINER = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  padding: 0;
`

export const VIDEOLINK = styled(Link)`
  text-decoration: none;
`

export const VIDEOITEM = styled.li`
  display: flex;
  flex-direction: column;
`

export const THUMBNAIL = styled.img`
  width: 100%;
  border-radius: 6px;
`

export const VIDEODETAILSWRAPPER = styled.div`
  display: flex;
  margin-top: 10px;
`

export const CHANNELLOGO = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 12px;
`

export const VIDEODETAILS = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const VIDEOTITLE = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#1e293b')};
  margin: 0;
`

export const CHANNELNAME = styled.p`
  font-size: 12px;
  color: #64748b;
  margin: 4px 0 0 0;
`

export const VIDEOMETADATA = styled.p`
  font-size: 12px;
  color: #64748b;
  margin: 2px 0 0 0;
`
export const STATUSVIEW = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  text-align: center;
`

export const STATUSIMAGE = styled.img`
  width: 300px;
  max-width: 100%;
  margin-bottom: 24px;
`

export const STATUSTITLE = styled.h1`
  font-size: 20px;
  color: #1e293b;
  margin-bottom: 12px;
`

export const STATUSDESCRIPTION = styled.p`
  font-size: 14px;
  color: #475569;
  margin-bottom: 20px;
`

export const RETRYBUTTON = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
`
export const LOADERCONTAINER = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
`
