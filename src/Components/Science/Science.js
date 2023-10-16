import React from 'react'
import './Science.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import sciencelogo from '../../assets/science.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'

const Science = () => {
  return (
    <div className='science'>
      <Container> 
        <Row className='px-5 py-4'>
          <Col style={{  textAlign:'center', color:'black', fontFamily:'Helvettica' }}  className="row justify-content-center">
          <Image src={sciencelogo} fluid className='center' style={{ width: '18rem',}}   />
          <h1>Science <br/>Accommodations</h1>
          </Col>
        </Row>
        <Row className='cards'>
        <Card style={{ width: '18rem',backgroundColor: '#343541', color:'white' }}>
      <Card.Img variant="top" 
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Periodic_table_large.svg/640px-Periodic_table_large.svg.png"
       />
      <Card.Body>
        <Card.Title>Periodic Table</Card.Title>
        <Card.Text>
          Periodic Table
        </Card.Text>
        <Button variant="primary" href="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Periodic_table_large.svg/640px-Periodic_table_large.svg.png"
        target="_blank">Periodic Table</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', backgroundColor: '#343541', color:'white'  }}>
      <Card.Img variant="top" src="https://www.datocms-assets.com/25800/1687325348-lateral-view-2.png" />
      <Card.Body>
        <Card.Title>Hypothesis</Card.Title>
        <Card.Text>
          Hypothesis Anchor Chart
        </Card.Text>
        <Button variant="primary">Hypothesis</Button>
      </Card.Body>
    </Card>
        </Row>
      </Container>
    </div>
  )
}

export default Science