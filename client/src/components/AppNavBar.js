import React, { Fragment } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";


import Login from "./auth/Login";
import { Link } from "react-router-dom";
import { logout} from "../js/action/authAction";

const AppNavbar = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  //const role = useSelector((state) => state.authReducer.user.role);
  return (
    <Navbar className="d-flex justify-content-between" color="dark" dark>
      <NavbarBrand
        tag={() => (
          <Link
            style={{ textDecoration: "none", color: "white", fontSize: "25px" }}
            to="/"
          >
            Pump App
          </Link>
        )}
      />
      <Nav className="text-white">
        {isAuth ? (
          <Fragment>
            <NavItem className="p-2">
                <Link
            style={{ textDecoration: "none", color: "white", fontSize: "25px" }}
            to="/"
          >
            <Button onClick={() => dispatch(logout())} color="light">
                Logout
              </Button>
          </Link>
              
            </NavItem>
            <NavItem className="p-2">
              <Button color="light">
                <Link to="/dashboard">Dashboard</Link>
              </Button>
            </NavItem>
          </Fragment>
        ) : (
          <Fragment>
            <NavItem className="p-2">
              <Login />
            </NavItem>
          </Fragment>
        )}
      </Nav>
    </Navbar>
  );
};

export default AppNavbar;
