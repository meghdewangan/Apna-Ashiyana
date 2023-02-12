// import "./App.css";
import React, {useEffect, useState} from 'react';
import { useHistory, Link } from "react-router-dom";
// import { Link } from 'react-router-dom';
import '../../App.css';

// import { Form, Button, Checkbox, DatePicker, Input, Select, Space } from "antd";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Formo = ({name1, setName1}) => {

  const [val1, setval1] = useState(0);
  const [val2, setval2] = useState(0);
  const [tot, settot] = useState(0);

  useEffect(() => {
    settot(Number(val1) * Number(val2));
  }, [val1,val2]);

  // const Forms = ({name, setName}) => {
  
    // const [name, setName] = useState("");
    function handleSubmit(e) {
      e.preventDefault();
      
    }

  const history = useHistory();
  
  const twod2 = () => {
    history.push("/2d2")
}

const handle=(e)=> {
  setName1(e.target.value)

}

  return (
    
    <div style={{backgroundColor: "lightblue",height:"100vh"}}>
      <br></br>
      <h1>For Rental Home</h1>
    <Container fluid bg="light">
      <Row className="justify-content-md-center">
      <Col xs lg="5">
    <Form >

    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>How much BHK do you want</Form.Label>
        <Form.Select aria-label="1" 
        value={name1}
        onChange={handle}
        type="number" placeholder="Eg-1,2,3">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          {/* <option value="4">Four</option>
          <option value="5">Five</option> */}
        </Form.Select>
        {/* <Form.Control
        

        Value={name}
        onChange={handle}
        type="number" placeholder="Eg-1,2,3" /> */}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        {/* <Form.Check type="checkbox" label="Check me out" /> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Number of required room</Form.Label>
        <Form.Select aria-label="1" 
        type="number" placeholder="Eg-1,2,3">
          <option>Open this slelect menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="4">Four</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        {/* <Form.Check type="checkbox" label="Check me out" /> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Number of Kitchen</Form.Label>
        <Form.Select aria-label="1" 
        // onChange={handle}
        type="number" placeholder="Eg-1,2,3">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          {/* <option value="4">Four</option>
          <option value="5">Five</option> */}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        {/* <Form.Check type="checkbox" label="Check me out" /> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Plot Length</Form.Label>
        <Form.Control 
        name="val1"
        type="number" placeholder="feet"
        onChange={(e) => {
          setval1(e.target.value);
        }} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        {/* <Form.Check type="checkbox" label="Check me out" /> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Plot Width</Form.Label>
        <Form.Control type="number" placeholder="feet"
         name="val2"
         onChange={(e) => {
           setval2(e.target.value);
         }} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        {/* <Form.Check type="checkbox" label="Check me out" /> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Ploat Area</Form.Label>
        <Form.Control 
        value={tot}
        type="number" placeholder="eg-200 sq/feet" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>


      {/* <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label></Form.Label>
        <Form.Control type="number" placeholder="feet" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox"> */}
        {/* <Form.Check type="checkbox" label="Check me out" /> */}
      {/* </Form.Group> */}

      <Link to="/2d2">
      <Button  variant="primary" type="submit"> 
        Submit
      </Button>
      </Link>
    </Form>
    </Col>
    </Row>
    </Container>
    </div>
  );
}

export default Formo;
