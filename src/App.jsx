import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css';
import { Card, Container, Row, Col } from 'react-bootstrap';

function App() {

  const empleados = [
    {
      nombre: 'Darel',
      horasExtraDisponibles: 10,
      fotoURL: 'https://example.com/juan.jpg'
    },
    {
      nombre: 'Kailuma',
      horasExtraDisponibles: 5,
      fotoURL: 'https://example.com/maria.jpg'
    },
    {
      nombre: 'Bryan',
      horasExtraDisponibles: 8,
      fotoURL: 'https://example.com/pedro.jpg'
    },
    {
      nombre: 'Yeser',
      horasExtraDisponibles: 12,
      fotoURL: 'https://example.com/laura.jpg'
    },
    {
      nombre: 'Anthony',
      horasExtraDisponibles: 3,
      fotoURL: 'https://example.com/carlos.jpg'
    }
  ];

  return (
    <>
      <Container className='mt-3'>
        <div className="content">
          <Row xs={1} sm={2} md={3} lg={4} xl={5} className='d-flex'>
            {empleados.map((empleado, index) => (
              <Col key={index} className=''>
                <Card className='text-center'>
                  <Card.Img variant='top' src={empleado.fotoURL} />
                  <Card.Body>
                    <Card.Title>{empleado.nombre}</Card.Title>
                    <Card.Text>
                      Horas extra disponibles:
                      <h3>{empleado.horasExtraDisponibles}</h3>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </>
  );
}

export default App;
