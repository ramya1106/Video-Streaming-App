import styled from 'styled-components'

export const PAGE = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#fff')};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const LOGIN = styled.div`
  width: 30%;
  background-color: ${props => (props.isDarkTheme ? '#0F0F0F' : '#fff')};
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 43px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 576px) {
    width: 85%;
  }
`

export const LOGO = styled.img`
  width: 150px;
  margin: auto;
  margin-bottom: 40px;
`

export const FORM = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-family: 'Roboto';
`

export const LABEL = styled.label`
  color: ${props => (props.isDarkTheme ? '#f8fafc' : '#7e858e')};
  font-weight: bold;
  font-size: 12px;
  margin-top: 10px;
`

export const INPUT = styled.input`
  color: #616e7c;
  border: 1px solid ${props => (props.isDarkTheme ? '#475569' : '#D7E0E9')};
  padding: 10px;
  width: 100%;
  margin-top: 5px;
  margin-bottom: 10px;
  outline: none;
  border-radius: 5px;
  background-color: transparent;
`

export const CHECKBOXWRAPPER = styled.div`
  display: flex;
  align-items: center;
`

export const CHECKBOX = styled.input`
  margin-right: 5px;
`

export const CHECKBOXLABEL = styled.label`
  color: ${props => (props.isDarkTheme ? '#f8fafc' : '#0f0f0f')};
  font-size: 13px;
  margin-top: 0px;
`

export const LOGINBUTTON = styled.button`
  color: #ffffff;
  background-color: #3b82f6;
  border-radius: 8px;
  width: 100%;
  padding: 10px;
  border: 0px;
  margin-top: 20px;
  outline: none;
  cursor: pointer;
`

export const ERRORMSG = styled.p`
  color: #ff0b37;
  font-size: 12px;
  margin-top: 0px;
`
