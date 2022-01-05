import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { delete_station } from "../../js/action/authAction";
import { edit_station } from "../../js/action/authAction";
import React, { useState } from "react";
import Modaleditst from "./Modaleditst";
import { Button, Card } from "react-bootstrap";
import "./card.css";

const Cardstation = ({ s }) => {
  const dispatch = useDispatch();
  const deletestation = () => {
    dispatch(delete_station(s._id));
  };
  const editstation = () => {
    dispatch(edit_station(s._id));
  };
  return (
    <div
      style={{ border: "solid red", width: "350px", flexDirection: "column" }}
      className="card"
    >
      <p> name : {s.name}</p>
      <p> code :{s.code}</p>
      <p> nombre de pompes: {s.pumpnumber}</p>
      <p> type de pompes :{s.pumptype}</p>
      <p> dernier intervention :{s.intervention}</p>

      <button onClick={deletestation}> delete </button>
      {/*<button onClick={editstation}> edit </button>*/}
      <Modaleditst s={s} />
      {/* <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{s.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{s.code}</Card.Subtitle>
          <Card.Subtitle>{s.pumpnumber}</Card.Subtitle>
          <Card.Subtitle>{s.intervention}</Card.Subtitle>

          <Button onClick={deletestation}> delete</Button>
          <Button></Button>
        </Card.Body>
      </Card> */}
    </div>
  );
};

export default Cardstation;
