import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const GAMINGPAGE = styled.div`
  display: flex;
  font-family: 'Roboto';
`

export const GAMINGCONTENT = styled.div`
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

export const GAMINGHEADER = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#F1F1F1')};
  width: 100%;
  padding: 20px 40px;
  display: flex;
  align-items: center;
  gap: 20px;
`

export const GAMINGIMG = styled.div`
  font-size: 26px;
  color: #ff0b37;
  background-color: ${props => (props.isDarkTheme ? '#0F0F0F' : '#E1E8F0')};
  padding: 20px;
  border-radius: 40px;
  display: flex;
  align-items: center;
  margin: 0px;
`

export const GAMINGTITLE = styled.h1`
  font-size: 24px;
  color: ${props => (props.isDarkTheme ? '#f8fafc' : '#231f20')};
`

export const VIDEOCONTAINER = styled.ul`
  list-style-type: none;
  gap: 16px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  padding: 30px 60px;
`

export const VIDEOLINK = styled(Link)`
  text-decoration: none;
`

export const VIDEOITEM = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const THUMBNAIL = styled.img`
  width: 100%;
  border-radius: 6px;
`

export const VIDEODETAILS = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 30px;
`

export const VIDEOTITLE = styled.p`
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#f8fafc' : '#1e293b')};
  margin: 0;
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
