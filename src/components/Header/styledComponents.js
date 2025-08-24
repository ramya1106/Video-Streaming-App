import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const NAVBAR = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#fff')};
  padding: 5px 40px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 75px;
  @media (max-width: 768px) {
    padding: 5px 20px;
  }
`

export const LOGO = styled.img`
  width: 150px;
`

export const NAVMENU = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  align-items: center;
  gap: 20px;
  @media (max-width: 768px) {
    gap: 15px;
  }
`

export const THEME = styled.button`
  background-color: transparent;
  border: 0px;
  margin: 0px;
  padding: 0px;
  font-size: 24px;
  color: ${props => (props.isDarkTheme ? '#fff' : '#212121')};
`

export const PROFILE = styled.img`
  width: 24px;
  height: 24px;
  @media (max-width: 768px) {
    display: none;
  }
`

export const LOGOUT = styled.button`
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#fff' : '#3b82f6')};
  background-color: transparent;
  border: 1px solid ${props => (props.isDarkTheme ? '#fff' : '#3b82f6')};
  border-radius: 5px;
  padding: 5px 10px;
  @media (max-width: 768px) {
    border: none;
    padding: 0px;
  }
`

export const LOGOUTTEXT = styled.span`
  margin: 0px;
  @media (max-width: 768px) {
    display: none;
  }
`
export const LOGOUTICON = styled.div`
  border: none;
  background-color: transparent;
  font-size: 26px;
  margin: 0px;
  color: ${props => (props.isDarkTheme ? '#fff' : '#000')};
  @media (min-width: 768px) {
    display: none;
  }
`
export const POPUP = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const POPUPCONTENT = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  text-align: center;
  width: 300px;
`

export const POPUPTEXT = styled.p`
  font-size: 16px;
  color: #1e293b;
  margin-bottom: 20px;
`

export const POPUPBTNS = styled.div`
  display: flex;
  justify-content: space-around;
`

export const CANCELBTN = styled.button`
  background: transparent;
  border: 1px solid #cbd5e1;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  color: #1e293b;
`

export const CONFIRMBTN = styled.button`
  background-color: #3b82f6;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  color: #fff;
`

export const MENU = styled.ul`
  list-style-type: none;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#fff')};
  font-size: 15px;
  top: 75px;
  margin: 0px;
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-end;
  padding: 0px 20px 20px 20px;
  @media (min-width: 768px) {
    display: none;
  }
`

export const MENUICON = styled.button`
  background-color: transparent;
  border: none;
  padding: 0px;
  margin: 0px;
  font-size: 26px;
  color: ${props => (props.isDarkTheme ? '#fff' : '#000')};
  @media (min-width: 768px) {
    display: none;
  }
`

export const LINK = styled(Link)`
  text-decoration: none;
  color: ${props => (props.isDarkTheme ? '#fff' : '#000')};
`
