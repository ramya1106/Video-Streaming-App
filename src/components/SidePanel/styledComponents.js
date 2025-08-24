import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const SIDEPANEL = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#fff')};
  width: 16%;
  height: calc(100vh - 75px);
  font-family: 'Roboto';
  position: fixed;
  top: 75px;
  @media (max-width: 768px) {
    display: none;
  }
  @media (min-width: 769px) and (max-width: 1200px) {
    width: 20%;
  }
`

export const NAVLIST = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const NAVLINK = styled(Link)`
  text-decoration: none;
`

export const NAVITEM = styled.div`
  background-color: ${props => {
    if (props.isActive) {
      return props.isDarkTheme ? '#383838' : '#F1F5F9'
    }
    return 'transparent'
  }};
  padding: 8px 20px;
  margin: 0px;
  display: flex;
  align-items: center;
  gap: 20px;
`

export const NAVICON = styled.div`
  font-size: 18px;
  color: ${props => {
    if (props.isActive) {
      return '#ff0b37'
    }
    return props.isDarkTheme ? '#928E8F' : '#616e7c'
  }};
  margin: 0px;
  display: flex;
  align-items: center;
`

export const NAVTEXT = styled.p`
  font-size: 14px;
  color: ${props => {
    if (props.isActive) {
      return props.isDarkTheme ? '#ffffff' : '#1e293b'
    }
    return props.isDarkTheme ? '#ffffff' : '#616e7c'
  }};
  margin: 0px;
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
`

export const CONTACT = styled.div`
  margin-top: auto;
  padding: 0px 40px 20px 20px;
`

export const TITLE = styled.p`
  font-size: 16px;
  color: ${props => (props.isDarkTheme ? '#fff' : '#00306e')};
`

export const SOCIALMEDIA = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`

export const LOGO = styled.img`
  width: 30px;
  height: 30px;
  margin: 10px 0px;
`

export const DESCRIPTION = styled.p`
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#fff' : '#00306e')};
  font-weight: 500;
`
