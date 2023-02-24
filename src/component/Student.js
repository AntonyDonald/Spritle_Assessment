import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import DataContext from '../context/DataContext';

const Student = () => {

  const { calculation, login, navigate, setLogin } = useContext(DataContext)
  const [aLog, setaLog] = useState(0);

  useEffect(() => {
    if (login === 0) {
      navigate('/')
    }

  }, [])


  return (
    <Container>
      <Row>
        {
          aLog === 0 ?
            <Col className='btn'>
              <Link to={'/'}>
                <Button className='btn btn-1' onClick={() => setLogin(0)}>LogOut</Button>
              </Link>
              <Button className='btn btn-2' onClick={() => setaLog(1)}>Activity Log</Button>
            </Col>
            :
            <React.Fragment>
              <Table>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Value 1</th>
                    <th>Operator</th>
                    <th>Value 2</th>
                    <th></th>
                    <th>Answer</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    calculation.map((data, idx) => (
                      <tr key={data.id}>
                        <td>{idx + 1}</td>
                        <td>{data.number1}</td>
                        <td>{data.operator}</td>
                        <td>{data.number2}</td>
                        <td>=</td>
                        <td>{data.total}</td>
                      </tr>
                    )
                    )
                  }
                </tbody>
              </Table>
              <Col className="btn">
                <Button className='btn btn-1' onClick={() => setaLog(0)}>Back</Button>
                <Link to={'/'}>
                  <Button className='btn btn-1'>LogOut</Button>
                </Link>
              </Col>
            </React.Fragment>
        }
      </Row>
    </Container>
  )
}

export default Student
