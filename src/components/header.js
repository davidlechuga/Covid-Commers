import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { MenuItem, StyledHeader } from "../styles/components"
import carrito from "../images/cart.png"

const Header = () => (
  <StyledHeader>
    <Link to="/">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsashREW7g8o6vNi4C_92hDw13oCN9Fn0z5jJWQQRQ0K0C9iBI"
        alt="logocoronavirus"
      />
    </Link>
    <nav>
      <ul>
        <MenuItem margin>
          <Link to="/">Productos</Link>
        </MenuItem>
        <MenuItem margin>
          <a href="https://github.com/davidlechuga"> github DavidLechuga</a>
        </MenuItem>
        <MenuItem>
          <Link to="/cart">
            <span>
              <img src={carrito} alt="carritologo" />
            </span>
          </Link>
        </MenuItem>
      </ul>
    </nav>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
