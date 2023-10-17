import React from 'react'
import './Reading.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import booklogo from '../../assets/logo-3.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'

const Reading = () => {

  return (
    <>
    <div className='reading'>
      <Container> 
        <Row className='px-5 py-4'>
          <Col style={{  textAlign:'center', color:'black', fontFamily:'Helvettica' }}  className="row justify-content-center">
          <Image src={booklogo} fluid className='center' style={{ width: '18rem',}}   />
          <h1>Reading <br/>Accommodations</h1>
          </Col>
        </Row>
        <Row className='cards'>
        <Card style={{ width: '18rem',backgroundColor: '#343541', color:'white' }}>
      <Card.Img variant="top" 
      src="https://ecdn.teacherspayteachers.com/thumbitem/40-Dolch-Pre-Primer-Sight-Word-Flash-Cards-in-a-PDF-file-Daycare-sight-words-1257696-1657201136/original-1257696-1.jpg"
       />
      <Card.Body>
        <Card.Title>Sight Word Flash Cards</Card.Title>
        <Card.Text>
          Select the appropriate filters for your students level. Generate the flash cards and print!
        </Card.Text>
        <Button variant="primary" href="https://sightwords.com/sight-words/flash-cards/creator-1up/"
        target="_blank">Flash Cards</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', backgroundColor: '#343541', color:'white'  }}>
      <Card.Img variant="top" src="https://img.posterstore.com/zoom/animalalphabet.jpeg" />
      <Card.Body>
        <Card.Title>Animal Alphabet</Card.Title>
        <Card.Text>
          Letter name sound correspondance with animal visuals.
        </Card.Text>
        <Button variant="primary" href='https://img.posterstore.com/zoom/animalalphabet.jpeg'>Animal Alphabet</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', backgroundColor: '#343541', color:'white'  }}>
      <Card.Img variant="top" src="https://cms-tc.pbskids.org/parents/Authors/readingrockets.jpg" />
      <Card.Body>
        <Card.Title>Reading Rockets</Card.Title>
        <Card.Text>
          Reading support
        </Card.Text>
        <Button variant="primary" href='https://www.readingrockets.org/reading-101/reading-and-writing-basics/phonics-and-decoding'>Reading rockets</Button>
      </Card.Body>
    </Card>
    
        </Row>
      </Container>
      </div>
    </>
  )
}

export default Reading;