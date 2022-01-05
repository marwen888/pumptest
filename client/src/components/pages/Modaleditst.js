import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { edit_station } from "../../js/action/authAction";

const Modaledit = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    pumpnumber: "",
    pumptype: "",
    intervention:"",
  });

  const handleFormChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleConfim = () => {
    dispatch(edit_station(props.s._id, formData));
    // history.push("/dashboard");
  };

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        Edit
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Register</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                onChange={handleFormChange}
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name ...."
              />
            </FormGroup>
            <FormGroup>
              <Label for="code">code</Label>
              <Input
                onChange={handleFormChange}
                type="number"
                name="number"
                id="exampleEmail"
                placeholder="Enter your code..."
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">pumpnumber</Label>
              <Input
                onChange={handleFormChange}
                type="password"
                name="password"
                id="password"
                placeholder="Enter your pumpnumber..."
              />
            </FormGroup>
            <FormGroup>
              <Label for="name">pumptype</Label>
              <Input
                onChange={handleFormChange}
                type="text"
                name="name"
                id="name"
                placeholder="Enter your pumptype ...."
              />
            </FormGroup>
            <FormGroup>
              <Label for="name">intervention</Label>
              <Input
                onChange={handleFormChange}
                type="text"
                name="name"
                id="name"
                placeholder="Enter your intervention ...."
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              handleConfim();
              toggle();
            }}
          >
            Confirm
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Modaledit;
