import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Api from '../axios/Api'
import DataContext from '../context/DataContext'

const Master = () => {
  const { calculation, setCalculation, login, navigate, setLogin } = useContext(DataContext);

  const [number1, setNumber1] = useState("")
  const [number2, setNumber2] = useState("")
  const [answer, setAnswer] = useState("")

  useEffect(() => {
    if (login === 0) {
      navigate('/')
    }
  }, [])


  const handlePlus = async () => {
    const response = parseInt(number1) + parseInt(number2)
    setAnswer(response)
    if (response || (response) === 0) {
      const data = {
        number1: number1,
        operator: "+",
        number2: number2,
        total: response
      }
      try {
        const result = await Api.post('/calculation', data);
        setCalculation([...calculation, result.data]);
        setNumber1("")
        setNumber2("")
      } catch (error) {
        console.log(error);
      }
    }
  }
  const handleMinus = async () => {
    const response = parseInt(number1) - parseInt(number2)
    setAnswer(response)
    console.log(response);
    console.log(typeof response);
    if (response || (response) === 0) {
      const data = {
        number1: number1,
        operator: "-",
        number2: number2,
        total: response
      }
      try {
        const result = await Api.post('/calculation', data);
        setCalculation([...calculation, result.data]);
        setNumber1("")
        setNumber2("")
      } catch (error) {
        console.log(error);
      }
    }
  }
  const handleMultiply = async () => {
    const response = parseInt(number1) * parseInt(number2)
    setAnswer(response)
    if (response || (response) === 0) {
      const data = {
        number1: number1,
        operator: "*",
        number2: number2,
        total: response
      }
      try {
        const result = await Api.post('/calculation', data);
        setCalculation([...calculation, result.data]);
        setNumber1("")
        setNumber2("")
      } catch (error) {
        console.log(error);
      }
    }
  }
  const handleDivide = async () => {
    const response = parseInt(number1) / parseInt(number2)
    setAnswer(response)
    if (response || (response) === 0) {
      const data = {
        number1: number1,
        operator: "/",
        number2: number2,
        total: response
      }
      try {
        const result = await Api.post('/calculation', data);
        setCalculation([...calculation, result.data]);
        setNumber1("")
        setNumber2("")
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <Container className='container'>
      <Row>
        <Col className='mlo_btn' md={12}>
          <Link to={'/'}>
            <Button className='btn btn-1' onClick={() => setLogin(0)}>LogOut</Button>
          </Link>
        </Col>
        <Col md={3} className='calculation'>
          <Form>
            <Form.Group>
              <Form.Label>Number 1</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter value'
                value={number1}
                onChange={(e) => setNumber1(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Number 2</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter value'
                value={number2}
                onChange={(e) => setNumber2(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Col>
        <Col md={3} className='operation'>
          <Button onClick={() => handlePlus()}>Plus</Button>
          <Button onClick={() => handleMinus()}>Minus</Button>
          <Button onClick={() => handleMultiply()}>Multiply</Button>
          <Button onClick={() => handleDivide()}>Divide</Button>
        </Col>
        <Col md={3} className='total'>
          <h1>=</h1>
        </Col>
        <Col md={3} className='total'>
          <h3>{answer ? answer : <p>Ready to Calculate....</p>}</h3>
        </Col>
      </Row>
    </Container>
  )
}

export default Master
