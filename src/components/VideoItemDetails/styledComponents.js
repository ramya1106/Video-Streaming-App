import styled from 'styled-components'

import ReactPlayer from 'react-player'

export const VIDEOITEMPAGE = styled.div`
  display: flex;
  font-family: 'Roboto';
`

export const VIDEOITEM = styled.div`
  width: 100%;
  padding-top: 75px;
  padding-left: 16%;
  background-color: ${props => (props.isDarkTheme ? '#0F0F0F' : '#F9F9F9')};
  min-height: 100vh;
  @media (max-width: 768px) {
    padding-left: 0px;
  }
  @media (min-width: 769px) and (max-width: 1200px) {
    padding-left: 20%;
  }
`

export const VIDEOPLAYERWRAPPER = styled.div`
  padding: 20px 40px;
  @media (max-width: 768px) {
    padding: 40px 0px;
  }
`

export const EMBEDDEDVIDEO = styled(ReactPlayer)`
  min-width: 100%;
  @media (min-width: 1200px) {
    min-height: 560px;
  }
`

export const VIDEOTITLE = styled.p`
  font-size: 18px;
  color: ${props => (props.isDarkTheme ? '#f8fafc' : '#1e293b')};
  margin-top: 18px;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`

export const VIDEODATA = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`

export const VIDEOMETADATA = styled.p`
  font-size: 14px;
  color: #64748b;
`

export const ICONACTIONS = styled.div`
  display: flex;
  gap: 16px;
`

export const ACTIONBUTTON = styled.button`
  background: none;
  border: none;
  color: ${props => (props.isActive ? '#2563eb' : '#64748b')};
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
`

export const ACTION = styled.p`
  font-size: 14px;
`

export const HORIZONTALLINE = styled.hr`
  width: 98%;
  border: 1px solid #ebebeb;
  margin: 15px 0;
`

export const CHANNELINFO = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  margin-top: 32px;
  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`

export const CHANNELDETAILS = styled.div`
  display: flex;
  flex-direction: column;
`

export const CHANNELPROFILE = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 24px;
`

export const CHANNELNAME = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#f8fafc' : '#1e293b')};
  margin: 0;
`

export const SUBSCRIBERSCOUNT = styled.p`
  font-size: 13px;
  color: #64748b;
  margin: 2px 0;
`

export const DESCRIPTION = styled.p`
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#f8fafc' : '#475569')};
  margin-top: 20px;
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
