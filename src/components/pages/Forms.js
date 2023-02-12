// import "./App.css";
import React, {useEffect, useState} from 'react';
import '../../App.css';
import { useHistory, Link } from "react-router-dom";

// import { Form, Button, Checkbox, DatePicker, Input, Select, Space } from "antd";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Forms = ({name,setName}) => {

  const [val1, setval1] = useState(0);
  const [val2, setval2] = useState(0);
  const [tot, settot] = useState(0);

  useEffect(() => {
    settot(Number(val1) * Number(val2));
  }, [val1,val2]);
  
  // const [name, setName] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
  }
  
  // let name, value

  // const handleInputs = (e) => {
  //   console.log(e);
  //   name = e.target.name;
  //   value = e.target.value;
    
  //   setUser({...user, [name]:value});


  // }

  const history = useHistory();
  const twod1 = () => {
    
    history.push("/2d1")

 
}
const handle=(e)=> {
  setName(e.target.value)

}

  return (
    
    <div style={{backgroundColor: "lightblue",height:"100vh"}}>
      <br></br>
      <h1>For Personal Home</h1>
    <Container fluid bg="light">
      <Row className="justify-content-md-center">
      <Col xs lg="5">
      
    <Form >

    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Number of required room</Form.Label>
        <Form.Select aria-label="1" Value={name}
        onChange={handle}
        type="number" placeholder="Eg-1,2,3">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="4">Four</option>
          <option value="5">Five</option>
        </Form.Select>
        {/* <Form.Control
        

        Value={name}
        onChange={handle}
        type="number" placeholder="Eg-1,2,3" /> */}
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
        <Form.Control 
        type="number" placeholder="feet"
        name="val2"
        onChange={(e) => {
          setval2(e.target.value);
        }}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        {/* <Form.Check type="checkbox" label="Check me out" /> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Plot Area</Form.Label>
        <Form.Control 
        value={tot}
        type="text" placeholder="Eg-200 Sq./feet" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

    
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        {/* <Form.Check type="checkbox" label="Check me out" /> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Number of bathroom</Form.Label>
        <Form.Control type="number" placeholder="Eg.1,2,3" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        {/* <Form.Check type="checkbox" label="Check me out" /> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Do you want porch yes or not</Form.Label>
        <Form.Select aria-label="1" 
        // Value={name}
        // onChange={handle}
        type="number" placeholder="Eg-1,2,3">
          <option>Select</option>
          <option value="1">Yes</option>
          <option value="2">No</option>
        </Form.Select>
        {/* <Form.Control
        

        Value={name}
        onChange={handle}
        type="number" placeholder="Eg-1,2,3" /> */}
      </Form.Group>
      {/* <Button onClick={twod1} variant="primary" type="submit">
        Submit
      </Button> */}
      <Link to="/2d1" >
      <Button variant="primary" type="submit">
        
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

export default Forms;
