import React from "react";
import { useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { Jumbotron, Container } from "reactstrap";

const Home = (props) => {
  console.log("home")
  const history = useHistory()
   sessionStorage.setItem("baseLocation", history.location.pathname);
   const isAuth = useSelector(state =>{
        console.log("state*****", state);
     return  state.authReducer.isAuth
    })
  if(isAuth)
    {

       return <Redirect to ="dashboard" />
    }
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid className="p-3">
          <h1 className="display-3">Welcome To PUMP App</h1>
          <p className="lead">PUMP STATION GREENSOLUTION .</p>
        </Container>
      </Jumbotron>
    </div>
  );
};
export default Home;
