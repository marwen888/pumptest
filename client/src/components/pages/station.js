import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom";
import { Jumbotron, Container } from "reactstrap";
import { get_station } from "../../js/action/authAction";
import Cardstation from "./Cardstation.js";

const Station = () => {
  const history = useHistory()
  console.log("histroy****", history.location);
   sessionStorage.setItem("baseLocation", history.location.pathname);
   const state = useSelector(state =>{
        console.log("state*****", state);
     return  state;
    });
     const dispatch = useDispatch()
        const getStation = () => dispatch(get_station())
  useEffect(() => {
    getStation()
    console.log(state)
  },[]);
  console.log("state.stationReducer.station.", state.stationReducer);
  const stations = state.stationReducer.station.stations 
  if(state.stationReducer.isLoad)
    {
        return <h1> waiting ... </h1>
    }
  return (
    <div>
      <h2>Stations</h2>
      {stations.map((s) => <Cardstation s={s}/>) }
      
      {/* <div>{users}</div> */}
    </div>
  );
};
export default Station;
