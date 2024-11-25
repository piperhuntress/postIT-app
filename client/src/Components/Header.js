import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";
import logo from "../Images/logo-t.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../Features/UserSlice";
import { useState } from "react";
import { FaHome, FaUserAlt, FaSignOutAlt } from "react-icons/fa";
import { persistore } from "../Store/store";
import { resetStore } from "../Store/store";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlelogout = async () => {
    resetStore(); // Reset the store when logging out
    persistore.purge();
    dispatch(logout());
    //ensure that the state update from the logout action has been processed before proceeding to the next step.
    await new Promise((resolve) => setTimeout(resolve, 100));

    navigate("/"); //redirect to login page route.
  };

  return (
    /*Usng reactstrap */
    /*     <Container>
      <Navbar className="header">
        <NavbarBrand href="/" className="me-auto">
          <Link>
            <img src={logo} className="logo" />
          </Link>
        </NavbarBrand>
        <Nav>
          <NavItem></NavItem>
          <NavItem>
            <Link to="/home">
              <FaHome id="homeLink" />
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/profile">
              <FaUserAlt id="profileLink" />
            </Link>
          </NavItem>
          <NavItem>
            <Link onClick={handlelogout}>
              <FaSignOutAlt id="logOutLink" />
            </Link>
          </NavItem>
        </Nav>
      </Navbar>
    </Container> */
    /*Usng bootstrap */
    <Container>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand">
          <img src={logo} className="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link to="/home">
                <FaHome id="homeLink" />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profile">
                <FaUserAlt id="profileLink" />
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={handlelogout}>
                <FaSignOutAlt id="logOutLink" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </Container>
  );
};

export default Header;
