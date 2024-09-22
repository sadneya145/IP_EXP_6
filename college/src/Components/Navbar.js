import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-dark navbar-dark" style={{color: 'white'}}>
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://www.berkeley.edu/students/">Students</Nav.Link>
            <Nav.Link href="https://www.berkeley.edu/faculty-staff/">Faculty & Staff</Nav.Link>
            <Nav.Link href="https://calparents.berkeley.edu/">Parents</Nav.Link>
            <Nav.Link href="https://my.berkeley.edu/">Alumni</Nav.Link>
            <Nav.Link href='https://give.berkeley.edu/home'>Give</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://www.berkeley.edu/map/">Map</Nav.Link>
            <Nav.Link href="https://www.berkeley.edu/directory/">Directory</Nav.Link>
            <Nav.Link href='https://bconnected.berkeley.edu/'>bConnected</Nav.Link>
            <Nav.Link href='https://news.berkeley.edu/'>News</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
