import React, { useContext, useState } from 'react'
import { Button, Col, Container, Row, Form, } from 'react-bootstrap';
import DataContext from '../context/DataContext';

const Login = () => {
  const { getData, userName, setUserName, password, setPassword, navigate, type, setType, getStuData, setLogin } = useContext(DataContext);
  const [cbData, setCbData] = useState([
    { id: 1, value: "Master", checked: false },
    { id: 2, value: "Student", checked: false }
  ])
  const handleLogin = (e) => {
    e.preventDefault();
    const master_filter = getData.find((obj) => (obj.user_name) === userName && (obj.password) === password && (obj.type) === type)
    const student_filter = getStuData.find((obj) => (obj.user_name) === userName && (obj.password) === password && (obj.type) === type)
    if ((master_filter) || (student_filter)) {
      type === "Master" ? navigate('/master') : navigate("/student")
      setUserName("");
      setPassword("");
      document.getElementById("Radio-button").checked = false
      setLogin(1)
    } else {
      alert('not a user')
    }
  }
  return (
    <Container className='container-fluid'>
      <Row>
        <Col className='col-md-12'>
          <div className="login">
            <Form onSubmit={handleLogin}>
              <Form.Group>
                <Form.Label><b>User Name</b></Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter User name'
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label><b>Password</b></Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Enter Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label><b>Type</b></Form.Label> &nbsp;
                {
                  cbData.map((data) =>
                    <React.Fragment key={data.id} >
                      <Form.Check style={{ display: 'inline-block', margin: '10px' }} id='Radio-button' type='radio' name='type' value={data.value} onChange={(e) => setType(e.target.value)} label={data.value} />
                    </React.Fragment>
                  )
                }
              </Form.Group>
              <div className="button">
                <Button type='submit'>Login</Button>
                <a href='/signup'>SignUp</a>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
export default Login
