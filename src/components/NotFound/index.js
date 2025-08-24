import {
  NOTFOUND,
  NOTFOUNDTITLE,
  NOTFOUNDDESCRIPTION,
  NOTFOUNDIMAGE,
} from './styledComponents'

const NotFound = () => (
  <NOTFOUND>
    <NOTFOUNDIMAGE
      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
      alt="not found"
    />
    <NOTFOUNDTITLE>Page Not Found</NOTFOUNDTITLE>
    <NOTFOUNDDESCRIPTION>
      We are sorry, the page you requested could not be found.
    </NOTFOUNDDESCRIPTION>
  </NOTFOUND>
)

export default NotFound
