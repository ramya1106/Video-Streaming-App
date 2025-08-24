import {withRouter, Link} from 'react-router-dom'
import {useState} from 'react'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {FaMoon} from 'react-icons/fa'
import {IoSunnyOutline, IoMenu} from 'react-icons/io5'
import {FiLogOut} from 'react-icons/fi'
import ThemeContext from '../../context/ThemeContext'
import {
  NAVBAR,
  LOGO,
  NAVMENU,
  THEME,
  PROFILE,
  LOGOUT,
  LOGOUTICON,
  LOGOUTTEXT,
  POPUP,
  POPUPCONTENT,
  POPUPTEXT,
  POPUPBTNS,
  CANCELBTN,
  CONFIRMBTN,
  MENU,
  MENUICON,
  LINK,
} from './styledComponents'

const Header = props => {
  const {history} = props

  const onConfirmLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const [showMenu, setMenuStatus] = useState(false)

  const toggleMenu = () => {
    setMenuStatus(prevState => !prevState)
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, toggleTheme} = value

        return (
          <>
            <NAVBAR isDarkTheme={isDarkTheme}>
              <Link to="/">
                <LOGO
                  src={
                    isDarkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
              </Link>
              <NAVMENU>
                <li>
                  <THEME
                    isDarkTheme={isDarkTheme}
                    type="button"
                    data-testid="theme"
                    onClick={toggleTheme}
                  >
                    {isDarkTheme ? <IoSunnyOutline /> : <FaMoon />}
                  </THEME>
                </li>
                <li>
                  <MENUICON isDarkTheme={isDarkTheme} onClick={toggleMenu}>
                    <IoMenu />
                  </MENUICON>
                  <PROFILE
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                </li>
                <li>
                  <Popup
                    modal
                    trigger={
                      <LOGOUT type="button" isDarkTheme={isDarkTheme}>
                        <LOGOUTTEXT>Logout</LOGOUTTEXT>
                        <LOGOUTICON isDarkTheme={isDarkTheme}>
                          <FiLogOut />
                        </LOGOUTICON>
                      </LOGOUT>
                    }
                    className="popup-content"
                  >
                    {close => (
                      <POPUP>
                        <POPUPCONTENT>
                          <POPUPTEXT>
                            Are you sure, you want to logout?
                          </POPUPTEXT>
                          <POPUPBTNS>
                            <CANCELBTN
                              type="button"
                              onClick={() => {
                                close()
                              }}
                            >
                              Cancel
                            </CANCELBTN>
                            <CONFIRMBTN type="button" onClick={onConfirmLogout}>
                              Confirm
                            </CONFIRMBTN>
                          </POPUPBTNS>
                        </POPUPCONTENT>
                      </POPUP>
                    )}
                  </Popup>
                </li>
              </NAVMENU>
            </NAVBAR>
            {showMenu && (
              <MENU isDarkTheme={isDarkTheme}>
                <LINK to="/" isDarkTheme={isDarkTheme}>
                  <li>Home</li>
                </LINK>
                <LINK to="/trending" isDarkTheme={isDarkTheme}>
                  <li>Trending</li>
                </LINK>
                <LINK to="/gaming" isDarkTheme={isDarkTheme}>
                  <li>Gaming</li>
                </LINK>
                <LINK to="/saved-videos" isDarkTheme={isDarkTheme}>
                  <li>Saved Videos</li>
                </LINK>
              </MENU>
            )}
          </>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Header)
