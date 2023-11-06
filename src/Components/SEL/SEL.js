import React from 'react'
import './SEL.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import sellogo from '../../assets/sel.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'

const SEL = () => {
  return (
    <div className='sel'>
       <Container> 
        <Row>
          <Col style={{  textAlign:'center', color:'black', fontFamily:'Helvettica' }}  className="row justify-content-center">
          <Image src={sellogo} fluid className='center' style={{ width: '18rem',}}   />
          <h1>SEL <br/>Accommodations</h1>
          </Col>
        </Row>
        <Row className='cards'>
        <Card style={{ width: '18rem',backgroundColor: '#343541', color:'white' }}>
      <Card.Img variant="top" 
      src="https://i0.wp.com/teacherinexile.com/wp-content/uploads/2020/05/IMG_0241-2.png?fit=960%2C960&ssl=1"
       />
      <Card.Body>
        <Card.Title>Mood Meter</Card.Title>
        <Card.Text>
          Understand your mood with the mood meter.
        </Card.Text>
        <Button variant="primary" href="https://i0.wp.com/teacherinexile.com/wp-content/uploads/2020/05/IMG_0241-2.png?fit=960%2C960&ssl=1"
        target="_blank">Mood Meter</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', backgroundColor: '#343541', color:'white'  }}>
      <Card.Img variant="top" src="https://www.dasint.org.sg/images/blog/Dyslexia_and_SpLDs/SEL1.png"/>
      <Card.Body>
        <Card.Title>SEL Anchor Chart</Card.Title>
        <Card.Text>
          Understand how you feel.
        </Card.Text>
        <Button variant="primary" href='https://www.dasint.org.sg/images/blog/Dyslexia_and_SpLDs/SEL1.png'>SEL Anchor Chart</Button>
      </Card.Body>
    </Card>
        </Row>
      </Container>
    </div>
  )
}

export default SEL