import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css';
import { useState, useEffect } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import data from '../public/extras.json'

function App() {
  const [employees, setEmployees] = useState([]); // Inicializa el estado como un array vacío
  const limit = 18

  useEffect(() => {
    // Ordenar de manera descendente el objeto
    const sortedData = data.sort((a, b) => a.currentTime - b.currentTime)
    console.log(data);
    setEmployees(sortedData)
  }, []);

  const avatar = (str) => {
    const settings = {
      size: 128,
      'font-size': 0.5,
      length: 2,
      name: str,
      rounded: true,
      bold: false,
      background: 'random',
      color: '8b5d5d',
      uppercase: false,
      format: 'svg'
    };

    const queryString = Object.keys(settings)
      .map(key => `${key}=${encodeURIComponent(settings[key])}`)
      .join('&');

    const url = `https://ui-avatars.com/api/?${queryString}`;

    return url;
  }

  return (
    <>
      <Container>
          <Row xs={2} sm={2} md={3} lg={4} xl={5} className='d-flex g-4 g-lg-3 content'>
            {employees.map((employee, index) => (
              <Col key={index} className=''>
                <Card className='text-center p-3'>
                  <Card.Img variant='top' className='avatar' src={avatar(employee.name)} />
                  <Card.Body>
                    <Card.Title className='fw-light fs-2'>{employee.name.split(' ')[0]}</Card.Title>
                    <Card.Text className='mt-3'>
                      Disponible:
                      <span className={`d-block fw-light fs-1 ${parseFloat(employee.leftTime) > limit ? 'text-success' : 'text-muted'}`}>{parseFloat(employee.leftTime).toFixed(2)}</span>
                    </Card.Text>
                    <Card.Text>
                      <span className={parseFloat(employee.currentTime) < 0 ? 'text-danger': 'text-success'}>H/E:  {parseFloat(employee.currentTime).toFixed(2)}</span>
                    </Card.Text>
                    <Card.Text>
                      <span className='text-muted'>Viático:  C${parseInt(employee.viatic)}</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
      </Container>
    </>
  );
}

export default App;
