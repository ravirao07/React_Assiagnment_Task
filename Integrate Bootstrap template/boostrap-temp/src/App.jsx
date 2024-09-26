

import './App.css'
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <Container>

      <Row>
        <Col xs={12} sm={12}  md={6} lg={6}>
        <div >
        <h2 style={{marginRight:"100px",marginTop:"50px"}}>IRON MAN</h2>
        <p style={{marginTop:"50px", letterSpacing:"2px"}}>IRON MANInventor Tony Stark applies his genius for high-tech solutions to problems as Iron Man, the armored Avenger.Iron Man is the superhero persona of Anthony Edward "Tony" Stark, a businessman and engineer who runs the weapons manufacturing company Stark Industries. When Stark is captured in a war zone and sustains a serious heart wound, he builds his Iron Man armor and escapes his captors. Iron Man's suits of armor grant him superhuman strength, </p>
        <Button style={{width:"150px",borderRadius:"10px",marginLeft:"-65%",marginTop:"50px"}}  variant="outline-primary">I'M AVAILABLE</Button>{' '}
        <div style={{width:"20%",marginTop:"20px",marginLeft:"50px",display:"flex",justifyContent:"space-around"}}>
        <p> <i className="bi bi-facebook"></i></p>
        <p><i class="bi bi-twitter"></i></p>
        <p><i class="bi bi-instagram"></i></p>
        <p><i class="bi bi-alexa"></i></p>
        </div>
        </div>
        </Col>
        <Col>
        <div>
        <img src="https://static.printler.com/cache/4/e/f/2/f/9/4ef2f983834bdcf676c44dad74b16c0d7270c40f.jpg" width={500} height={600} alt="" />
      </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
