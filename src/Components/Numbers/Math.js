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
import Sitelogo from '../../assets/mathsitelogo.png'

const Math = () => {
  return (
    <>
    <div className='math img-fluid'>
    <Container> 
        <Row className='page'>
          <Col style={{  textAlign:'center', color:'black', fontFamily:'Helvettica' }}  className="row justify-content-center">
          <Image src={mathlogo} fluid className='center' style={{ width: '12rem',paddingBottom:'20px'}}   />
          <h1 className='teach'>Math <br/>Accommodations</h1>
          </Col>
        </Row>
        <Row className='cards'>
        <Card style={{ width: '18rem',backgroundColor: '#343541', color:'white' }}>
      <Card.Img variant="top" 
      src="https://dataconomy.com/wp-content/uploads/2023/10/Magic-School-AI.jpg"
       />
      <Card.Body>
        <Card.Title>Magic School AI</Card.Title>
        <Card.Text>
          Magic School AI generates content, accommodations, ideas and supports for teachers by utilizing chatgpt AI API interface.
        </Card.Text>
        <Button variant="primary" href="https://www.magicschool.ai/"
        target="_blank">Magic School AI</Button>
      </Card.Body>
    </Card>
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
    <Card style={{ width: '18rem', backgroundColor: '#343541', color:'white'  }}>
      <Card.Img variant="top" src={Sitelogo} />
      <Card.Body>
        <Card.Title>Math worksheet generator</Card.Title>
        <Card.Text>
          Addition, subtraction, multiplication and division math worksheet generator.
        </Card.Text>
        <Button variant="primary" href='https://mathworksheetsgenerator.netlify.app/'>Math Worksheets</Button>
      </Card.Body>
    </Card>
        </Row>
      </Container>
    </div>
    </>
  )
}

export default Math
