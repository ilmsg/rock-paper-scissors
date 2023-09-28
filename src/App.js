// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import rock from './rock.png';
import scissors from './scissors.png';
import paper from './paper.png';
import shadow from './shadow.png';

function App() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src={rock} width={300} height={400} roundedCircle />
        </Col>
        <Col xs={6} md={4}>
          <Image src={scissors} width={300} height={400} roundedCircle />
        </Col>
        <Col xs={6} md={4}>
          <Image src={paper} width={300} height={400} roundedCircle />
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={4}>
          <Image src={shadow} width={300} height={50} roundedCircle />
        </Col>
        <Col xs={6} md={4}>
        </Col>
        <Col xs={6} md={4}>
          <Image src={shadow} width={300} height={50} roundedCircle />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
