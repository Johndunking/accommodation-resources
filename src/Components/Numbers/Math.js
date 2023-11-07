import React from 'react'
import './Math.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import mathlogo from '../../assets/Math.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'

const Math = () => {
  return (
    <>
    <div className='math'>
    <Container> 
        <Row className='page'>
          <Col style={{  textAlign:'center', color:'black', fontFamily:'Helvettica' }}  className="row justify-content-center">
          <Image src={mathlogo} fluid className='center' style={{ width: '18rem',}}   />
          <h1>Math <br/>Accommodations</h1>
          </Col>
        </Row>
        <Row className='cards'>
        <Card style={{ width: '18rem',backgroundColor: '#343541', color:'white' }}>
      <Card.Img variant="top" 
      src="https://suncatcherstudio.com/uploads/printables/math/hundreds-charts/pdf-png/hundreds-chart-printable-colored1-fefefe-44aa44.png"
       />
      <Card.Body>
        <Card.Title>Hundreds Chart</Card.Title>
        <Card.Text>
          Hundreds Chart
        </Card.Text>
        <Button variant="primary" href="https://suncatcherstudio.com/uploads/printables/math/hundreds-charts/pdf-png/hundreds-chart-printable-colored1-fefefe-44aa44.png"
        target="_blank">Hundreds Chart</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', backgroundColor: '#343541', color:'white'  }}>
      <Card.Img variant="top" src=" https://www.memozor.com/images/multiplication/printable_charts/zoom/multiplication_charts.jpg" />
      <Card.Body>
        <Card.Title>Multiplication Chart</Card.Title>
        <Card.Text>
          Multiplication Chart
        </Card.Text>
        <Button variant="primary" href='https://www.memozor.com/images/multiplication/printable_charts/zoom/multiplication_charts.jpg'>Multiplication Chart</Button>
      </Card.Body>
    </Card>
        </Row>
      </Container>
    </div>
    </>
  )
}

export default Math
