import React from 'react'
import './Writing.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import writinglogo from '../../assets/writing.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'

const Writing = () => {
  return (
    <div className='writing'>
      <Container> 
        <Row className='px-5 py-4'>
          <Col style={{  textAlign:'center', color:'black', fontFamily:'Helvettica' }}  className="row justify-content-center">
          <Image src={writinglogo} fluid className='center' style={{ width: '18rem',}}   />
          <h1>Writing <br/>Accommodations</h1>
          </Col>
        </Row>
        <Row className='cards'>
        <Card style={{ width: '18rem',backgroundColor: '#343541', color:'white' }}>
      <Card.Img variant="top" 
      src="https://i.pinimg.com/736x/ea/29/10/ea29102719bc2aa016b7272cb685c2a5.jpg"
       />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          I read I thought graphic organizer to organize writing.
        </Card.Text>
        <Button variant="primary" href="https://i.pinimg.com/736x/ea/29/10/ea29102719bc2aa016b7272cb685c2a5.jpg"
        target="_blank">I read, I thought</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', backgroundColor: '#343541', color:'white'  }}>
      <Card.Img variant="top" src="https://superstarworksheets.com/wp-content/uploads/2023/09/GraphicOrganizer.jpg" />
      <Card.Body>
        <Card.Title>Main Idea</Card.Title>
        <Card.Text>
          Main idea anchor chart.
        </Card.Text>
        <Button variant="primary" href='https://superstarworksheets.com/wp-content/uploads/2023/09/GraphicOrganizer.jpg'>Main idea</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', backgroundColor: '#343541', color:'white'  }}>
      <Card.Img variant="top" src="https://i.ytimg.com/vi_webp/EfaJ6n64A8g/maxresdefault.webp" />
      <Card.Body>
        <Card.Title>Minecraft Writing Prompt</Card.Title>
        <Card.Text>
          2nd grade writing prompt about minecraft.
        </Card.Text>
        <Button variant="primary" href='https://docs.google.com/document/d/1lt0RwcHWCGLR43SQyZH68TgkXh9kKQ9XdnSsxUDvt5I/edit?pli=1'>Minecraft Prompt</Button>
      </Card.Body>
    </Card>
        </Row>
      </Container>
      </div>
  )
}

export default Writing