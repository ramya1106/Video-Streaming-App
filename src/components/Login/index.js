import Cookies from 'js-cookie'

import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import {
  PAGE,
  LOGIN,
  LOGO,
  FORM,
  LABEL,
  INPUT,
  CHECKBOXWRAPPER,
  CHECKBOX,
  CHECKBOXLABEL,
  LOGINBUTTON,
  ERRORMSG,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    hasError: false,
    errorMsg: '',
    showPassword: false,
  }

  onSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/login'
    const userDetails = {
      username,
      password,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      const {history} = this.props
      const jwtToken = data.jwt_token
      Cookies.set('jwt_token', jwtToken, {expires: 7})
      history.replace('/')
    } else {
      const errorMsg = data.error_msg
      this.setState({hasError: true, errorMsg})
    }
  }

  onChangeUsername = event => this.setState({username: event.target.value})

  onChangePassword = event => this.setState({password: event.target.value})

  ontogglePassword = () =>
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    const {showPassword, username, password, hasError, errorMsg} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <PAGE isDarkTheme={isDarkTheme}>
              <LOGIN isDarkTheme={isDarkTheme}>
                <LOGO
                  src={
                    isDarkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                <FORM onSubmit={this.onSubmit}>
                  <LABEL htmlFor="username" isDarkTheme={isDarkTheme}>
                    USERNAME
                  </LABEL>
                  <INPUT
                    id="username"
                    type="text"
                    placeholder="Username"
                    onChange={this.onChangeUsername}
                    value={username}
                    isDarkTheme={isDarkTheme}
                  />
                  <LABEL htmlFor="password" isDarkTheme={isDarkTheme}>
                    PASSWORD
                  </LABEL>
                  <INPUT
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    onChange={this.onChangePassword}
                    value={password}
                    isDarkTheme={isDarkTheme}
                  />
                  <CHECKBOXWRAPPER>
                    <CHECKBOX
                      id="showPassword"
                      type="checkbox"
                      onChange={this.ontogglePassword}
                    />
                    <CHECKBOXLABEL
                      htmlFor="showPassword"
                      isDarkTheme={isDarkTheme}
                    >
                      Show Password
                    </CHECKBOXLABEL>
                  </CHECKBOXWRAPPER>
                  <LOGINBUTTON type="submit">Login</LOGINBUTTON>
                  {hasError && <ERRORMSG>{errorMsg}</ERRORMSG>}
                </FORM>
              </LOGIN>
            </PAGE>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
