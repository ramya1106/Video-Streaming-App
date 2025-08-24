import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const SAVEDVIDEOSPAGE = styled.div`
  display: flex;
  font-family: 'Roboto';
`

export const SAVEDVIDEOSCONTENT = styled.div`
  width: 100%;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f  ' : '#f9f9f9')};
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

export const SAVEDVIDEOSHEADER = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#F1F1F1')};
  width: 100%;
  padding: 20px 40px;
  display: flex;
  align-items: center;
  gap: 20px;
`

export const SAVEDVIDEOSIMG = styled.div`
  font-size: 26px;
  color: #ff0b37;
  background-color: ${props => (props.isDarkTheme ? '#0F0F0F' : '#E1E8F0')};
  padding: 20px;
  border-radius: 40px;
  display: flex;
  align-items: center;
  margin: 0px;
`

export const SAVEDVIDEOSTITLE = styled.h1`
  font-size: 24px;
  color: ${props => (props.isDarkTheme ? '#f8fafc' : '#231f20')};
`

export const VIDEOCONTAINER = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px 60px;
`

export const VIDEOLINK = styled(Link)`
  text-decoration: none;
`

export const VIDEOITEM = styled.li`
  width: 100%;
  display: flex;
  gap: 10px;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`

export const THUMBNAIL = styled.img`
  width: 36%;
  border-radius: 6px;
  @media (max-width: 576px) {
    width: 100%;
  }
`

export const VIDEODETAILS = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`

export const VIDEOTITLE = styled.p`
  font-size: 18px;
  color: ${props => (props.isDarkTheme ? '#f8fafc' : '#1e293b')};
  margin: 0;
`

export const CHANNELNAME = styled.p`
  font-size: 13px;
  color: #64748b;
  margin: 4px 0 0 0;
`

export const VIDEOMETADATA = styled.p`
  font-size: 13px;
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
  height: 90vh;
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
