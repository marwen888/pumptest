import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getAuthUser, get_station, get_user } from "../../js/action/authAction";
import Register from "../auth/Register";
const Dashboard = () => {
  const history = useHistory();
  sessionStorage.setItem("baseLocation", history.location.pathname);
  const user = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();
  const getUser = () => dispatch(getAuthUser());
  useEffect(() => {
    console.log("getUser");
    getUser();
  }, []);
  if (!user) {
    return <h1> waiting ... </h1>;
  }
  return (
    <div>
      role : {user.role === 0 ? "USER" : "ADMIN"} <br />
      name : {user.name} <br />
      email : {user.email}
      <div>
        {user.role === 1 ? (
          <span>
            <Link style={{ color: "black", fontSize: "12px" }} to="/user">
              Users
            </Link>
            <Register />
          </span>
        ) : (
          ""
        )}
        {
          <Link style={{ color: "black", fontSize: "12px" }} to="/station">
            Station
          </Link>
        }
      </div>
    </div>
  );
};

export default Dashboard;
