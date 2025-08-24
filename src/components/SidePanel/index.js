import {withRouter} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'

import {HiFire} from 'react-icons/hi'

import {SiYoutubegaming} from 'react-icons/si'

import {CgPlayListAdd} from 'react-icons/cg'

import ThemeContext from '../../context/ThemeContext'

import {
  SIDEPANEL,
  NAVLIST,
  NAVLINK,
  NAVITEM,
  NAVICON,
  NAVTEXT,
  CONTACT,
  TITLE,
  SOCIALMEDIA,
  LOGO,
  DESCRIPTION,
} from './styledComponents'

const SidePanel = props => {
  const {location} = props
  const {pathname} = location
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <SIDEPANEL isDarkTheme={isDarkTheme}>
            <NAVLIST>
              <NAVLINK to="/">
                <NAVITEM isActive={pathname === '/'} isDarkTheme={isDarkTheme}>
                  <NAVICON
                    isDarkTheme={isDarkTheme}
                    isActive={pathname === '/'}
                  >
                    <AiFillHome />
                  </NAVICON>
                  <NAVTEXT
                    isActive={pathname === '/'}
                    isDarkTheme={isDarkTheme}
                  >
                    Home
                  </NAVTEXT>
                </NAVITEM>
              </NAVLINK>
              <NAVLINK to="/trending">
                <NAVITEM
                  isActive={pathname === '/trending'}
                  isDarkTheme={isDarkTheme}
                >
                  <NAVICON
                    isDarkTheme={isDarkTheme}
                    isActive={pathname === '/trending'}
                  >
                    <HiFire />
                  </NAVICON>
                  <NAVTEXT
                    isActive={pathname === '/trending'}
                    isDarkTheme={isDarkTheme}
                  >
                    Trending
                  </NAVTEXT>
                </NAVITEM>
              </NAVLINK>
              <NAVLINK to="/gaming">
                <NAVITEM
                  isActive={pathname === '/gaming'}
                  isDarkTheme={isDarkTheme}
                >
                  <NAVICON
                    isDarkTheme={isDarkTheme}
                    isActive={pathname === '/gaming'}
                  >
                    <SiYoutubegaming />
                  </NAVICON>
                  <NAVTEXT
                    isActive={pathname === '/gaming'}
                    isDarkTheme={isDarkTheme}
                  >
                    Gaming
                  </NAVTEXT>
                </NAVITEM>
              </NAVLINK>
              <NAVLINK to="/saved-videos">
                <NAVITEM
                  isActive={pathname === '/saved-videos'}
                  isDarkTheme={isDarkTheme}
                >
                  <NAVICON
                    isDarkTheme={isDarkTheme}
                    isActive={pathname === '/saved-videos'}
                  >
                    <CgPlayListAdd />
                  </NAVICON>
                  <NAVTEXT
                    isActive={pathname === '/saved-videos'}
                    isDarkTheme={isDarkTheme}
                  >
                    Saved videos
                  </NAVTEXT>
                </NAVITEM>
              </NAVLINK>
            </NAVLIST>
            <CONTACT>
              <TITLE isDarkTheme={isDarkTheme}>CONTACT US</TITLE>
              <SOCIALMEDIA>
                <LOGO
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <LOGO
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <LOGO
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </SOCIALMEDIA>
              <DESCRIPTION isDarkTheme={isDarkTheme}>
                Enjoy! Now to see your channels and recommendations!
              </DESCRIPTION>
            </CONTACT>
          </SIDEPANEL>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(SidePanel)
