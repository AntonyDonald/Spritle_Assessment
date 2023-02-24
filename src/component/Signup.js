import React, { useContext, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Api from '../axios/Api';
import DataContext from '../context/DataContext';

const Signup = () => {
  const { getData, setGetData, userName, setUserName, password, setPassword, navigate, setRetypePassword, retypePassword,
    type, setType, getStuData, setGetStuData } = useContext(DataContext);
  const [cbData, setCbData] = useState([
    { id: 1, value: "Master", checked: false },
    { id: 2, value: "Student", checked: false }
  ]);
  const [editId, setEditId] = useState(0);
  const handleSignup = async (e) => {
    e.preventDefault();

    if ((type).toString() === "") {
      alert('choose type')
    } else if ((password).toString() === (retypePassword).toString() && (password.trim().length !== 0)) {
      if (userName.trim().length !== 0) {
        if ((type).toString() === 'Master') {
          const mas_filter = getData.find((data) => (data.user_name) === userName)
          if (!mas_filter) {
            const id = getData.length ? getData[getData.length - 1].id + 1 : 1
            const data = {
              id: id,
              user_name: userName,
              password: password,
              type: type
            }
            try {
              const response = await Api.post('/master', data)
              setGetData([...getData, response.data])
            } catch (error) {
              console.log(error);
            }
            navigate('/')
          } else {
            alert('master name already exist')
          }

        } else {
          const stu_filter = getStuData.find((data) => (data.user_name) === userName)
          if (!stu_filter) {
            const id = getStuData.length ? getStuData[getStuData.length - 1].id + 1 : 1
            const data = {
              id: id,
              user_name: userName,
              password: password,
              type: type
            }
            try {
              const response = await Api.post('/student', data)
              setGetStuData([...getStuData, response.data])
            } catch (error) {
              console.log(error);
            }
            navigate('/')
          } else {
            alert('Student name already Exist')
          }
        }
        setUserName("");
        setPassword("");
        setRetypePassword("");
        document.getElementById("Radio-button").checked = false;

      } else {
        alert('empty space is not allowed')
      }
    } else {
      alert('password mismatch')
    }
  }

  return (
    <Container className='container'>
      <Row>
        <Col>
          <div className="login">
            <Form onSubmit={handleSignup}>
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
                <Form.Label><b>ReType Password</b></Form.Label>
                <Form.Control
                  type='password'
                  placeholder='ReType Password'
                  value={retypePassword}
                  onChange={(e) => setRetypePassword(e.target.value)}
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
                <Button type='submit'>Signup</Button>
                <Link to={'/'}>
                  <Button type='submit'>Cancel</Button>
                </Link>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Signup
