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

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlelogout = async () => {
    dispatch(logout());
    //ensure that the state update from the logout action has been processed before proceeding to the next step.
    await new Promise((resolve) => setTimeout(resolve, 100));

    navigate("/login"); //redirect to login page route.
  };

  return (
    <Container>
      <Navbar className="header">
        <NavbarBrand href="/" className="me-auto">
          <Link>
            <img src={logo} className="logo" />
          </Link>
        </NavbarBrand>
        <Nav>
          <NavItem></NavItem>
          <NavItem>
            <Link to="/">
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
    </Container>
  );
};

export default Header;
